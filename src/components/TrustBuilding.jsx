import React from 'react';
import { Shield, Code, TrendingUp, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TrustBuilding = () => {
  const { t } = useTranslation();
  const trustFactors = [
    {
      icon: Code,
      title: t('trustBuilding.factor1_title'),
      description: t('trustBuilding.factor1_desc'),
      metric: t('trustBuilding.factor1_metric'),
      metricLabel: t('trustBuilding.factor1_label')
    },
    {
      icon: Shield,
      title: t('trustBuilding.factor2_title'),
      description: t('trustBuilding.factor2_desc'),
      metric: t('trustBuilding.factor2_metric'),
      metricLabel: t('trustBuilding.factor2_label')
    },
    {
      icon: TrendingUp,
      title: t('trustBuilding.factor3_title'),
      description: t('trustBuilding.factor3_desc'),
      metric: t('trustBuilding.factor3_metric'),
      metricLabel: t('trustBuilding.factor3_label')
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('trustBuilding.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('trustBuilding.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-xl p-8 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 p-2.5 mb-6 group-hover:bg-primary/20 transition-colors">
                  <factor.icon className="w-full h-full text-primary" />
                </div>

                {/* Metric */}
                <div className="mb-4">
                  <div className="text-3xl font-bold gradient-text">{factor.metric}</div>
                  <div className="text-sm text-muted-foreground">{factor.metricLabel}</div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                <p className="text-muted-foreground">{factor.description}</p>

                {/* Documentation link simulation */}
                <div className="mt-6 flex items-center gap-2 text-primary text-sm group-hover:translate-x-1 transition-transform">
                  <FileText className="w-4 h-4" />
                  <span>{t('trustBuilding.viewDocumentation')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {[t('trustBuilding.badge1'), t('trustBuilding.badge2'), t('trustBuilding.badge3'), t('trustBuilding.badge4'), t('trustBuilding.badge5')].map((badge, index) => (
            <div
              key={index}
              className="px-6 py-3 glass-card rounded-full text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBuilding;