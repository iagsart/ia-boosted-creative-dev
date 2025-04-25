import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from "@/components/ui/section-title";

const faqItems = [
  {
    question: "Comment puis-je commencer avec l'IA ?",
    answer: "Commencez par explorer nos guides gratuits sur l'IA et suivez nos tutoriels étape par étape. Nous recommandons de débuter avec notre guide d'introduction à l'IA disponible dans la section ressources, puis de poursuivre avec le guide de prompt engineering pour apprendre à interagir efficacement avec les modèles d'IA."
  },
  {
    question: "Quels sont vos services de conseil ?",
    answer: "Nous proposons des services de conseil personnalisés en IA, développement, et transformation digitale. Chaque mission est adaptée aux besoins spécifiques de votre entreprise. Nos consultants experts peuvent vous accompagner depuis la phase de conception jusqu'à l'implémentation et la formation de vos équipes."
  },
  {
    question: "Comment accéder aux templates ?",
    answer: "Tous nos templates sont disponibles gratuitement dans la section ressources. Il vous suffit de cliquer sur le bouton 'Télécharger' associé au template qui vous intéresse. Les templates sont hébergés sur GitHub, ce qui vous permet également de voir le code source, signaler des problèmes ou proposer des améliorations."
  },
  {
    question: "Proposez-vous des formations ?",
    answer: "Oui, nous proposons des formations sur mesure en IA, développement web, et data science. Ces formations peuvent être dispensées en présentiel ou à distance selon vos préférences. Contactez-nous pour élaborer un programme adapté aux besoins de votre équipe."
  },
  {
    question: "Puis-je utiliser vos ressources gratuites pour un projet commercial ?",
    answer: "Oui, toutes nos ressources gratuites sont sous licence MIT, ce qui signifie que vous pouvez les utiliser librement pour des projets personnels ou commerciaux. Nous vous demandons simplement de conserver la mention de l'auteur dans les fichiers source."
  },
  {
    question: "Comment contribuer à vos ressources ?",
    answer: "Vous pouvez contribuer en proposant vos propres ressources, en améliorant les ressources existantes via GitHub, ou en signalant des erreurs. Rendez-vous dans la section 'Comment contribuer' de notre page Ressources pour plus d'informations."
  },
  {
    question: "Les tutoriels sont-ils adaptés aux débutants ?",
    answer: "Oui, nous avons conçu nos tutoriels pour tous les niveaux, du débutant à l'expert. Chaque tutoriel indique clairement le niveau requis et les prérequis nécessaires. Pour les débutants, nous recommandons de commencer par nos guides d'introduction avant de passer aux tutoriels plus avancés."
  },
  {
    question: "À quelle fréquence ajoutez-vous de nouvelles ressources ?",
    answer: "Nous enrichissons notre bibliothèque de ressources chaque mois avec de nouveaux templates, guides et tutoriels. Abonnez-vous à notre newsletter pour être informé des nouvelles ressources dès leur publication."
  },
  {
    question: "Comment personnaliser les templates ?",
    answer: "Nos templates sont conçus pour être facilement personnalisables. Chaque template inclut une documentation détaillée expliquant la structure du code et les points de personnalisation. Vous pouvez modifier les couleurs, les polices et le contenu en suivant notre guide de personnalisation inclus dans le README.md de chaque projet."
  },
  {
    question: "Les ressources sont-elles mises à jour régulièrement ?",
    answer: "Oui, nous mettons à jour nos ressources régulièrement pour assurer leur compatibilité avec les dernières versions des frameworks et bibliothèques. La date de dernière mise à jour est indiquée sur chaque ressource, et vous pouvez suivre les changements via notre système de versioning sur GitHub."
  },
  {
    question: "Puis-je suggérer de nouvelles ressources ou améliorations ?",
    answer: "Absolument ! Nous encourageons la participation de la communauté. Vous pouvez suggérer de nouvelles ressources ou des améliorations via notre formulaire de contact ou en créant une issue sur GitHub. Notre équipe examine toutes les suggestions et les intègre si elles correspondent à nos critères de qualité."
  },
  {
    question: "Comment sont organisées les ressources ?",
    answer: "Nos ressources sont classées en quatre catégories principales : templates, guides, tutoriels et outils. Chaque catégorie est étiquetée avec des tags pertinents pour faciliter la recherche. Vous pouvez utiliser les filtres et la barre de recherche pour trouver rapidement ce dont vous avez besoin."
  },
  {
    question: "Quelle est la différence entre un guide et un tutoriel ?",
    answer: "Les guides sont des documents complets qui couvrent un sujet en profondeur, offrant une vue d'ensemble et des concepts théoriques. Les tutoriels sont plus pratiques et étape par étape, conçus pour vous faire réaliser un projet spécifique du début à la fin."
  },
  {
    question: "Comment signaler un problème avec une ressource ?",
    answer: "Si vous rencontrez un problème avec une ressource, vous pouvez le signaler de plusieurs façons : en créant une issue sur le dépôt GitHub correspondant, en utilisant notre formulaire de contact, ou en laissant un commentaire directement sur la page de la ressource. Notre équipe de support répondra dans les 48 heures."
  },
  {
    question: "Existe-t-il une version premium des ressources ?",
    answer: "Certaines de nos ressources ont une version premium avec des fonctionnalités avancées, un support prioritaire et des mises à jour exclusives. Ces versions sont clairement indiquées avec un badge 'Premium' et leurs avantages sont détaillés sur leurs pages respectives."
  },
  {
    question: "Proposez-vous du support pour l'utilisation des ressources ?",
    answer: "Oui, nous proposons plusieurs niveaux de support : une documentation détaillée gratuite, une communauté Discord active pour l'entraide, et un support technique premium pour les utilisateurs professionnels. Vous pouvez également trouver des réponses dans notre base de connaissances en ligne."
  },
  {
    question: "Les ressources sont-elles adaptées aux projets d'entreprise ?",
    answer: "Oui, nos ressources sont conçues pour être utilisables aussi bien dans des projets personnels que professionnels. Nos templates incluent des fonctionnalités essentielles pour les entreprises comme l'authentification, la gestion des droits, et des bonnes pratiques de sécurité."
  },
  {
    question: "Comment choisir le bon template pour mon projet ?",
    answer: "Pour choisir le bon template, considérez les critères suivants : vos besoins fonctionnels, votre niveau technique, les technologies utilisées, et l'échelle de votre projet. Notre assistant IA peut vous guider dans ce choix en analysant vos besoins spécifiques."
  },
  {
    question: "Comment gérer la sécurité avec les templates ?",
    answer: "Tous nos templates incluent des bonnes pratiques de sécurité comme la validation des entrées, la protection CSRF, et le stockage sécurisé des données sensibles. Nous fournissons également une documentation détaillée sur la configuration des paramètres de sécurité."
  },
  {
    question: "Les ressources sont-elles compatibles avec les derniers frameworks ?",
    answer: "Oui, nous maintenons nos ressources à jour avec les dernières versions des frameworks populaires comme React 18+, Next.js 13+, et les dernières versions de TypeScript. Les mises à jour sont régulières et documentées."
  },
  {
    question: "Proposez-vous des ressources pour l'apprentissage de l'IA ?",
    answer: "Oui, nous offrons une variété de ressources d'apprentissage sur l'IA, notamment des guides de démarrage, des tutoriels pratiques, des études de cas, et des exemples de code pour différents niveaux d'expertise."
  },
  {
    question: "Comment assurer la compatibilité mobile des templates ?",
    answer: "Nos templates sont développés avec une approche 'mobile-first' et utilisent des pratiques de design responsive modernes. Chaque template est testé sur différents appareils et navigateurs pour garantir une expérience cohérente."
  },
  {
    question: "Existe-t-il des ressources pour l'optimisation SEO ?",
    answer: "Oui, nous proposons des guides et outils pour l'optimisation SEO, incluant des bonnes pratiques pour le référencement, des check-lists SEO, et des composants React optimisés pour les moteurs de recherche."
  },
  {
    question: "Comment contribuer à l'amélioration des ressources ?",
    answer: "Vous pouvez contribuer de plusieurs façons : soumettre des corrections via GitHub, proposer de nouvelles fonctionnalités, partager vos retours d'expérience, ou créer du contenu complémentaire pour la communauté."
  },
  {
    question: "Les ressources sont-elles accessibles aux personnes handicapées ?",
    answer: "Oui, nous accordons une grande importance à l'accessibilité. Nos templates suivent les normes WCAG 2.1 et incluent des fonctionnalités comme la navigation au clavier, le support des lecteurs d'écran, et des contrastes de couleurs appropriés."
  },
  {
    question: "Quelles sont les meilleures pratiques pour utiliser l'IA de manière éthique ?",
    answer: "Nous recommandons de suivre nos guides sur l'IA éthique qui couvrent la transparence algorithmique, la protection des données personnelles, l'équité dans les décisions automatisées, et la réduction des biais."
  },
  {
    question: "Comment intégrer les ressources avec des CMS headless ?",
    answer: "Nos templates et guides incluent des exemples d'intégration avec des CMS headless populaires comme Strapi, Contentful, et Sanity. Nous fournissons des tutoriels détaillés pour chaque intégration."
  },
  {
    question: "Proposez-vous des solutions pour le déploiement automatisé ?",
    answer: "Oui, nos ressources incluent des configurations CI/CD prêtes à l'emploi pour GitHub Actions, GitLab CI, et d'autres plateformes. Consultez notre guide de déploiement pour plus de détails."
  }
];

const FaqSection = () => {
  return (
    <section className="py-12 bg-accent/5">
      <div className="container">
        <SectionTitle
          title="Questions Fréquentes"
          subtitle="Trouvez rapidement des réponses à vos questions sur nos ressources et services"
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
