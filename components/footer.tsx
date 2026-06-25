import type React from "react"
import Link from "next/link"
import { Scale, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted">
      <div className="container px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="lg:w-2/5">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" aria-hidden="true" />
              <span className="text-xl font-bold">Vista Legal</span>
            </Link>
            <p className="mb-4 max-w-xs text-muted-foreground">
              Dedicated legal professionals committed to protecting your rights and securing your future.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="https://www.linkedin.com/company/vistalegal"
                icon={<Linkedin className="h-5 w-5" aria-hidden="true" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/vistalegal"
                icon={<Instagram className="h-5 w-5" aria-hidden="true" />}
                label="Instagram"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row gap-8 lg:w-3/5 justify-end">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink href="/">Home</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
                <FooterLink href="/what-we-do">What We Do</FooterLink>
                <FooterLink href="/partners">Partners</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-muted-foreground">
                    Office No.4, 2nd Floor, Eshwari Complex, Dr Rajkumar Rd,
                    <br />
                    Prakash Nagar, Rajajinagar, Bengaluru, Karnataka 560021
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" aria-hidden="true" />
                  <a href="tel:+91 8197741693" className="text-muted-foreground hover:text-primary">+91 8197741693</a>,{" "}
                  <a href="tel:+919686402901" className="text-muted-foreground hover:text-primary">+91 9686402901</a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-primary" aria-hidden="true" />
                  <a href="mailto:vistalegalassociates@gmail.com" className="text-muted-foreground hover:text-primary">
                    vistalegalassociates@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Vista Legal. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-muted-foreground hover:text-primary">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-primary">
        {children}
      </Link>
    </li>
  )
}
