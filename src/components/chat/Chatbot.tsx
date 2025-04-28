
import { useState, useEffect } from 'react';
import { Bot, Send, Loader2, X, RefreshCw, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';
import { useLocation } from 'react-router-dom';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface PromptPreset {
  label: string;
  prompt: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  // Déterminer la section actuelle en fonction de l'URL
  const getCurrentSection = () => {
    const path = location.pathname;
    
    if (path === '/') return 'home';
    if (path.startsWith('/blog')) return 'blog';
    if (path.startsWith('/services')) {
      const servicePath = path.split('/')[2];
      if (servicePath) return `services-${servicePath}`;
      return 'services';
    }
    if (path.startsWith('/portfolio')) return 'portfolio';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/resources')) return 'resources';
    
    return 'general';
  };

  // Instructions contextuelles basées sur la section courante
  const getContextualInstructions = () => {
    const section = getCurrentSection();
    
    const instructions = {
      'home': `Tu es l'assistant IA de Geoffroy Streit, un consultant en créativité et intelligence artificielle. Tu te trouves sur la page d'accueil du site qui présente un aperçu des services, compétences et projets de Geoffroy. Aide les visiteurs à naviguer sur le site et à comprendre les services offerts.`,
      
      'blog': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur consulte actuellement la section blog qui contient des articles sur la technologie, l'IA et l'innovation. Aide-le à trouver des articles pertinents, explique les concepts présentés dans les articles, ou réponds à ses questions sur ces sujets.`,
      
      'services': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur consulte la page services qui présente les différentes offres : développement, IA, data, contenu, conseil et musique. Aide-le à comprendre ces services et à identifier ceux qui correspondent à ses besoins.`,
      
      'services-development': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page des services de développement web et solutions no-code/low-code. Aide-le à comprendre ces services et réponds à ses questions techniques sur le développement.`,
      
      'services-ai': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page des services d'intelligence artificielle. Explique comment l'IA peut être intégrée dans différents projets et comment Geoffroy accompagne ses clients dans cette démarche.`,
      
      'services-data': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page des services de gestion et visualisation de données. Explique comment l'analyse de données peut aider les entreprises et comment ces services sont mis en œuvre.`,
      
      'services-content': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page des services de création de contenu et design. Décris les différentes prestations d'infographie et design proposées et comment elles peuvent répondre aux besoins des clients.`,
      
      'services-consulting': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page des services de conseil et stratégie. Explique l'approche de conseil, l'expertise optronique et les méthodes d'idéation proposées.`,
      
      'services-music': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page des services de musique. Présente les services de création musicale et sonore proposés.`,
      
      'portfolio': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur consulte la page portfolio qui présente différents projets réalisés. Aide-le à comprendre ces projets et les technologies utilisées.`,
      
      'about': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page "À propos" qui présente le parcours, les compétences et la philosophie de Geoffroy. Réponds à ses questions sur le profil et l'expertise de Geoffroy.`,
      
      'contact': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur est sur la page contact. Aide-le à formuler sa demande de contact et fournis des informations sur les modalités de collaboration.`,
      
      'resources': `Tu es l'assistant IA de Geoffroy Streit. L'utilisateur consulte la page des ressources qui offre divers guides et outils. Aide-le à trouver les ressources pertinentes pour ses besoins.`,
      
      'general': `Tu es l'assistant IA de Geoffroy Streit, un consultant en créativité et intelligence artificielle. Aide les visiteurs à naviguer sur le site et à comprendre les services offerts.`
    };
    
    return instructions[section] || instructions['general'];
  };

  // Presets de prompts en fonction de la section courante
  const getPromptPresets = (): PromptPreset[] => {
    const section = getCurrentSection();
    
    const presets = {
      'home': [
        { label: "Quels services proposez-vous ?", prompt: "Quels sont les principaux services que propose Geoffroy Streit ?" },
        { label: "Comment l'IA peut m'aider ?", prompt: "Comment l'intelligence artificielle peut-elle aider mon entreprise concrètement ?" },
        { label: "Expérience professionnelle", prompt: "Quelle est l'expérience professionnelle de Geoffroy Streit ?" },
        { label: "Expertise technique", prompt: "Dans quels domaines techniques Geoffroy est-il spécialisé ?" },
        { label: "Tarifs", prompt: "Comment sont définis les tarifs des prestations ?" },
        { label: "Processus de travail", prompt: "Comment se déroule généralement une collaboration ?" },
        { label: "Disponibilité", prompt: "Quels sont les délais habituels pour démarrer un nouveau projet ?" },
        { label: "Formations proposées", prompt: "Proposez-vous des formations sur l'utilisation de l'IA ?" },
        { label: "Clients typiques", prompt: "Avec quel type de clients travaillez-vous habituellement ?" },
        { label: "Technologies utilisées", prompt: "Quelles technologies et outils utilisez-vous principalement ?" }
      ],
      
      'blog': [
        { label: "Articles sur l'IA éthique", prompt: "Quels articles parlent d'éthique dans l'IA ?" },
        { label: "Dernières tendances IA", prompt: "Quelles sont les dernières tendances en matière d'IA selon les articles du blog ?" },
        { label: "Prompt engineering", prompt: "Pouvez-vous m'expliquer ce qu'est le prompt engineering dont parle l'article ?" },
        { label: "React et TypeScript", prompt: "Quels sont les avantages de React avec TypeScript mentionnés dans le blog ?" },
        { label: "Marketing digital", prompt: "Quelles stratégies de marketing digital sont recommandées dans les articles ?" },
        { label: "CI/CD et déploiement", prompt: "Pouvez-vous résumer les bonnes pratiques de CI/CD mentionnées ?" },
        { label: "Performance web", prompt: "Quelles techniques d'optimisation web sont évoquées dans les articles ?" },
        { label: "Conseils développement", prompt: "Quels conseils pour les développeurs sont partagés dans le blog ?" },
        { label: "Applications de l'IA", prompt: "Quels cas d'usage de l'IA sont présentés dans les articles ?" },
        { label: "Technologies émergentes", prompt: "Quelles technologies émergentes sont mentionnées dans le blog ?" }
      ],
      
      'services': [
        { label: "Services IA", prompt: "Quels services liés à l'intelligence artificielle proposez-vous ?" },
        { label: "Solutions no-code", prompt: "Pouvez-vous m'en dire plus sur vos solutions no-code et low-code ?" },
        { label: "Visualisation de données", prompt: "Comment abordez-vous la visualisation et l'analyse de données ?" },
        { label: "Services créatifs", prompt: "Quels services de création graphique et de design proposez-vous ?" },
        { label: "Conseil stratégique", prompt: "En quoi consiste votre offre de conseil stratégique ?" },
        { label: "Expertise optronique", prompt: "Pouvez-vous détailler votre expertise en optronique ?" },
        { label: "Création musicale", prompt: "Quels types de créations musicales proposez-vous ?" },
        { label: "Formation IA", prompt: "Proposez-vous des formations sur l'utilisation de l'IA ?" },
        { label: "Durée des projets", prompt: "Quelle est la durée moyenne des projets que vous réalisez ?" },
        { label: "Méthodologie", prompt: "Quelle méthodologie utilisez-vous pour mener à bien les projets ?" }
      ],
      
      'portfolio': [
        { label: "Projets web", prompt: "Pouvez-vous me présenter vos projets web les plus représentatifs ?" },
        { label: "Projets IA", prompt: "Quels projets avez-vous réalisés impliquant l'intelligence artificielle ?" },
        { label: "Applications mobiles", prompt: "Avez-vous développé des applications mobiles ?" },
        { label: "Design graphique", prompt: "Pouvez-vous montrer des exemples de design graphique ?" },
        { label: "Projets data", prompt: "Quels projets de visualisation de données avez-vous réalisés ?" },
        { label: "Technologies utilisées", prompt: "Quelles technologies utilisez-vous principalement dans vos projets ?" },
        { label: "Clients notables", prompt: "Avec quels clients notables avez-vous travaillé ?" },
        { label: "Projets open source", prompt: "Avez-vous contribué à des projets open source ?" },
        { label: "Réalisations musicales", prompt: "Pouvez-vous partager certaines de vos créations musicales ?" },
        { label: "Études de cas", prompt: "Pouvez-vous détailler une étude de cas d'un projet réussi ?" }
      ],
      
      'about': [
        { label: "Parcours professionnel", prompt: "Quel est le parcours professionnel de Geoffroy Streit ?" },
        { label: "Formation", prompt: "Quelle est la formation académique de Geoffroy ?" },
        { label: "Compétences techniques", prompt: "Quelles sont les principales compétences techniques de Geoffroy ?" },
        { label: "Vision de l'IA", prompt: "Quelle est la vision de Geoffroy concernant l'avenir de l'IA ?" },
        { label: "Valeurs", prompt: "Quelles sont les valeurs qui guident l'approche professionnelle de Geoffroy ?" },
        { label: "Expérience optronique", prompt: "Pouvez-vous détailler l'expérience en optronique de Geoffroy ?" },
        { label: "Reconversion", prompt: "Comment s'est déroulée la reconversion professionnelle de Geoffroy ?" },
        { label: "Publications", prompt: "Geoffroy a-t-il publié des articles ou des livres ?" },
        { label: "Conférences", prompt: "Geoffroy donne-t-il des conférences sur l'IA ou d'autres sujets ?" },
        { label: "Objectifs", prompt: "Quels sont les objectifs professionnels actuels de Geoffroy ?" }
      ],
      
      'contact': [
        { label: "Procédure de contact", prompt: "Quelle est la meilleure façon de contacter Geoffroy pour un projet ?" },
        { label: "Délais de réponse", prompt: "Dans quels délais puis-je espérer une réponse à ma demande ?" },
        { label: "Informations requises", prompt: "Quelles informations dois-je préparer pour discuter de mon projet ?" },
        { label: "Disponibilité", prompt: "Quelle est la disponibilité actuelle pour de nouveaux projets ?" },
        { label: "Tarification", prompt: "Comment sont établis les tarifs des prestations ?" },
        { label: "Processus de devis", prompt: "Comment se déroule le processus d'établissement d'un devis ?" },
        { label: "Zone géographique", prompt: "Travaillez-vous avec des clients à distance ou uniquement localement ?" },
        { label: "Premier rendez-vous", prompt: "Comment se déroule un premier rendez-vous de découverte ?" },
        { label: "Suivi de projet", prompt: "Comment assurez-vous le suivi des projets avec vos clients ?" },
        { label: "Confidentialité", prompt: "Comment assurez-vous la confidentialité des informations partagées ?" }
      ],
      
      'services-development': [
        { label: "Technologies web", prompt: "Quelles technologies web maîtrisez-vous ?" },
        { label: "Outils no-code", prompt: "Quels outils no-code recommandez-vous ?" },
        { label: "Applications React", prompt: "Pouvez-vous créer des applications React complexes ?" },
        { label: "Sites e-commerce", prompt: "Proposez-vous des solutions e-commerce ?" },
        { label: "Applications mobiles", prompt: "Développez-vous des applications mobiles ?" },
        { label: "Maintenance", prompt: "Proposez-vous des services de maintenance après développement ?" },
        { label: "Intégration API", prompt: "Comment gérez-vous l'intégration avec des API tierces ?" },
        { label: "Référencement", prompt: "Prenez-vous en compte le SEO dans vos développements ?" },
        { label: "Accessibilité", prompt: "Comment intégrez-vous les normes d'accessibilité web ?" },
        { label: "Tests et qualité", prompt: "Quelles sont vos pratiques en matière de tests et d'assurance qualité ?" }
      ],
      
      'services-ai': [
        { label: "Modèles d'IA utilisés", prompt: "Quels modèles d'IA utilisez-vous principalement ?" },
        { label: "Automatisation", prompt: "Comment l'IA peut-elle automatiser certaines de mes tâches ?" },
        { label: "Chatbots", prompt: "Pouvez-vous développer des chatbots personnalisés ?" },
        { label: "Vision par ordinateur", prompt: "Proposez-vous des solutions de vision par ordinateur ?" },
        { label: "Traitement du langage", prompt: "Quelles applications du NLP proposez-vous ?" },
        { label: "Analyse prédictive", prompt: "Comment implémenter l'analyse prédictive dans mon entreprise ?" },
        { label: "Personnalisation IA", prompt: "Comment personnaliser l'IA pour mes besoins spécifiques ?" },
        { label: "Formation Prompting", prompt: "Proposez-vous des formations sur les techniques de prompting ?" },
        { label: "IA responsable", prompt: "Comment abordez-vous les questions d'éthique en IA ?" },
        { label: "ROI de l'IA", prompt: "Comment mesurer le retour sur investissement des solutions IA ?" }
      ],
      
      'general': [
        { label: "Services proposés", prompt: "Quels sont les services proposés par Geoffroy Streit ?" },
        { label: "Domaines d'expertise", prompt: "Dans quels domaines Geoffroy a-t-il une expertise particulière ?" },
        { label: "Projets récents", prompt: "Pouvez-vous me parler des projets récents réalisés ?" },
        { label: "Prise de contact", prompt: "Comment puis-je prendre contact pour discuter d'un projet ?" },
        { label: "Applications de l'IA", prompt: "Comment l'IA peut-elle être appliquée à mon secteur d'activité ?" },
        { label: "Ressources disponibles", prompt: "Quelles ressources sont disponibles sur le site ?" },
        { label: "Tarifs", prompt: "Comment sont établis les tarifs des prestations ?" },
        { label: "Processus de travail", prompt: "Comment se déroule généralement une collaboration ?" },
        { label: "Technologies utilisées", prompt: "Quelles technologies utilisez-vous principalement ?" },
        { label: "Disponibilité", prompt: "Quelle est la disponibilité actuelle pour de nouveaux projets ?" }
      ]
    };
    
    return presets[section] || presets['general'];
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage = { role: 'user' as const, content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setShowPresets(false);

    try {
      // Instructions contextuelles en fonction de la page
      const contextualInstructions = getContextualInstructions();

      // Appel à l'edge function Supabase avec contexte
      const { data, error } = await supabase.functions.invoke('generate-response', {
        body: { 
          message: input.trim(),
          contextualInstructions: contextualInstructions
        },
      });

      if (error) {
        console.error("Erreur lors de l'appel de la fonction edge:", error);
        throw new Error(error.message || "Échec de l'obtention d'une réponse");
      }
      
      if (!data || !data.response) {
        console.error("Réponse invalide de l'API:", data);
        throw new Error("Réponse invalide de l'assistant");
      }
      
      const assistantMessage = { role: 'assistant' as const, content: data.response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'obtenir une réponse. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePresetClick = (prompt: string) => {
    setInput(prompt);
    setShowPresets(false);
  };

  const resetConversation = () => {
    setMessages([]);
    setShowResetDialog(false);
    toast({
      title: "Conversation réinitialisée",
      description: "Une nouvelle conversation a été démarrée.",
    });
  };

  // Réinitialiser les messages lors du changement de page
  useEffect(() => {
    setMessages([]);
  }, [location.pathname]);

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90 transition-all duration-300 ease-in-out animate-fade-in"
          >
            <Bot className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        
        <DrawerContent className="h-[80vh] border-t-4 border-primary">
          <DrawerHeader className="flex justify-between items-center bg-primary/5 pb-2">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <DrawerTitle>Assistant IA</DrawerTitle>
            </div>
            <div className="flex gap-2">
              {messages.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowResetDialog(true)}
                  title="Nouvelle conversation"
                  className="hover:bg-primary/10"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              )}
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DrawerHeader>
          
          <div className="flex flex-col h-full p-4">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1 custom-scrollbar">
              {messages.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-lg font-medium">Bonjour ! Comment puis-je vous aider aujourd'hui ?</p>
                  <p className="text-sm mb-4">Je suis l'assistant IA de Geoffroy Streit. N'hésitez pas à me poser vos questions.</p>
                  <Button 
                    variant="outline" 
                    className="mt-2"
                    onClick={() => setShowPresets(!showPresets)}
                  >
                    {showPresets ? 'Masquer les suggestions' : 'Voir des suggestions'}
                  </Button>

                  {showPresets && (
                    <div className="mt-6 space-y-2 max-h-80 overflow-y-auto">
                      {getPromptPresets().map((preset, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          className="w-full justify-start text-left text-sm hover:bg-primary/10 transition-colors"
                          onClick={() => handlePresetClick(preset.prompt)}
                        >
                          <MessageSquare className="h-3 w-3 mr-2 text-primary" />
                          {preset.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              )}
              
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex animate-fade-in ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 shadow-sm ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto rounded-br-none'
                        : 'bg-muted rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-muted rounded-lg p-3 max-w-[80%] rounded-bl-none shadow-sm">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-primary" />
                      <span className="text-sm text-muted-foreground">Génération de la réponse...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={handleSendMessage} className="mt-auto flex gap-2 bg-background sticky bottom-0 pb-2 pt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="transition-all"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Dialog de confirmation pour réinitialiser la conversation */}
      <AlertDialog open={showResetDialog} onOpenChange={setShowResetDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Nouvelle conversation</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir terminer cette conversation et en démarrer une nouvelle ? 
              Tout l'historique de cette conversation sera effacé.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={resetConversation}>Confirmer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Styles globaux pour le chatbot */}
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
        `}
      </style>
    </>
  );
};

export default Chatbot;
