import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2024 by advocates Manoj Kumar J Y and Subhash R., Vista Legal brings strong roots in criminal and civil litigation to clients across Bengaluru.",
  alternates: { canonical: "/about" },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
