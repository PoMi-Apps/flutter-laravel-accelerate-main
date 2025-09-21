import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import TechStack from '@/components/TechStack';
import TrustBuilding from '@/components/TrustBuilding';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CallToAction from '@/components/CallToAction';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <PageTransition>
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
    </PageTransition>
  );
};

export default Index;