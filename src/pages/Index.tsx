// import Header from '@/components/Header';
// import Hero from '@/components/Hero';
// import About from '@/components/About';
// import Education from '@/components/Education';
// import Resume from '@/components/Resume';
// import Projects from '@/components/Projects';
// import Services from '@/components/Services';
// import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';

// const Index = () => {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Education />
//         <Resume />
//         <Projects />
//         <Services />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;








import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-16">
        <AnimatedSection animation="fade-up" delay={0}>
          <Hero />
        </AnimatedSection>

        <AnimatedSection animation="fade-right" delay={100}>
          <About />
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={200}>
          <Education />
        </AnimatedSection>

        <AnimatedSection animation="zoom-in-up" delay={300}>
          <Resume />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <Projects />
        </AnimatedSection>

        <AnimatedSection animation="fade-left" delay={500}>
          <Services />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

