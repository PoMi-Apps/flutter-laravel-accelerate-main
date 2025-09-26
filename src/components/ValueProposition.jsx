import React from 'react';
import { Smartphone, Server, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ValueProposition = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Smartphone,
      title: t('valueProposition.feature1_title'),
      description: t('valueProposition.feature1_desc'),
      gradient: 'from-primary to-accent'
    },
    {
      icon: Server,
      title: t('valueProposition.feature2_title'),
      description: t('valueProposition.feature2_desc'),
      gradient: 'from-accent to-primary'
    },
    {
      icon: Rocket,
      title: t('valueProposition.feature3_title'),
      description: t('valueProposition.feature3_desc'),
      gradient: 'from-primary via-accent to-primary'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('valueProposition.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('valueProposition.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-xl p-8 hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: `linear-gradient(135deg, ${feature.gradient})`, padding: '1px' }}>
                <div className="w-full h-full bg-background rounded-xl" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-6`}>
                  <feature.icon className="w-full h-full text-background" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl"
                     style={{ background: `linear-gradient(90deg, ${feature.gradient})` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;