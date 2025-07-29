import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/akky2000',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/akash-kumar-44b020292/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'twitter.com/alexjohnson',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto: akash.tech2511@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text ">
                Akash Kumar
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Full-stack developer passionate about creating innovative web solutions and integrating 
              cutting-edge AI technologies. Always excited to take on new challenges and create amazing 
              digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth shadow-card hover:shadow-elegant"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-smooth text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 akash.tech2511@gmail.com</p>
              <p>📱 +91 9523181953</p>
              <p>📍Dehradun , U.K.</p>
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="hero-gradient text-white hover:opacity-90 transition-smooth"
              size="sm"
            >
              Start a Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Akash Kumar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-xs text-muted-foreground">
              <span className="inline-flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                Available for work
              </span>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="transition-smooth hover:shadow-card"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;