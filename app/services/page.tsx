import type { Metadata } from "next"
import Image from "next/image"
import PageHeader from "@/components/page-header"
import {
  Landmark,
  Gavel,
  Scale3D,
  Users2,
  Briefcase,
  PackageCheck,
  Handshake,
  ScrollText,
  BookOpenCheck,
  Home,
  Shield,
  BadgeCheck
} from "lucide-react"
import WhatsappButton from "@/components/WhatsappButton"

export const metadata: Metadata = {
  title: "Courts We Practice In",
  description:
    "Vista Legal represents clients before the High Court of Karnataka, civil and magistrate courts, consumer forums, KAT, RERA, and arbitration centres.",
  alternates: { canonical: "/services" },
}

const courts = [
  { name: "The High Court of Karnataka, Bengaluru", icon: Landmark },
  { name: "The City Civil Courts, Bengaluru", icon: Scale3D },
  { name: "The Magistrate Courts, Bengaluru", icon: Gavel },
  { name: "The Family Courts, Bengaluru", icon: Users2 },
  { name: "The Commercial Courts, Bengaluru", icon: Briefcase },
  { name: "The Consumer Disputes Redressal Forums, Bengaluru", icon: PackageCheck },
  { name: "The Arbitration and Conciliation Centre, Bengaluru", icon: Handshake },
  { name: "Karnataka Administrative Tribunal (KAT)", icon: ScrollText },
  { name: "Karnataka Appellate Tribunal (KAT)", icon: BookOpenCheck },
  { name: "Real Estate Regulatory Authority (RERA)", icon: Home },
  { name: "The Deputy Commissioner Court, Bengaluru", icon: Shield },
  { name: "The Assistant Commissioner Court, Bengaluru", icon: BadgeCheck }
]

export default function ServicesPage() {
  return (
    <div>
      <PageHeader 
      title="Courts We Practice In" 
        description="Discover the range of courts and tribunals where our legal team actively represents clients across Karnataka."
      />

      <div className="container mx-auto px-4 py-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Courts We Practice In</h2>
        </div>

        {/* Grid of Courts */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courts.map(({ name, icon: Icon }, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:border-primary dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* WhatsApp Floating Button */}
            <WhatsappButton />
    </div>
  )
}
