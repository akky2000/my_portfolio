import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-hero.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Akash Kumar
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Web Developer | AI Enthusiast | Freelancer
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about creating innovative web solutions and integrating cutting-edge AI technologies. 
              I specialize in building responsive, user-friendly applications that deliver exceptional experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                className="hero-gradient text-white hover:opacity-90 transition-smooth group"
                size="lg"
              >
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                size="lg"
                className="transition-smooth hover:shadow-elegant"
              >
                View Projects
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-elegant animate-float">
                <img
                  src={profileImage}
                  alt="Akash Kumar"
                  className="w-full h-full "
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-glow/20 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;