"use client"

import Image from "next/image"
import PageHeader from "@/components/page-header"
import { useMemo } from "react"
import WhatsappButton from "@/components/WhatsappButton"

export default function AboutPage() {
  const events = useMemo(() => [
    {
      title: "Founded in 2024",
      description:
        "Vista Legal was established by Advocates Manoj Kumar J Y and Subhash R. after graduating from Ramaiah Law College and registering with the Karnataka Bar Council in 2021."
    },
    {
      title: "Rooted in Criminal Litigation",
      description:
        "Built a strong foundation under the mentorship of senior advocates like S. Balan, focusing on precision and courtroom advocacy."
    },
    {
      title: "Expanded into Civil & Corporate Law",
      description:
        "Gained hands-on experience under Advocate Harish H V, diversifying practice areas and gaining insight into litigation and advisory work."
    },
    {
      title: "Vista Legal Today",
      description:
        "Now based in Bengaluru, Vista Legal offers comprehensive legal services across courts and tribunals including High Court, Civil & Magistrate Courts, KAT, RERA, and more."
    }
  ], [])

  return (
    <div>
      <PageHeader title="About Our Firm" 
        description="Learn about Vista Legal’s mission, values, and the dedicated professionals behind our client-centered legal practice."
      />

      <div className="container mx-auto px-4 py-16">
        {/* Our Mission Section */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              At Vista Legal Firm, our mission is to provide exceptional legal representation with integrity,
              dedication, and a commitment to achieving the best possible outcomes for our clients. We believe in
              justice for all and strive to make quality legal services accessible to those who need them most.
            </p>
            <p className="text-muted-foreground">
              We approach each case with personalized attention, recognizing that every client's situation is unique and
              deserves a tailored legal strategy. Our lawyers work tirelessly to protect your rights and interests,
              guiding you through complex legal processes with clarity and compassion.
            </p>
          </div>
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/team-meeting.jpg"
              alt="Law firm team meeting in a conference room"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/firm-history.jpg"
              alt="Historic law firm building"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
            <p className="mb-4 text-muted-foreground">
              To be recognized as one of Karnataka’s most trusted and forward-thinking law firms—renowned for ethical practice,
              courtroom excellence, and strategic legal advisory. At Vista Legal, our vision is to redefine the client experience
              by combining deep legal knowledge with innovation, empathy, and unwavering commitment to justice.
              We aim to build lasting relationships that extend beyond the case, empowering clients with clarity, confidence,
              and reliable representation.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mb-20 text-center">
          <blockquote className="mx-auto max-w-3xl text-xl font-medium italic text-muted-foreground">
            “Vista Legal offers a wide range of professional legal services with a commitment to excellence, integrity,
            and client-focused solutions.”
          </blockquote>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
          <h2 className="mb-10 text-center text-2xl font-bold">Our Journey</h2>
          <div className="relative mx-auto max-w-4xl before:absolute before:left-1/2 before:top-0 before:h-full before:w-1 before:-translate-x-1/2 before:bg-primary/50">
            {events.map((event, i) => (
              <div
                key={i}
                className={`relative mb-12 flex w-full items-start ${
                  i % 2 === 0 ? 'justify-start pr-10' : 'justify-end pl-10'
                }`}
              >
                <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-md"></div>
                <div className="w-1/2 rounded-lg border bg-card p-6 shadow-lg">
                  <h4 className="mb-2 text-lg font-semibold">{event.title}</h4>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Button */}
            <WhatsappButton />
    </div>
  )
}
