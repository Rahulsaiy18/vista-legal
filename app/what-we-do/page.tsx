import type { Metadata } from "next"
import type React from "react"
import {
  Scale,
  Gavel,
  FileText,
  Building,
  Shield
} from "lucide-react"
import PageHeader from "@/components/page-header"
import WhatsappButton from "@/components/WhatsappButton"

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Vista Legal handles criminal, civil, corporate & commercial law, litigation & dispute resolution, and legal documentation & advisory in Bengaluru.",
  alternates: { canonical: "/what-we-do" },
}

export default function PracticeAreasPage() {
  return (
    <div>
      <PageHeader
        title="Our Practice Areas"
        description="Comprehensive legal services tailored to your specific needs across a wide range of practice areas."
      />

      <div className="container mx-auto px-4 py-20">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <PracticeAreaCard
            id="Criminal Law"
            icon={Scale}
            title="Family Law"
            description="We provide strong legal representation in criminal matters, from bail applications and anticipatory bail to trial and appellate proceedings. With our roots in criminal litigation, we bring a sharp, tactical edge to every case we handle."
          />
          <PracticeAreaCard
            id="corporate-law"
            icon={Building}
            title="Civil Law"
            description="Our civil practice covers property disputes, injunctions, recovery suits, partition suits, contractual disagreements, and more. We work closely with our clients to protect their rights and resolve disputes efficiently."
          />
          <PracticeAreaCard
            id="criminal-defense"
            icon={Gavel}
            title="Corporate and Commercial Law"
            description="We assist businesses with company formation, regulatory compliance, shareholder agreements, commercial contracts, and legal due diligence. Whether you're a startup or an established enterprise, we offer sound legal counsel to support your growth."
          />
          <PracticeAreaCard
            id="estate-planning"
            icon={FileText}
            title="Litigation and Dispute Resolution"
            description="Vista Legal is experienced in handling litigation before various courts and tribunals, including the High Court of Karnataka, civil courts, consumer forums, and quasi-judicial bodies. We also offer arbitration and mediation services for clients seeking alternative dispute resolution."
          />
          <PracticeAreaCard
            id="personal-injury"
            icon={Shield}
            title="Legal Documentation and Advisory"
            description="We draft and review agreements, contracts, legal notices, and opinions to ensure our clients are protected and fully informed. Our advisory services are designed to prevent legal pitfalls and promote informed decision-making."
          />
        </div>

        {/* Summary */}
        <div className="mx-auto mt-20 max-w-5xl text-center space-y-5 text-muted-foreground text-lg">
          <p>
            At Vista Legal, we are committed to delivering exceptional legal services across a broad range of practice areas. Based in the heart of Bengaluru, our firm serves individuals, businesses, and organizations with precision, professionalism, and personalized attention. We understand that each legal matter is unique, and we pride ourselves on offering strategic, client-focused solutions that align with your goals.
          </p>
          <p>
            At Vista Legal, we stand by our values of excellence, integrity, and client-first service. Every matter we take on is handled with dedication, attention to detail, and a relentless focus on achieving the best possible outcome. Our aim is not just to represent you—but to empower you with clarity, confidence, and trusted legal support every step of the way.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button (render only once) */}
      <WhatsappButton />
    </div>
  )
}

function PracticeAreaCard({
  id,
  icon: Icon,
  title,
  description
}: {
  id: string
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div
      id={id}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-md transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}
