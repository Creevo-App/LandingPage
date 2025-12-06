import { useState } from 'react'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <WhyUs />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src="/assets/logo.png" alt="Creevo" className="header-logo" />
        <span className="header-text">Creevo</span>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Build any video game with natural language
        </h1>
        <div className="hero-cta-wrapper">
          <div className="hero-badge">
            <span>We're in private alpha</span>
            <span className="arrow">→</span>
          </div>
          <a href="mailto:mikil@creevo.app" className="cta-button">
            Request Access
          </a>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <h2 className="section-title">Why Creevo?</h2>
        <p className="section-intro">
          Built specifically for game developers, Creevo uses custom software to eliminate
          the friction that plagues traditional AI tools.
        </p>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'Built on Game Engines',
      description: 'Our AI works with existing game development tools and frameworks to create games efficiently.',
    },
    {
      title: 'Virtual Workspace',
      description: 'Everything runs in the cloud. No setup required—we handle the technical details for you.',
    },
    {
      title: 'Cloud Hosting',
      description: 'Your games are hosted in the cloud so you can iterate quickly and make changes easily.',
    },
    {
      title: 'Shareable Links',
      description: 'Share your creations directly with others. No downloads, no setup—just a simple link.',
    },
    {
      title: 'Automated Testing',
      description: 'Our system tests your games automatically to ensure everything works as expected.',
    },
    {
      title: 'Seamless Workflow',
      description: 'Everything flows smoothly without manual steps or complicated processes.',
    },
    {
      title: 'Asset Integration',
      description: 'Upload your assets and they\'ll be integrated into your game automatically.',
    },
    {
      title: 'Support When You Need It',
      description: 'If you need extra help or run into frequent issues, our team of experienced game developers is ready to step in to get your prototype wrapped up and ready to show off!',
    },
  ]

  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">What Makes Us Different</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <div className="pricing-content">
          <div className="pricing-card">
            <h3 className="pricing-title">Free During Private Alpha</h3>
            <p className="pricing-description">
              We're currently in private alpha, so everything is free. Once we launch, pricing will vary based on project complexity and requirements.
            </p>
            <div className="pricing-guarantee">
              <p>If we can't complete your prototype then no charge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "I've used AI before and it sucked. Why is this different?",
      answer: 'Creevo is built specifically for game development. We use specialized technology and tools designed for creating games. Our system is optimized for game development workflows and doesn\'t require any AI knowledge to use effectively.',
    },
    {
      question: 'How quickly can I get a prototype?',
      answer: 'Projects are created quickly. Since everything runs in the cloud, you can iterate and make changes without delays.',
    },
    {
      question: 'Do I need to install anything?',
      answer: 'No setup required. Everything runs in the cloud, so you can get started right away.',
    },
    {
      question: 'Can I use my own art assets?',
      answer: 'Yes! You can upload your assets and they\'ll be integrated into your project.',
    },
    {
      question: 'How do I share prototypes with clients?',
      answer: 'Every project gets a shareable link. Others can access it instantly—no downloads or setup required.',
    },
    {
      question: 'What if the AI doesn\'t get it right the first time?',
      answer: 'You can provide feedback and the AI can regenerate or tweak the prototype in minutes. Our agent also tests features multiple times before returning to ensure quality. If you run into frequent issues with the AI, we have a team of human developers experienced in making games, and we\'re happy to loop in a Creevo Developer to get your prototype done quickly and well.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question-button" onClick={() => toggleFAQ(index)}>
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-arrow">{openIndex === index ? '▼' : '▶'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer-wrapper">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Ready to Never Miscommunicate Again?</h2>
        <p className="contact-text">
          Join our private alpha and start prototyping features faster than ever.
        </p>
        <a href="mailto:mikil@creevo.app" className="cta-button cta-button-large">
          Request Access
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © 2024 Creevo. Built for game developers.
        </p>
      </div>
    </footer>
  )
}

export default LandingPage

