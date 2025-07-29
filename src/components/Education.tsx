import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: " Tula's institute ",
      period: '2022 - 2026 (Expected)',
      gpa: '7.5/10.0',
      achievements: ['Hackathon', 'Programming Contest Winner'],
      courses: ['Web Development','Data Structures', 'Machine Learning',  'Database Systems']
    },
    {
      degree: 'High School ',
      institution: 'M.L.T college',
      period: '2018 - 2020',
      gpa: '7.7/10.0',
      achievements: ['Valedictorian', 'Computer Science Award'],
      courses: ['Advanced Programming', 'Calculus', 'Physics']
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Web Development',
      issuer: 'Rcpl India',
      date: '2024'
      
    },
    {
      name: 'React Developer Certification',
      issuer: 'PupilFirst',
      date: '2023' 
      
    },
    {
      name: 'Data Analystics',
      issuer: 'Deloitte',
      date: '2025'
     
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <GraduationCap className="inline-block mr-3 text-primary" />
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications that shape my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center">
              <GraduationCap className="mr-2 text-primary" />
              Education
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  
                  <Card className="shadow-card hover:shadow-elegant transition-smooth">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {edu.period}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-semibold text-primary">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Key Achievements</h4>
                        <div className="flex flex-wrap gap-1">
                          {edu.achievements.map((achievement, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Relevant Courses</h4>
                        <div className="flex flex-wrap gap-1">
                          {edu.courses.map((course, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center">
              <Award className="mr-2 text-primary" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Issued: {cert.date}  
                        </p>
                      </div>
                      <Award className="h-8 w-8 text-primary flex-shrink-0 ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Progress */}
            <Card className="mt-8 shadow-card">
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: 'Computer Science Theory', progress: 90 },
                  { skill: 'Software Engineering', progress: 85 },
                  { skill: 'AI & Machine Learning', progress: 75 },
                  { skill: 'Cloud Technologies', progress: 80 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-muted-foreground">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;