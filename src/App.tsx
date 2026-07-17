import { HeroSection } from '@/components/ui/hero'
import { SkillsSection } from '@/components/ui/skills'
import { ExperienceSection } from '@/components/ui/experience'
import { ClientWorkSection } from '@/components/ui/client-work'
import { CertificationsSection } from '@/components/ui/certifications'
import { ContactSection } from '@/components/ui/contact'
import BubbleMenu from '@/components/ui/BubbleMenu'

// ── Logo: single green pill "ROHIT" in black ────────────────────────────────
const Logo = () => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: '#CCFF00',
      color: '#000000',
      fontWeight: 900,
      fontSize: '14px',
      padding: '5px 16px',
      borderRadius: '999px',
      letterSpacing: '-0.02em',
      whiteSpace: 'nowrap',
    }}
  >
    ROHIT
  </span>
)

const menuItems = [
  { label: 'home',           href: '#home',           ariaLabel: 'Home',           rotation: -8, hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'skills',         href: '#skills',         ariaLabel: 'Skills',         rotation:  6, hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'experience',     href: '#experience',     ariaLabel: 'Experience',     rotation: -6, hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'client work',    href: '#client-work',    ariaLabel: 'Client Work',    rotation:  6, hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'certifications', href: '#certifications', ariaLabel: 'Certifications', rotation: -8, hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
  { label: 'contact',        href: '#contact',        ariaLabel: 'Contact',        rotation:  6, hoverStyles: { bgColor: '#CCFF00', textColor: '#000000' } },
]

export default function App() {
  return (
    <div className="w-full relative">
      {/* BubbleMenu — fixed, floats above everything */}
      <BubbleMenu
        logo={<Logo />}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#0038FF"
        useFixedPosition={true}
        animationEase="back.out(1.7)"
        animationDuration={0.48}
        staggerDelay={0.1}
      />

      {/* Hero — includes Lanyard on the right side */}
      <HeroSection />

      {/* Remaining sections */}
      <SkillsSection />
      <ExperienceSection />
      <ClientWorkSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}
