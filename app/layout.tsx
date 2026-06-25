// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import PopupGate from "@/components/PopupGate"

const inter = Inter({ subsets: ["latin"] })

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Vista Legal",
  description:
    "Vista Legal is a Bengaluru-based law firm offering criminal, civil, corporate & commercial law, litigation, and legal advisory services.",
  url: "https://www.vistalegalfirm.com",
  logo: "https://www.vistalegalfirm.com/logo.png", // TODO: confirm actual logo path in /public
  image: "https://www.vistalegalfirm.com/images/og-image.jpg",
  telephone: "+918197741693",
  email: "vistalegalassociates@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Office No.4, 2nd Floor, Eshwari Complex, Dr Rajkumar Rd, Prakash Nagar, Rajajinagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560021",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9899366,
    longitude: 77.5586509,
  },
  areaServed: [
    { "@type": "City", name: "Bengaluru" },
    { "@type": "State", name: "Karnataka" },
  ],
  founder: [
    { "@type": "Person", name: "Manoj Kumar J Y" },
    { "@type": "Person", name: "Subhash R." },
  ],
  foundingDate: "2024",
  knowsAbout: [
    "Criminal Law",
    "Civil Law",
    "Corporate and Commercial Law",
    "Litigation and Dispute Resolution",
    "Legal Documentation and Advisory",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+918197741693",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: "+919686402901",
      contactType: "customer service",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/vistalegalofficial",
    "LINKEDIN_URL", // TODO: replace with the real LinkedIn URL
    "https://www.google.com/maps/place/Vista+Legal/@12.9903991,77.5550122,18z/data=!4m6!3m5!1s0x3bae3d0001721367:0x4094641fd1b46226!8m2!3d12.9899366!4d77.5586509!16s%2Fg%2F11vq507gl2",
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vistalegalfirm.com"),
  title: {
    default: "Vista Legal | Advocates in Rajajinagar, Bengaluru",
    template: "%s | Vista Legal",
  },
  description:
    "Vista Legal is a Bengaluru law firm offering criminal, civil, corporate, and litigation services. Experienced advocates serving clients across Karnataka.",
  icons: {
    icon: "/images/favicon.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Vista Legal",
    url: "https://www.vistalegalfirm.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vista Legal — Advocates and Legal Consultants",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <PopupGate>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </PopupGate>
      </body>
    </html>
  )
}
