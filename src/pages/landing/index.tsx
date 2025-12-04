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
          Never miscommunicate about a feature again
        </h1>
        <p className="hero-subtitle">
          Our product quickly prototypes initial versions of features with disposable code.
        </p>
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
      title: 'Built on Godot',
      description: 'Our AI doesn\'t have to reinvent physics and collision code that already exists. It works directly on top of Godot.',
    },
    {
      title: 'Virtual Workspace',
      description: 'Our AI has its own virtual workspace in the cloud. No setup required—we host everything for you.',
    },
    {
      title: 'Cloud Hosting',
      description: 'We host your game in the cloud so you can quickly iterate on prototypes. Make tweaks or give the AI more context without delays.',
    },
    {
      title: 'Shareable Links',
      description: 'Share your prototype directly with clients. No downloads, no setup—just a link they can click.',
    },
    {
      title: 'Automated Testing',
      description: 'Our agent uses the hosting architecture to test your feature multiple times, ensuring it hits specifications before returning.',
    },
    {
      title: 'No Copy-Paste',
      description: 'Since our agent has its own engine, there\'s no manual copy-paste. Everything flows seamlessly.',
    },
    {
      title: 'Art Asset Integration',
      description: 'Upload your specific art assets and the agent will integrate them directly into your prototype.',
    },
    {
      title: 'Help no matter what',
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
            <div className="pricing-badge">Private Alpha</div>
            <h3 className="pricing-title">Free During Private Alpha</h3>
            <p className="pricing-description">
              We're currently in private alpha, so all prototypes are free. Once we launch, we expect to charge about <strong>$50</strong> for an average feature prototype, sometimes a little more or a little less depending on task complexity.
            </p>
            <div className="pricing-guarantee">
              <p>There's no charge if the AI is unable to complete the task and you don't want to loop in a Creevo Developer.</p>
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
      answer: 'Creevo uses custom software built specifically for game development. Unlike generic AI tools, we\'re built directly on top of Godot, giving our AI access to real physics, collision detection, and game development tools. We built an entire workstation for the AI, complete with custom software harnesses that ensure the agent always has all the relevant documentation for how to use tools. We did lots of under-the-hood optimizations throughout our entire stack to build the best tool for game development prototyping, and we did all of this so you don\'t have to! We built our product so that you need zero AI knowledge to effectively use it. Our AI isn\'t general; it can\'t tell you about the weather in New York, but it is fantastic for making games. Email us if you want more details.',
    },
    {
      question: 'How quickly can I get a prototype?',
      answer: 'Initial prototypes are generated in minutes. Since everything is hosted in the cloud, you can iterate immediately if you need tweaks.',
    },
    {
      question: 'Do I need to install anything?',
      answer: 'No setup required. Everything runs in the cloud: our AI\'s virtual workspace, your game hosting, and the entire development environment.',
    },
    {
      question: 'Can I use my own art assets?',
      answer: 'Yes! Upload your art assets and our agent will integrate them directly into the prototype.',
    },
    {
      question: 'How do I share prototypes with clients?',
      answer: 'Every prototype gets a shareable link. Your clients can access it instantly—no downloads or setup required.',
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

