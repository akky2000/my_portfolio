import React from 'react';
// src/components/AnimatedSection.tsx
type Props = {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
};

const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 1000,
}: Props) => (
  <div
    data-aos={animation}
    data-aos-delay={delay}
    data-aos-duration={duration}
  >
    {children}
  </div>
);

export default AnimatedSection;
