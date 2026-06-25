"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const accepted = localStorage.getItem("disclaimerAccepted")

    // If disclaimer not accepted and not already on disclaimer page, redirect
    if (!accepted && pathname !== "/disclaimer") {
      router.replace("/disclaimer")
    }
  }, [router, pathname])

  return <>{children}</>
}
