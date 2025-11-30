import React, { useState } from 'react';
import { 
  Menu, X, CheckCircle, ArrowRight, Shield, 
  Cpu, Users, Coffee, Factory, Heart, 
  Map, Terminal, MessageSquare, Database, Phone 
} from 'lucide-react';

import logo from './assets/logo.png';
import heroBg from './assets/hero-bg.png';
import iconStrategy from './assets/icon-strategy.png';
import iconAutomation from './assets/icon-automation.png';
import iconTraining from './assets/icon-training.png';
import iconSecurity from './assets/icon-security.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-neutral-dark antialiased">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img src={logo} alt="AI Ready PDX Logo" className="h-10 w-auto" onError={(e) => {e.target.onerror = null; e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'}} />
                <div className="hidden items-center gap-2" style={{display: 'none'}}>
                   <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-white font-bold">AI</div>
                   <span className="font-bold text-xl tracking-tight text-primary">AI Ready PDX</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Why Us', 'Who We Help', 'Services', 'Packages', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="text-gray-600 hover:text-primary font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-teal-600 text-white px-5 py-2 rounded-md font-semibold transition-colors shadow-sm"
              >
                Free Dec Session
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Why Us', 'Who We Help', 'Services', 'Packages', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-32 bg-neutral-warm overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 opacity-10">
            <img src={heroBg} alt="Background" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-primary text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Accepting New Clients for 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6 leading-tight">
              Experienced tech leaders for your AI journey.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              AI is moving into mainstream adoption. We help Portland-area businesses and nonprofits use it safely and practically — without needing a technical team.
            </p>
            <p className="text-sm text-gray-500 font-medium mb-8 uppercase tracking-wide">
              A VITAL ENTERPRISES COMPANY · SERVING PORTLAND & THE PNW
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-green-900 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2"
              >
                Book Free Dec Session <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white hover:bg-gray-50 text-primary border border-gray-200 px-8 py-4 rounded-lg font-semibold text-lg shadow-sm transition-all flex items-center justify-center"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why work with AI Ready PDX?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Reassuring competence in a noisy market.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <img src={iconSecurity} alt="Security" className="w-12 h-12 object-contain" />,
                title: "Decades of Tech Leadership",
                desc: "Part of Vital Enterprises. Our family includes VTM (30+ years leading global standards) and Novus Labs (17+ years engineering consumer electronics)."
              },
              {
                icon: <img src={iconStrategy} alt="Business" className="w-12 h-12 object-contain" />,
                title: "We Know Tech & Business",
                desc: "We translate AI into process improvements, not buzzwords. We understand how revenue flows and where work gets stuck."
              },
              {
                icon: <img src={iconAutomation} alt="Automation" className="w-12 h-12 object-contain" />,
                title: "Already Doing It",
                desc: "We're already rolling out AI solutions across the region for businesses and nonprofits. We use these tools daily."
              },
              {
                icon: <img src={iconTraining} alt="Training" className="w-12 h-12 object-contain" />,
                title: "Plain Language",
                desc: "No hype. No confusing jargon. Just clear explanations and practical outcomes that help your team feel confident."
              }
            ].map((card, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-neutral-warm/50 border border-gray-100 hover:border-accent/30 transition-colors">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section id="who-we-help" className="py-24 bg-neutral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Who we help</h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              We work with mostly non-technical organizations that want to use AI but don't want to become technology companies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users />, title: "Home & Field Services", desc: "Landscaping, HVAC, Plumbing. Improve scheduling & quoting." },
              { icon: <Coffee />, title: "Coffee & Food", desc: "Roasters, Cafés. Better customer comms & web presence." },
              { icon: <Shield />, title: "Professional Practices", desc: "Legal, Dental, Accounting. Streamline intake & reminders." },
              { icon: <Factory />, title: "Manufacturers", desc: "Small distributors. Inventory visibility & order tracking." },
              { icon: <Heart />, title: "Nonprofits", desc: "Community orgs. Do more with limited staff & protect data." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-secondary mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">What we do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <img src={iconStrategy} alt="Strategy" className="w-10 h-10 object-contain" />,
                title: "Strategy & Roadmaps",
                desc: "6-12 month practical plans. We identify high-ROI use cases and check in regularly."
              },
              {
                icon: <img src={iconAutomation} alt="Automation" className="w-10 h-10 object-contain" />,
                title: "Automation & Agents",
                desc: "Internal tools built with agentic coding. Smarter scheduling, intake forms, and reporting."
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-primary" />,
                title: "Marketing & Outreach",
                desc: "Website refresh, AEO/SEO visibility, content calendars, and ethical cold outreach setup."
              },
              {
                icon: <img src={iconTraining} alt="Training" className="w-10 h-10 object-contain" />,
                title: "Training & Enablement",
                desc: "Executive briefings, staff AI 101, and developer bootcamps to build confidence."
              },
              {
                icon: <img src={iconSecurity} alt="Security" className="w-10 h-10 object-contain" />,
                title: "Data & Private AI",
                desc: "Secure 'ask your documents' assistants. On-prem or secure cloud options."
              },
              {
                icon: <Phone className="w-10 h-10 text-primary" />,
                title: "Voice Agents",
                desc: "AI receptionists to triage calls and take messages when you're in the field."
              }
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <div className="p-3 bg-green-50 rounded-lg text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="free-offer" className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1 border border-accent/50 rounded-full text-accent text-sm font-semibold mb-6">
            LIMITED TIME OFFER
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Free AI Readiness Session</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            For Portland-area organizations that book before December 31, 2025.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-left max-w-2xl mx-auto mb-10 border border-white/10">
            <h3 className="font-bold text-lg mb-4">In your free session, you'll get:</h3>
            <ul className="space-y-3">
              {[
                "60-90 minute strategy conversation",
                "1-page AI Opportunities Snapshot with 3-5 ideas",
                "On-prem vs. Cloud recommendation",
                "Q1 2026 'Quick Wins' plan"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-colors w-full sm:w-auto"
          >
            Claim Your Session
          </button>
          <p className="mt-6 text-sm text-gray-400">No obligation. You keep the roadmap either way.</p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-neutral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600">Founding-client pricing for early 2026.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Essentials */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-secondary">AI Essentials</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-primary">$500</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 text-sm mb-8 min-h-[40px]">For small teams wanting steady guidance & quick wins.</p>
              <ul className="space-y-4 mb-8">
                {['Quarterly Strategy Session', 'Web Presence Review', '1 Quick Win / Qtr', 'Email Support'].map(li => (
                  <li key={li} className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> {li}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-green-50 transition-colors">Get Started</button>
            </div>

            {/* Growth */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-secondary">AI Growth</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-primary">$1,000</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-600 text-sm mb-8 min-h-[40px]">For orgs ready for automation & internal tools.</p>
              <ul className="space-y-4 mb-8">
                {['Everything in Essentials', 'Implementation Session', '1 Automation Tool / Qtr', 'Quarterly Team Training'].map(li => (
                  <li key={li} className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" /> {li}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-green-900 transition-colors">Get Started</button>
            </div>

            {/* Projects */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-secondary">Project Sprints</h3>
              <div className="mt-4 mb-6">
                <span className="text-2xl font-bold text-primary">Custom</span>
              </div>
              <p className="text-gray-600 text-sm mb-8 min-h-[40px]">Deep dives and infrastructure.</p>
              <ul className="space-y-4 mb-8">
                {[
                  'AI Kickstart Sprint (From $3.5k)',
                  'Agentic Coding Sprint (From $8k)',
                  'On-Prem Appliance (From $10k)'
                ].map(li => (
                  <li key={li} className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-400 shrink-0" /> {li}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollToSection('contact')} className="w-full py-3 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Private AI */}
      <section id="private-ai" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-secondary mb-6">Prefer your AI off the public internet?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Some organizations can't put sensitive data into public AI tools. We understand.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-sm text-left grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-primary mb-2">On-Prem AI Appliances</h4>
              <p className="text-sm text-gray-600">Local inference on your network (e.g. NVIDIA DGX Spark-class) for total privacy.</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Secure Cloud</h4>
              <p className="text-sm text-gray-600">Locked-down Azure/AWS environments with private networking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8">About AI Ready PDX</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              AI Ready PDX is part of the <strong>Vital Enterprises</strong> family of companies.
            </p>
            <p className="mb-6">
              Our oldest company, <strong>VTM Group</strong>, has spent more than 30 years leading global technology consortiums and standards efforts. <strong>Novus Labs</strong>, our engineering firm, has spent 17 years working on complex consumer electronics products for leading brands.
            </p>
            <p>
              We are bringing that depth of experience to Portland's local businesses. We focus on practical projects that ship in weeks, not years, and a pace of adoption that respects your people, culture, and risk profile.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-primary text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Let's talk about your business</h2>
          <p className="text-center text-green-100 mb-10">
            Whether you're curious, cautious, or already experimenting, we'd be happy to talk.
          </p>
          
          <form className="space-y-4 bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10" action="https://formspree.io/f/myzrkrbo" method="POST">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" name="name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-accent" placeholder="Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-accent" placeholder="jane@company.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input type="text" name="company" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-accent" placeholder="Acme Corp" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">How can we help?</label>
              <textarea name="message" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border-0 focus:ring-2 focus:ring-accent h-32" placeholder="We want to automate our scheduling..."></textarea>
            </div>
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="freeSession" name="interested_in_free_session" className="w-5 h-5 text-accent rounded" defaultChecked />
              <label htmlFor="freeSession" className="text-sm">I'm interested in the Free December Session</label>
            </div>
            <button type="submit" className="w-full bg-accent hover:bg-teal-500 text-white font-bold py-4 rounded-lg transition-colors text-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-dark text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-1">AI Ready PDX</h3>
            <p className="text-sm">A Vital Enterprises Company</p>
          </div>
          <div className="text-sm">
            &copy; 2025 AI Ready PDX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;