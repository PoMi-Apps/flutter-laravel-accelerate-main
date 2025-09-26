import React from 'react';
import { Smartphone, Globe, Server, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: Smartphone,
      title: t('services.service1_title'),
      description: t('services.service1_desc'),
      features: [t('services.service1_feature1'), t('services.service1_feature2'), t('services.service1_feature3')]
    },
    {
      icon: Globe,
      title: t('services.service2_title'),
      description: t('services.service2_desc'),
      features: [t('services.service2_feature1'), t('services.service2_feature2'), t('services.service2_feature3')]
    },
    {
      icon: Server,
      title: t('services.service3_title'),
      description: t('services.service3_desc'),
      features: [t('services.service3_feature1'), t('services.service3_feature2'), t('services.service3_feature3')]
    },
    {
      icon: Zap,
      title: t('services.service4_title'),
      description: t('services.service4_desc'),
      features: [t('services.service4_feature1'), t('services.service4_feature2'), t('services.service4_feature3')]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
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