import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import TechStack from '@/components/TechStack';
import TrustBuilding from '@/components/TrustBuilding';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ValueProposition />
      <TechStack />
      <TrustBuilding />
      <Services />
      <Process />
      <CallToAction />
    </div>
  );
};

export default Index;