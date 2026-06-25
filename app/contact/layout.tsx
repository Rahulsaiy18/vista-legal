import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Vista Legal in Rajajinagar, Bengaluru. Call +91 81977 41693 or email us to discuss your legal matter with our advocates.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
