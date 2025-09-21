import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Zap } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="fade-in max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/80">40% Faster Development Time</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Build Digital Products{' '}
            <span className="gradient-text">That Scale</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Transform your ideas into powerful mobile and web applications using cutting-edge 
            Flutter and Laravel technologies. From MVP to enterprise-grade solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50 px-8 py-6 text-lg">
              <Code2 className="mr-2 w-5 h-5" />
              View Our Tech Stack
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
            <div className="glass-card rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Faster Development</div>
            </div>
            <div className="glass-card rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Code Ownership</div>
            </div>
            <div className="glass-card rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">6-8</div>
              <div className="text-sm text-muted-foreground">Weeks to MVP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;