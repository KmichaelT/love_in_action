import RichText from '@/components/RichText';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaqBlock } from '@/payload-types';
import FaqStructuredData from '@/blocks/Faq/FaqStructuredData';

const Faq1: React.FC<FaqBlock> = ({ headline, faqs, calloutText, calloutLink }) => {
  return (
    <section className="py-32">
      <FaqStructuredData faqs={faqs} />
      <div className="container">
        {headline && <RichText
          content={headline}
          withWrapper={false}
          overrideStyle={{
            h1: 'mb-4 text-3xl font-semibold md:mb-11 md:text-5xl',
            h2: 'mb-4 text-2xl font-semibold md:mb-11 md:text-4xl',
            h3: 'mb-4 text-xl font-semibold md:mb-11 md:text-3xl',
            h4: 'mb-4 text-l font-semibold md:mb-11 md:text-2xl',
          }}
        />}
        {faqs?.map(({ question, answer, id }, index) => (
          <Accordion key={id} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                {question}
              </AccordionTrigger>
              {answer && <AccordionContent>
                <RichText
                  content={answer}
                  withWrapper={false}
                />
              </AccordionContent>}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq1;
