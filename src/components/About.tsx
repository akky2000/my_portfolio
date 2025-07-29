import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'React.js', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'Tailwind CSS',
    'MongoDB', 'PostgreSQL', 'Data Manipulation', 'Docker', 'Git', 'AI/ML Integration'
  ];

  const highlights = [
    {
      title: 'Computer Science Student',
      description: 'Currently pursuing Bachelor\'s in Computer Science with focus on AI and Web Technologies'
    },
    {
      title: 'Full-Stack Developer',
      description: 'Experienced in building end-to-end web applications with modern technologies'
    },
    {
      title: 'Freelancer',
      description: 'Successfully delivered 5+ projects for clients worldwide with 100% satisfaction rate'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello! I'm Akash kumar</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Computer Science student and freelance web developer with over 1 years of experience 
                creating digital solutions. My journey began with curiosity about how websites work, and it has evolved 
                into a deep passion for building innovative applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern web technologies and have a particular interest in AI integration. 
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects. 
              
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Key Highlights</h4>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <h5 className="font-semibold text-primary">{highlight.title}</h5>
                      <p className="text-sm text-muted-foreground mt-1">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Skills & Technologies</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <div className="skill-card p-6 rounded-xl border bg-card">
                <h4 className="text-lg font-medium mb-4 text-center">Technical Skills</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="skill-badge px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground cursor-pointer group relative overflow-hidden"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="skill-card p-6 rounded-xl border bg-card space-y-6">
                <h4 className="text-lg font-medium text-center">Proficiency Levels</h4>
                
                {[
                  { name: 'Frontend Development', level: 95, icon: '⚛️' },
                  { name: 'Backend Development', level: 78 , icon: '🚀' },
                  { name: 'AI/ML Integration', level: 80, icon: '🤖' },
                  { name: 'UI/UX Design', level: 85, icon: '🎨' }
                ].map((skill, index) => (
                  <div key={index} className="group hover:scale-102 transition-transform duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg group-hover:animate-pulse-glow transition-all duration-300">{skill.icon}</span>
                        <span className="font-medium text-sm md:text-base">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="progress-bar bg-gradient-to-r from-primary to-primary-glow h-3 rounded-full relative group-hover:shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;