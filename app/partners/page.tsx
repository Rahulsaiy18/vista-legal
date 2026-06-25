import type { Metadata } from "next"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"
import PageHeader from "@/components/page-header"
import WhatsappButton from "@/components/WhatsappButton"

export const metadata: Metadata = {
  title: "Partners & Associates",
  description:
    "Meet the advocates of Vista Legal — experienced legal professionals practising across courts and tribunals in Bengaluru, Karnataka.",
  alternates: { canonical: "/partners" },
}

export default function LawyersPage() {
  return (
    <div>
      <PageHeader
        title="Our Partners and Associates"
        description="Meet our team of experienced legal professionals dedicated to serving your needs."
      />
      <div className="container mx-auto px-4 py-16">
        <p className="mx-auto mb-12 max-w-7xl text-center text-xl text-muted-foreground">
          Our team of experienced lawyers is dedicated to providing exceptional legal representation across a wide
          range of practice areas. Get to know the legal professionals who will be by your side.
        </p>

        {/* Partners Section */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Partners</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <LawyerCard
              name="Subhash R."
              title="Founding Partner"
              image="/images/IMG_8664.jpg"
              education={["M. S. Ramaiah College of Law (KSLU), Class of 2020"]}
              barAdmissions={["Enrolled with Karnataka State Bar Council since 2021"]}
              bio="Mr. Subhash R. earned his law degree from M. S. Ramaiah College of Law, affiliated with Karnataka State Law University, graduating in 2020. He was subsequently enrolled as an advocate with the Karnataka State Bar Council in 2021. As a first-generation advocate, Mr. Subhash R. entered the legal profession with a strong interest in criminal law. He is currently focusing his practice in this area, with a growing interest in trial work and procedural aspects of criminal litigation. Eager to learn and build his presence in the legal field, Mr. Subhash is committed to developing his expertise through consistent practice, courtroom exposure, and continuous learning. He aspires to contribute meaningfully to the legal profession and serve clients with diligence and integrity."
              email="advocatesubhashr@gmail.com"
              phone="+91 8197741693"
            />
            <LawyerCard
              name="Manoj Kumar J Y"
              title="Founding Partner"
              image="/images/IMG_8735.jpg"
              education={["M. S. Ramaiah College of Law (KSLU), 2015–2020"]}
              barAdmissions={["Enrolled with Karnataka State Bar Council since 2021"]}
              bio="Mr. Manoj Kumar J. Y completed his law degree from M. S. Ramaiah College of Law, affiliated to Karnataka State Law University, during the period 2015–2020. He was enrolled with the Karnataka State Bar Council in 2021. Coming from a family with a strong legal background, Mr. Manoj Kumar developed an early interest in the field of law. Over the years, he has gained experience in both civil and criminal litigation. He began his practice focusing on criminal matters and later expanded into civil, commercial, and property-related cases. He has also handled matters involving arbitration and corporate disputes. Known for his practical approach and client-focused solutions, Mr. Manoj Kumar continues to build a strong and diverse legal practice, representing both individuals and businesses."
              email="advmanojkumarjy@gmail.com"
              phone="+91 9686402901"
            />
          </div>
        </div>

        {/* Associates Section */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold">Associates</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <LawyerCard
              name="Spandana C. M"
              title="Associate"
              image="/images/IMG_8686.jpg"
              education={["K.L.E. College of Law (KSLU), Class of 2022"]}
              barAdmissions={["Enrolled with Karnataka State Bar Council in 2022"]}
              bio="Spandana C.M. completed her legal education at K.L.E. College of Law, affiliated with Karnataka State Law University, graduating in 2022. She was enrolled with the Karnataka State Bar Council in the same year. She is currently working as an Associate at Vista Legal, actively assisting in civil, criminal, and family law matters. With a growing interest in trial advocacy and procedure, she continues to gain valuable courtroom experience. Recognized for her calm and diplomatic approach, Spandana combines negotiation skills with a problem-solving mindset. Committed to continuous learning, she strives to contribute effectively to every matter she handles."
              minimal
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function LawyerCard({
  name,
  title,
  image,
  education,
  barAdmissions,
  bio,
  email,
  phone,
  minimal = false,
}: {
  name: string
  title: string
  image: string
  education?: string[]
  barAdmissions?: string[]
  bio: string
  email?: string
  phone?: string
  minimal?: boolean
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md max-w-sm">
      <div className="relative h-[300px] w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${name}, ${title} at Vista Legal`}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-1 text-2xl font-bold">{name}</h2>
        <p className="mb-4 text-primary">{title}</p>

        {education && education.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Education</h3>
            <ul className="list-inside list-disc text-muted-foreground">
              {education.map((degree, index) => (
                <li key={index}>{degree}</li>
              ))}
            </ul>
          </div>
        )}

        {barAdmissions && barAdmissions.length > 0 && (
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Bar Admissions</h3>
            <ul className="list-inside list-disc text-muted-foreground">
              {barAdmissions.map((admission, index) => (
                <li key={index}>{admission}</li>
              ))}
            </ul>
          </div>
        )}

        {!minimal && (email || phone) && (
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-semibold">Contact Information</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              {email && (
                <a href={`mailto:${email}`} className="flex items-center hover:text-primary">
                  <Mail className="mr-2 h-4 w-4" /> {email}
                </a>
              )}
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center hover:text-primary">
                  <Phone className="mr-2 h-4 w-4" /> {phone}
                </a>
              )}
            </div>
          </div>
        )}

        <p className="text-muted-foreground">{bio}</p>
      </div>
      <WhatsappButton />
    </div>
  )
}
