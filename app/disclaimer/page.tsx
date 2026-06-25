"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function DisclaimerPage() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted")
    if (accepted && pathname !== "/disclaimer") {
      router.push("/")
    }
  }, [router, pathname])

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true")
    router.push("/")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <div className="max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold">Disclaimer</h1>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
          By accessing this website, www.shoolinconsultancy.org, you acknowledge and confirm that you are seeking
          information relating to Shoolin Consultancy of your own accord and that there has been no form of
          solicitation, advertisement, or inducement by Shoolin Consultancy or its members. The content of this
          website is for informational purposes only and should not be interpreted as soliciting or advertisement.
        </p>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          No material/information provided on this website should be construed as legal advice. Shoolin Consultancy
          shall not be liable for the consequences of any action taken by relying on the material/information
          provided on this website. The contents of this website are the intellectual property of Shoolin Consultancy.
        </p>
        <button
          onClick={handleAccept}
          className="mt-6 rounded-md bg-primary px-6 py-2 text-white transition hover:bg-primary/90"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
