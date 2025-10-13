import React from "react";
import Navigation from "@/components/Navigation";
import CallToAction from "@/components/CallToAction";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Clock,
  Users,
  Target,
  Lightbulb,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  Award,
  Calendar,
  Zap,
  Shield,
  Repeat
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ProcessPage = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      id: "discovery",
      step: "01",
      icon: Lightbulb,
      title: t("processPage.steps.discovery.title"),
      subtitle: t("processPage.steps.discovery.subtitle"),
      duration: t("processPage.steps.discovery.duration"),
      description: t("processPage.steps.discovery.description"),
      deliverables: t("processPage.steps.discovery.deliverables", { returnObjects: true }),
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: "design",
      step: "02",
      icon: Palette,
      title: t("processPage.steps.design.title"),
      subtitle: t("processPage.steps.design.subtitle"),
      duration: t("processPage.steps.design.duration"),
      description: t("processPage.steps.design.description"),
      deliverables: t("processPage.steps.design.deliverables", { returnObjects: true }),
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: "development",
      step: "03",
      icon: Code,
      title: t("processPage.steps.development.title"),
      subtitle: t("processPage.steps.development.subtitle"),
      duration: t("processPage.steps.development.duration"),
      description: t("processPage.steps.development.description"),
      deliverables: t("processPage.steps.development.deliverables", { returnObjects: true }),
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "launch",
      step: "04",
      icon: Rocket,
      title: t("processPage.steps.launch.title"),
      subtitle: t("processPage.steps.launch.subtitle"),
      duration: t("processPage.steps.launch.duration"),
      description: t("processPage.steps.launch.description"),
      deliverables: t("processPage.steps.launch.deliverables", { returnObjects: true }),
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const processFeatures = [
    {
      icon: Target,
      title: t("processPage.features.accuracy.title"),
      description: t("processPage.features.accuracy.description"),
      metric: t("processPage.features.accuracy.metric")
    },
    {
      icon: Clock,
      title: t("processPage.features.speed.title"),
      description: t("processPage.features.speed.description"),
      metric: t("processPage.features.speed.metric")
    },
    {
      icon: Users,
      title: t("processPage.features.collaboration.title"),
      description: t("processPage.features.collaboration.description"),
      metric: t("processPage.features.collaboration.metric")
    },
    {
      icon: TrendingUp,
      title: t("processPage.features.quality.title"),
      description: t("processPage.features.quality.description"),
      metric: t("processPage.features.quality.metric")
    }
  ];

  const agileProcess = [
    {
      phase: t("processPage.agile.sprint.title"),
      duration: t("processPage.agile.sprint.duration"),
      activities: t("processPage.agile.sprint.activities", { returnObjects: true })
    },
    {
      phase: t("processPage.agile.review.title"),
      duration: t("processPage.agile.review.duration"),
      activities: t("processPage.agile.review.activities", { returnObjects: true })
    },
    {
      phase: t("processPage.agile.retrospective.title"),
      duration: t("processPage.agile.retrospective.duration"),
      activities: t("processPage.agile.retrospective.activities", { returnObjects: true })
    }
  ];

  const successMetrics = [
    { label: t("processPage.metrics.delivery.label"), value: t("processPage.metrics.delivery.value") },
    { label: t("processPage.metrics.satisfaction.label"), value: t("processPage.metrics.satisfaction.value") },
    { label: t("processPage.metrics.budget.label"), value: t("processPage.metrics.budget.value") },
    { label: t("processPage.metrics.timeline.label"), value: t("processPage.metrics.timeline.value") }
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
                {t("processPage.hero.badge")}
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t("processPage.hero.title")}{" "}
                <span className="gradient-text">
                  {t("processPage.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("processPage.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-6 text-lg">
                  {t("processPage.hero.ctaPrimary")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  {t("processPage.hero.ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("processPage.steps.title")}{" "}
                <span className="gradient-text">
                  {t("processPage.steps.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("processPage.steps.subtitle")}
              </p>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <Card key={step.id} className="relative overflow-hidden hover-glow">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-5`} />
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="text-6xl font-bold text-primary/20 leading-none">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} p-4`}>
                            <step.icon className="w-full h-full text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{step.title}</CardTitle>
                            <p className="text-muted-foreground font-medium">{step.subtitle}</p>
                          </div>
                          <Badge variant="secondary" className="ml-auto">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <CardDescription className="text-lg mb-4">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          {t("processPage.deliverablesLabel")}
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-primary" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="glass-card rounded-lg p-4">
                        <h4 className="font-semibold mb-3">{t("processPage.stepDetails.activities")}</h4>
                        <div className="text-sm text-muted-foreground">
                          {t(`processPage.stepDetails.${step.id}_activities`)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Features */}
        <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("processPage.features.title")}{" "}
                <span className="gradient-text">
                  {t("processPage.features.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("processPage.features.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover-glow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 mb-4">
                      <feature.icon className="w-full h-full text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-2">{feature.metric}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Agile Process */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("processPage.agile.title")}{" "}
                <span className="gradient-text">
                  {t("processPage.agile.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("processPage.agile.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {agileProcess.map((phase, index) => (
                <Card key={index} className="relative overflow-hidden hover-glow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{phase.phase}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto">
                      {phase.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("processPage.metrics.title")}{" "}
                <span className="gradient-text">
                  {t("processPage.metrics.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("processPage.metrics.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <Card key={index} className="text-center hover-glow">
                  <CardHeader>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <CardTitle className="text-lg">{metric.label}</CardTitle>
                  </CardHeader>
                </Card>
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

export default ProcessPage;
