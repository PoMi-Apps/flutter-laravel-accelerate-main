import React from "react";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
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
import { CheckCircle, Clock, Users, Zap, Shield, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      step: "01",
      title: t("servicesPage.process.step1_title"),
      description: t("servicesPage.process.step1_desc"),
      duration: t("servicesPage.process.step1_duration"),
      deliverables: t("servicesPage.process.step1_deliverables", {
        returnObjects: true,
      }),
    },
    {
      step: "02",
      title: t("servicesPage.process.step2_title"),
      description: t("servicesPage.process.step2_desc"),
      duration: t("servicesPage.process.step2_duration"),
      deliverables: t("servicesPage.process.step2_deliverables", {
        returnObjects: true,
      }),
    },
    {
      step: "03",
      title: t("servicesPage.process.step3_title"),
      description: t("servicesPage.process.step3_desc"),
      duration: t("servicesPage.process.step3_duration"),
      deliverables: t("servicesPage.process.step3_deliverables", {
        returnObjects: true,
      }),
    },
    {
      step: "04",
      title: t("servicesPage.process.step4_title"),
      description: t("servicesPage.process.step4_desc"),
      duration: t("servicesPage.process.step4_duration"),
      deliverables: t("servicesPage.process.step4_deliverables", {
        returnObjects: true,
      }),
    },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: t("servicesPage.whyChooseUs.item1_title"),
      description: t("servicesPage.whyChooseUs.item1_desc"),
    },
    {
      icon: Shield,
      title: t("servicesPage.whyChooseUs.item2_title"),
      description: t("servicesPage.whyChooseUs.item2_desc"),
    },
    {
      icon: Users,
      title: t("servicesPage.whyChooseUs.item3_title"),
      description: t("servicesPage.whyChooseUs.item3_desc"),
    },
    {
      icon: Rocket,
      title: t("servicesPage.whyChooseUs.item4_title"),
      description: t("servicesPage.whyChooseUs.item4_desc"),
    },
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
                {t("servicesPage.hero.badge")}
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t("servicesPage.hero.title")}{" "}
                <span className="gradient-text">
                  {t("servicesPage.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("servicesPage.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-6 text-lg">
                  {t("servicesPage.hero.ctaPrimary")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  {t("servicesPage.hero.ctaSecondary")}
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
                {t("servicesPage.whyChooseUs.title")}{" "}
                <span className="gradient-text">
                  {t("servicesPage.whyChooseUs.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("servicesPage.whyChooseUs.subtitle")}
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
                {t("servicesPage.process.title")}{" "}
                <span className="gradient-text">
                  {t("servicesPage.process.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("servicesPage.process.subtitle")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden hover-glow"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-6xl font-bold text-primary/20 leading-none">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">
                            {step.title}
                          </CardTitle>
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
                      <h4 className="font-semibold text-sm text-foreground/80 mb-3">
                        {t("servicesPage.process.deliverablesLabel")}
                      </h4>
                      {step.deliverables.map(
                        (deliverable, deliverableIndex) => (
                          <div
                            key={deliverableIndex}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm">{deliverable}</span>
                          </div>
                        )
                      )}
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
              {t("servicesPage.technologies.title")}{" "}
              <span className="gradient-text">
                {t("servicesPage.technologies.titleHighlight")}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("servicesPage.technologies.subtitle")}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Flutter",
                "Laravel",
                "React",
                "Vue.js",
                "Node.js",
                "PostgreSQL",
                "MySQL",
                "Firebase",
                "AWS",
                "Docker",
                "Git",
                "Figma",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-4 hover-glow"
                >
                  <span className="font-semibold text-foreground/80">
                    {tech}
                  </span>
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
