import { Github, ExternalLink, Code, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectWeb from '@/assets/project-web.jpg';
import image from '@/assets/image.jpg';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';

import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectAI from '@/assets/project-ai.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'E-tailed re-design and development',
      description: 'A full-featured It consultancy company website  platform with React, Node.js, and Stripe integration.',
      image: projectEcommerce,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/akky2000/e-tailed-Re-design',
      liveUrl: 'https://e-tailed-re-design.vercel.app/',
      featured: true
    },
    {
      title: 'DocuSense – AI-Powered Smart Document Assistant',
      description: 'We build a web-based platform that automatically organizes, classifies, and extracts key information from uploaded documents using AI. The tool can support various document types (PDFs, images, Word files) and help users search and interact with them intelligently.',
      image: projectAI,
      technologies: ['React', 'Cloudinary', 'OpenAI API', 'Next.js', 'AI','Prisma'],
      githubUrl: 'https://github.com/akky2000/Ai-summarization',
      liveUrl: 'https://ai-summarization-docusense--chi.vercel.app/',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.',
      image: image3,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com/akky2000/my_portfolio',
      liveUrl: 'https://my-portfolio-silk-six-60.vercel.app/',
      featured: false
    },
    {
      title: 'Onboard Dashboard',
      description: 'A responsive and smooth multi-step onboarding wizard and user dashboard built with React, TypeScript, Tailwind CSS, and Vite. Designed for modern SaaS or admin interfaces with clean UI, form validation, and local state persistence.',
      image: image1,
      technologies: ['react.js', 'tailwind css', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com/akky2000/onboarding-dashboard',
      liveUrl: 'https://onboarding-dashboard-umber.vercel.app/',
      featured: false
    },
    {
      title: 'CRM-Audit-App Dashboard',
      description: 'A responsive CRM-Audit-App Dashboard with charts.',
      image: image,
      technologies: ['React', 'Chart.js', 'socket.io', 'CSS Grid'],
      githubUrl: 'https://github.com/akky2000/CRM-Audit-App',
      liveUrl: 'https://crm-audit-app.vercel.app/',
      featured: false
    },
    {
      title: 'Blog Site ',
      description: 'A clean and responsive blog website built for readers to explore and engage with my published articles. It features dynamic post rendering, user-friendly navigation, and a content-first reading experience.',
      image: image2,
      technologies: ['react', 'socket.io', 'typescript', 'Mongodb', 'api integration'],
      githubUrl: 'https://github.com/akky2000',
      liveUrl: 'https://blog-site.com',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Layers className="inline-block mr-3 text-primary" />
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Code className="mr-2 text-primary" />
            Featured Projects
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Badge variant="secondary">Featured</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="hero-gradient text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 hero-gradient text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 shadow-elegant">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-semibold">Interested in working together?</h3>
              <p className="text-muted-foreground">
                I'm always excited to take on new challenges and create amazing digital experiences.
              </p>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hero-gradient text-white hover:opacity-90 transition-smooth"
                size="lg"
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;