import { Download, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';


const Resume = () => {
  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Nexora Tech',
      period: '2024 - Present',
      type: 'Freelance',
      description: 'Developed responsive web applications using React, Node.js, and MongoDB. Integrated AI chatbots and automated workflows.',
      achievements: ['Built 15+ client websites', 'Increased client satisfaction by 40%', 'Implemented AI solutions']
    },
    {
      title: 'Frontend Developer Intern',
      company: 'E-tailed india pvt. ltd.',
      period: 'Summer 2025',
      type: 'Internship',
      description: 'Collaborated with design team to create pixel-perfect UI components. Optimized application performance and accessibility.',
      achievements: ['Improved page load speed by 30%', 'Built component library', 'Mentored junior developers']
    },
   
  ];

  const handleDownloadResume = () => {
    // In a real application, you would have an actual PDF file
    const link = document.createElement('a');
    link.href = '/AKASH_KUMAR_RESUME.pdf'; // This would be your actual resume PDF
    link.download = 'AKASH_KUMAR_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <FileText className="inline-block mr-3 text-primary" />
            Resume & <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive overview of my professional experience, education, and certifications
          </p>
          <Button
            onClick={handleDownloadResume}
            className="hero-gradient text-white hover:opacity-90 transition-smooth"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold flex items-center">
              <Briefcase className="mr-2 text-primary" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="space-y-6">
            

            {/* Skills Summary */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    'React.js & Next.js',
                    'TypeScript',
                    'Node.js & Express',
                    'Python & Django',
                    'AWS & Cloud Computing',
                    'MongoDB & PostgreSQL',
                    'AI/ML Integration',
                    'Git & DevOps'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
           <Card className="shadow-card">
  <CardHeader>
    <CardTitle className="text-lg">Contact</CardTitle>
  </CardHeader>
  <CardContent className="space-y-2 text-sm">
    <p className="flex items-center gap-2">
      <Mail className="h-6 w-4" />
      <a href="mailto:akash.tech2511@gmail.com" className="text-blue-600 hover:underline">
        akash.tech2511@gmail.com
      </a>
    </p>
    <p className="flex items-center gap-2">
      <Phone className="h-6 w-4" />
      <a href="tel:+919523181953" className="text-blue-600 hover:underline">
        +91 9523181953
      </a>
    </p>
    <p className="flex items-center gap-2">
      <Globe className="h-4 w-4" />
      <a
        href="https://your-portfolio-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Portfolio Website
      </a>
    </p>
    <p className="flex items-center gap-2">
      <Linkedin className="h-4 w-4" />
      <a
        href="https://www.linkedin.com/in/akash-kumar-44b020292/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        LinkedIn Profile
      </a>
    </p>
    <p className="flex items-center gap-2">
      <Github className="h-4 w-4" />
      <a
        href="https://github.com/akky2000"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        GitHub Profile
      </a>
    </p>
  </CardContent>
</Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;