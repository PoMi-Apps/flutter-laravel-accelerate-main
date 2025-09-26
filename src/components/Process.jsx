import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Process = () => {
  const { t } = useTranslation();
  const steps = [
    {
      number: '01',
      icon: Search,
      title: t('process.step1_title'),
      description: t('process.step1_desc'),
      duration: t('process.step1_duration')
    },
    {
      number: '02',
      icon: Palette,
      title: t('process.step2_title'),
      description: t('process.step2_desc'),
      duration: t('process.step2_duration')
    },
    {
      number: '03',
      icon: Code,
      title: t('process.step3_title'),
      description: t('process.step3_desc'),
      duration: t('process.step3_duration')
    },
    {
      number: '04',
      icon: Rocket,
      title: t('process.step4_title'),
      description: t('process.step4_desc'),
      duration: t('process.step4_duration')
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('process.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="glass-card rounded-xl p-6 hover-glow relative z-10 bg-background">
                  {/* Step number */}
                  <div className="text-5xl font-bold gradient-text opacity-20 absolute top-4 right-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-2.5 mb-4">
                    <step.icon className="w-full h-full text-background" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{step.description}</p>

                  {/* Duration badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-primary">{step.duration}</span>
                  </div>
                </div>

                {/* Connection dot for desktop */}
              </div>
            ))}
          </div>
        </div>

        {/* Process benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { label: t('process.stat1_label'), value: t('process.stat1_value') },
            { label: t('process.stat2_label'), value: t('process.stat2_value') },
            { label: t('process.stat3_label'), value: t('process.stat3_value') }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;