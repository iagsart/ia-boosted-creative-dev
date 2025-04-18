
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionTitle } from "@/components/ui/section-title";

const faqItems = [
  {
    question: "Comment puis-je commencer avec l'IA ?",
    answer: "Commencez par explorer nos guides gratuits sur l'IA et suivez nos tutoriels étape par étape. Nous recommandons de débuter avec notre guide d'introduction à l'IA disponible dans la section ressources."
  },
  {
    question: "Quels sont vos services de conseil ?",
    answer: "Nous proposons des services de conseil personnalisés en IA, développement, et transformation digitale. Chaque mission est adaptée aux besoins spécifiques de votre entreprise."
  },
  {
    question: "Comment accéder aux templates ?",
    answer: "Tous nos templates sont disponibles gratuitement dans la section ressources. Il vous suffit de cliquer sur le lien de téléchargement du template qui vous intéresse."
  },
  {
    question: "Proposez-vous des formations ?",
    answer: "Oui, nous proposons des formations sur mesure en IA, développement web, et data science. Contactez-nous pour plus d'informations."
  }
];

const FaqSection = () => {
  return (
    <section className="py-12 bg-accent/5">
      <div className="container">
        <SectionTitle
          title="Questions Fréquentes"
          subtitle="Trouvez rapidement des réponses à vos questions"
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
