'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Hero from '@/sections/Hero';
import HowIHelp from '@/sections/HowIHelp';
import WhatIBuild from '@/sections/WhatIBuild';
import WhyChooseMe from '@/sections/WhyChooseMe';
import Projects from '@/sections/Projects';
import Process from '@/sections/Process';
import About from '@/sections/About';
import TechStack from '@/sections/TechStack';
import Testimonials from '@/sections/Testimonials';
import CallToAction from '@/sections/CallToAction';
import Contact from '@/sections/Contact';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <HowIHelp />
      <WhatIBuild />
      <WhyChooseMe />
      <Projects />
      <Process />
      <About />
      <TechStack />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
}
