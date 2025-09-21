import React from 'react';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Zap, Shield, Rocket } from 'lucide-react';

const ServicesPage = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements.',
      duration: '1-2 weeks',
      deliverables: ['Requirements document', 'Technical specification', 'Project timeline']
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes to visualize your product.',
      duration: '2-3 weeks',
      deliverables: ['UI/UX designs', 'Interactive prototype', 'Design system']
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your application using modern technologies and best practices.',
      duration: '4-8 weeks',
      deliverables: ['Working application', 'Source code', 'Documentation']
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Comprehensive testing followed by deployment and post-launch support.',
      duration: '1-2 weeks',
      deliverables: ['Testing reports', 'Deployed application', 'Support documentation']
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Get your MVP in 6-8 weeks with our streamlined development process'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous testing and code reviews ensure reliable, maintainable applications'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers specializing in Flutter and Laravel technologies'
    },
    {
      icon: Rocket,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business using modern, scalable architectures'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 px-6 py-2">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Turn Your Ideas Into 
              <span className="gradient-text"> Digital Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We specialize in creating high-performance mobile and web applications using Flutter and Laravel, 
              helping startups and businesses bring their vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">DevStudio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover-glow">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 mb-4">
                    <item.icon className="w-full h-full text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden hover-glow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-6xl font-bold text-primary/20 leading-none">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground/80 mb-3">Deliverables:</h4>
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies We <span className="gradient-text">Master</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable, maintainable applications
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Flutter', 'Laravel', 'React', 'Vue.js', 'Node.js', 'PostgreSQL', 'MySQL', 'Firebase', 'AWS', 'Docker', 'Git', 'Figma'].map((tech, index) => (
              <div key={index} className="glass-card rounded-xl p-4 hover-glow">
                <span className="font-semibold text-foreground/80">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
      </div>
    </PageTransition>
  );
};

export default ServicesPage;