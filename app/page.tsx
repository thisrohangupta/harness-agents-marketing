import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { OverviewSection } from "@/components/overview-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { PrinciplesSection } from "@/components/principles-section"
import { SecuritySection } from "@/components/security-section"
import { ComparisonSection } from "@/components/comparison-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CtaSection, Footer } from "@/components/cta-section"
import { Divider } from "@/components/divider"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <OverviewSection />
        <Divider />
        <ArchitectureSection />
        <Divider />
        <UseCasesSection />
        <Divider />
        <PrinciplesSection />
        <Divider />
        <SecuritySection />
        <Divider />
        <ComparisonSection />
        <Divider />
        <RoadmapSection />
        <Divider />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
