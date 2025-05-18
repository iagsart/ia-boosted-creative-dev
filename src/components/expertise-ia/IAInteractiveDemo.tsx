
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle, AlertCircle, Trash, RotateCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type SentimentResult = {
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
  keywords: string[];
};

const exampleTexts = [
  "Le service client était excellent et le produit dépasse toutes mes attentes. Je suis très satisfait de mon achat !",
  "La livraison a été retardée et le produit est arrivé endommagé. Je ne recommanderai pas cette entreprise.",
  "Le produit fonctionne comme prévu. La livraison était dans les délais standards.",
  "Bien que le prix soit un peu élevé, la qualité du produit justifie l'investissement. Le service client pourrait être amélioré.",
];

const mockAnalysis = (text: string): SentimentResult => {
  // Simplified mock sentiment analysis
  const lowerText = text.toLowerCase();
  let sentiment: 'positive' | 'negative' | 'neutral' = 'neutral';
  let confidence = 0.5;
  
  const positiveWords = ['excellent', 'satisfait', 'dépasse', 'bien', 'qualité', 'recommande', 'impressionné', 'merci'];
  const negativeWords = ['retard', 'endommagé', 'déçu', 'problème', 'erreur', 'mauvais', 'défectueux'];
  
  const posCount = positiveWords.filter(word => lowerText.includes(word)).length;
  const negCount = negativeWords.filter(word => lowerText.includes(word)).length;

  if (posCount > negCount) {
    sentiment = 'positive';
    confidence = 0.5 + (posCount - negCount) * 0.1;
  } else if (negCount > posCount) {
    sentiment = 'negative';
    confidence = 0.5 + (negCount - posCount) * 0.1;
  } else {
    sentiment = 'neutral';
    confidence = 0.5 + Math.random() * 0.2;
  }
  
  // Cap confidence at 0.95
  confidence = Math.min(confidence, 0.95);
  
  // Extract some keywords from the text
  const allWords = text.split(' ');
  const keywords = Array.from(new Set([
    ...allWords.filter(w => w.length > 5).slice(0, 2),
    ...positiveWords.filter(word => lowerText.includes(word)),
    ...negativeWords.filter(word => lowerText.includes(word))
  ])).slice(0, 5);

  return {
    text,
    sentiment,
    confidence,
    keywords
  };
};

const IAInteractiveDemo = () => {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState<SentimentResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = (text: string = inputText) => {
    if (!text.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const result = mockAnalysis(text);
      setResults(prev => [result, ...prev]);
      setIsLoading(false);
      if (text === inputText) setInputText('');
    }, 1500);
  };

  const handleClearResults = () => {
    setResults([]);
  };

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-3 bg-primary/10 hover:bg-primary/20 text-primary border-primary/20">
              Démo Interactive
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Analyse de sentiment en temps réel
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essayez notre démonstrateur d'analyse de sentiment. Entrez un texte ou sélectionnez un exemple pour voir comment l'IA détecte les émotions et opinions exprimées.
            </p>
          </div>

          <Card className="border-2 border-primary/20 overflow-hidden mb-8">
            <CardContent className="p-0">
              <Tabs defaultValue="input" className="w-full">
                <TabsList className="w-full rounded-none border-b">
                  <TabsTrigger value="input" className="flex-1">
                    Entrée manuelle
                  </TabsTrigger>
                  <TabsTrigger value="examples" className="flex-1">
                    Exemples prédéfinis
                  </TabsTrigger>
                </TabsList>
                
                <div className="p-6">
                  <TabsContent value="input" className="mt-0">
                    <div className="space-y-4">
                      <textarea 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="w-full h-32 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="Entrez un texte à analyser (opinion client, commentaire, critique de produit...)"
                      />
                      
                      <div className="flex justify-end">
                        <Button 
                          onClick={() => handleAnalyze()} 
                          disabled={!inputText.trim() || isLoading}
                          className="gap-2"
                        >
                          {isLoading ? 
                            <RotateCw className="h-4 w-4 animate-spin" /> : 
                            <Search className="h-4 w-4" />
                          }
                          Analyser le sentiment
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="examples" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {exampleTexts.map((text, idx) => (
                        <Card 
                          key={idx} 
                          className="cursor-pointer hover:bg-muted/50 transition-all"
                          onClick={() => handleAnalyze(text)}
                        >
                          <CardContent className="p-4">
                            <p className="text-sm line-clamp-3">{text}</p>
                            <div className="mt-3 flex justify-end">
                              <Button variant="ghost" size="sm" className="text-xs">
                                Analyser cet exemple
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
          </Card>

          <div className="mt-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Résultats d'analyse</h3>
              {results.length > 0 && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2"
                  onClick={handleClearResults}
                >
                  <Trash className="h-4 w-4" />
                  Effacer les résultats
                </Button>
              )}
            </div>

            {results.length === 0 ? (
              <div className="text-center py-12 bg-muted/30 rounded-lg border border-dashed">
                <Search className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Aucune analyse effectuée. Entrez un texte ou sélectionnez un exemple.</p>
              </div>
            ) : (
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
              >
                {results.map((result, idx) => (
                  <motion.div 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    className="mb-4"
                  >
                    <Card className={`
                      border-l-4 
                      ${result.sentiment === 'positive' 
                        ? 'border-l-green-500 bg-green-50/50 dark:bg-green-950/10' 
                        : result.sentiment === 'negative'
                          ? 'border-l-red-500 bg-red-50/50 dark:bg-red-950/10'
                          : 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/10'}
                    `}>
                      <CardContent className="py-4">
                        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                          <div className="col-span-1 md:col-span-5">
                            <p className="text-sm mb-3">{result.text}</p>
                            <div className="flex flex-wrap gap-2">
                              {result.keywords.map((keyword, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="col-span-1 md:col-span-2 flex items-center justify-center md:justify-end">
                            <div className="text-center md:text-right">
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-2 text-sm
                                ${result.sentiment === 'positive' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                                  : result.sentiment === 'negative'
                                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'}
                              ">
                                {result.sentiment === 'positive' ? (
                                  <><CheckCircle className="h-4 w-4" /> Positif</>
                                ) : result.sentiment === 'negative' ? (
                                  <><AlertCircle className="h-4 w-4" /> Négatif</>
                                ) : (
                                  <>Neutre</>
                                )}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                Confiance: {Math.round(result.confidence * 100)}%
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IAInteractiveDemo;
