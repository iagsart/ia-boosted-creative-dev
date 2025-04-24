
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
