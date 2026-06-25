"use client"

import { useEffect, useState } from "react"

export default function PopupGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("popupAccepted")
    if (hasAccepted === "true") {
      setAccepted(true)
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!(hydrated && !accepted)) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [hydrated, accepted])

  const handleAccept = () => {
    localStorage.setItem("popupAccepted", "true")
    setAccepted(true)
  }

  return (
    <>
      {children}
      {hydrated && !accepted && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
        >
          <div className="max-w-xl w-full bg-white rounded-lg shadow-xl p-6 text-center mx-4">
            <h2 id="disclaimer-title" className="text-2xl font-bold mb-4">
              Disclaimer
            </h2>
            <div className="mx-auto max-w-prose max-h-[400px] overflow-y-auto space-y-4 text-left">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
                By accessing this website, www.vistalegalfirm.com, you acknowledge and confirm that you are seeking
                information relating to Vista Legal of your own accord and that there has been no form of solicitation,
                advertisement, or inducement by Vista Legal or its members. The content of this website is for
                informational purposes only and should not be interpreted as soliciting or advertisement.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No material/information provided on this website should be construed as legal advice. Vista Legal shall not be liable for the
                consequences of any action taken by relying on the material/information provided on this website. The contents
                of this website are the intellectual property of Vista Legal.
              </p>
            </div>
            <button
              onClick={handleAccept}
              className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  )
}
