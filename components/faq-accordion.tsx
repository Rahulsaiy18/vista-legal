"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How do I know if I need a lawyer?",
    answer:
      "If you're facing a legal issue that could significantly impact your rights, finances, or freedom, it's advisable to consult with a lawyer. This includes situations like being charged with a crime, going through a divorce, dealing with a serious injury, starting a business, or drafting important legal documents. Many lawyers offer free initial consultations to help you determine if you need legal representation.",
  },
  {
    question: "How much will legal representation cost?",
    answer:
      "Legal fees vary depending on the complexity of your case, the lawyer's experience, and your location. We offer several fee structures including hourly rates, flat fees for specific services, contingency fees (typically for personal injury cases where we only get paid if you win), and retainer agreements. During your initial consultation, we'll discuss fees and provide a clear understanding of the expected costs for your specific situation.",
  },
  {
    question: "How long will my case take to resolve?",
    answer:
      "The timeline for resolving legal matters varies greatly depending on the type of case, its complexity, the court's schedule, and whether a settlement can be reached. Some simple matters might be resolved in weeks, while complex litigation could take years. During your consultation, we can provide an estimated timeline based on our experience with similar cases, but be aware that unexpected developments can affect this timeline.",
  },
  {
    question: "Will my case go to trial?",
    answer:
      "The majority of legal cases are settled before reaching trial. However, we prepare every case as if it will go to trial to ensure we're in the strongest possible position. Our lawyers are skilled negotiators who strive to reach favorable settlements, but we're also experienced trial lawyers ready to advocate for you in court if necessary. We'll advise you on the strengths and weaknesses of your case to help you make informed decisions about settlement offers.",
  },
  {
    question: "What should I bring to my initial consultation?",
    answer:
      "To make the most of your initial consultation, bring any documents relevant to your case, such as contracts, correspondence, police reports, medical records, or court papers you've received. Also prepare a chronological summary of events and a list of questions you want to ask. This helps us understand your situation quickly and provide more accurate advice during our first meeting.",
  },
  {
    question: "How often will I hear from my lawyer?",
    answer:
      "Communication is a priority at our firm. We provide regular updates on significant developments in your case and respond promptly to your inquiries. The frequency of communication depends on the stage and activity level of your case. During your initial consultation, we'll establish communication expectations and your preferred methods of contact. You can always reach out to our office if you have questions or concerns between scheduled updates.",
  },
  {
    question: "Do you offer payment plans or financing options?",
    answer:
      "We recognize that legal representation often requires thoughtful financial consideration. Depending on the nature and complexity of the matter, we offer flexible payment arrangements designed to accommodate our clients' individual circumstances. While our fee structures are case-specific, we remain committed to ensuring transparency and clarity regarding costs. We encourage clients to discuss available payment options with us during the initial consultation.",
  },
]

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-lg font-medium">{item.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
