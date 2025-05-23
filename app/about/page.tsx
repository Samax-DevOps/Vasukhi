import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about HydroPure's mission, values, and commitment to sustainability.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
