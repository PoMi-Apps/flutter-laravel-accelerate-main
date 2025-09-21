import React from 'react';
import { Smartphone, Globe, Server, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native-feeling apps for iOS and Android using Flutter\'s single codebase approach',
      features: ['Cross-platform', 'Native performance', 'Offline support']
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Dynamic, responsive web apps with Laravel backends for maximum performance',
      features: ['Responsive design', 'SEO optimized', 'Fast loading']
    },
    {
      icon: Server,
      title: 'API Development',
      description: 'Secure, scalable APIs that power your applications and integrate with third-party services',
      features: ['RESTful design', 'Authentication', 'Documentation']
    },
    {
      icon: Zap,
      title: 'MVP Development',
      description: 'Rapid prototyping and validation to get your product to market quickly',
      features: ['6-8 weeks', 'User testing', 'Iterative development']
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment, we handle every aspect of your digital product
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon container with gradient background */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <service.icon className="w-full h-full text-primary" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-foreground/70 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;