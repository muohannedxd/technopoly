import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQList, FAQProps } from "@/lib/data/faq.data";

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-14 sm:py-22 justify-center items-center flex flex-col gap-8" 
    >
      <div className="text-center flex flex-col gap-4">
        <p className="text-title">FAQ</p>
        <p className="text-main text-lightblue">Frequently Asked Questions</p>
      </div>

      <Accordion type="single" collapsible className="w-full AccordionRoot flex flex-col gap-4">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem 
            key={value}
            value={value}
            className="border-t-[0.34em] border-l-[0.34em] border-r-8 border-b-8 border-foreground
                       bg-secondary rounded-2xl">
            <AccordionTrigger className="px-4 py-3 text-left text-lg md:text-xl">
              {question}
            </AccordionTrigger>
            <AccordionContent className="px-4 text-base md:text-lg text-foreground/70">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
