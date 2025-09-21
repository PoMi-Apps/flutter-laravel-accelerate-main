import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20" />
      
      <div className="container mx-auto relative z-10">
        <div className="glass-card rounded-2xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build Something{' '}
            <span className="gradient-text">Amazing?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's turn your idea into a digital reality. Get a free technical consultation 
            and project estimate.
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="hover-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50 px-8 py-6 text-lg">
              <FileText className="mr-2 w-5 h-5" />
              Get Project Estimate
            </Button>
            <Button size="lg" variant="ghost" className="hover:bg-muted/50 px-8 py-6 text-lg">
              View Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-border/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full" />
              <span className="text-sm text-muted-foreground">Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-accent rounded-full" />
              <span className="text-sm text-muted-foreground">Free consultation</span>
            </div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default CallToAction;