import Link from "next/link"
import { FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"
import PageHeader from "@/components/page-header"

export default function NotFound() {
  return (
    <div>
      <PageHeader
        title="404 - Page Not Found"
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
      />

      <div className="container flex min-h-[40vh] flex-col items-center justify-center px-4 py-16">
        <FileQuestion className="mb-6 h-24 w-24 text-muted-foreground" />
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
