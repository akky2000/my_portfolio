import { Code, ShoppingCart, Bot, PenTool, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and Node.js. Responsive, fast, and SEO-optimized.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Modern Tech Stack'],
      
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and admin dashboards.',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'Mobile Optimized'],
      
    },
    {
      icon: Bot,
      title: 'AI Tools Integration',
      description: 'Integrate cutting-edge AI capabilities into your applications including chatbots, content generation, and automation.',
      features: ['ChatGPT Integration', 'Custom AI Models', 'Automation Workflows', 'API Development'],
     
    },
    {
      icon: PenTool,
      title: 'Content Writing',
      description: 'High-quality technical content, blog posts, documentation, and copywriting for your business needs.',
      features: ['Technical Writing', 'Blog Content', 'Documentation', 'SEO Content'],
      
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Boost your website speed and performance with advanced optimization techniques and best practices.',
      features: ['Speed Optimization', 'Core Web Vitals', 'Database Tuning', 'CDN Setup'],
      
    },
    {
      icon: Users,
      title: 'Consulting & Mentoring',
      description: 'Technical consulting, code reviews, and mentoring services to help you and your team grow.',
      features: ['Code Review', '1-on-1 Mentoring', 'Team Training', 'Architecture Planning'],
      
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services <span className="text-primary">Offered</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-smooth group relative overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="relative">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">What's included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    {/* <p className="font-semibold text-primary text-lg">{service.pricing}</p> */}
                    <Button
                      onClick={scrollToContact}
                      className="w-full mt-3 hero-gradient text-white hover:opacity-90 transition-smooth"
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">How I Work</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your requirements and goals'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating detailed project roadmap and timeline'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with regular updates'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Testing, deployment, and ongoing support'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="font-semibold mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 shadow-elegant bg-gradient-to-r from-background to-muted/50">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-semibold">Ready to start your project?</h3>
              <p className="text-muted-foreground max-w-md">
                Let's discuss your ideas and turn them into reality. I offer free consultations to understand your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={scrollToContact}
                  className="hero-gradient text-white hover:opacity-90 transition-smooth"
                  size="lg"
                >
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;