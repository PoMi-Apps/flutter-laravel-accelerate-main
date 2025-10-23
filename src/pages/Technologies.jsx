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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Smartphone,
  Monitor,
  Database,
  Cloud,
  Palette,
  Settings,
  Layers,
  Code2,
  GitBranch,
  Shield,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const TechnologiesPage = () => {
  const { t } = useTranslation();

  const technologyCategories = [
    {
      id: "mobile",
      icon: Smartphone,
      title: t("techCategories.mobile.title"),
      description: t("techCategories.mobile.description"),
      technologies: [
        {
          name: t("techCategories.mobile.technologies.flutter.name"),
          level: t("techCategories.mobile.technologies.flutter.level"),
          description: t(
            "techCategories.mobile.technologies.flutter.description"
          ),
        },
        {
          name: t("techCategories.mobile.technologies.dart.name"),
          level: t("techCategories.mobile.technologies.dart.level"),
          description: t("techCategories.mobile.technologies.dart.description"),
        },
        {
          name: t("techCategories.mobile.technologies.firebase.name"),
          level: t("techCategories.mobile.technologies.firebase.level"),
          description: t(
            "techCategories.mobile.technologies.firebase.description"
          ),
        },
        {
          name: t("techCategories.mobile.technologies.sqlite.name"),
          level: t("techCategories.mobile.technologies.sqlite.level"),
          description: t(
            "techCategories.mobile.technologies.sqlite.description"
          ),
        },
      ],
    },
    {
      id: "frontend",
      icon: Monitor,
      title: t("techCategories.frontend.title"),
      description: t("techCategories.frontend.description"),
      technologies: [
        {
          name: t("techCategories.frontend.technologies.react.name"),
          level: t("techCategories.frontend.technologies.react.level"),
          description: t(
            "techCategories.frontend.technologies.react.description"
          ),
        },
        {
          name: t("techCategories.frontend.technologies.javascript.name"),
          level: t("techCategories.frontend.technologies.javascript.level"),
          description: t(
            "techCategories.frontend.technologies.javascript.description"
          ),
        },
        {
          name: t("techCategories.frontend.technologies.html5.name"),
          level: t("techCategories.frontend.technologies.html5.level"),
          description: t(
            "techCategories.frontend.technologies.html5.description"
          ),
        },
        {
          name: t("techCategories.frontend.technologies.tailwind.name"),
          level: t("techCategories.frontend.technologies.tailwind.level"),
          description: t(
            "techCategories.frontend.technologies.tailwind.description"
          ),
        },
      ],
    },
    {
      id: "backend",
      icon: Database,
      title: t("techCategories.backend.title"),
      description: t("techCategories.backend.description"),
      technologies: [
        {
          name: t("techCategories.backend.technologies.laravel.name"),
          level: t("techCategories.backend.technologies.laravel.level"),
          description: t(
            "techCategories.backend.technologies.laravel.description"
          ),
        },
        {
          name: t("techCategories.backend.technologies.php.name"),
          level: t("techCategories.backend.technologies.php.level"),
          description: t("techCategories.backend.technologies.php.description"),
        },
        {
          name: t("techCategories.backend.technologies.nodejs.name"),
          level: t("techCategories.backend.technologies.nodejs.level"),
          description: t(
            "techCategories.backend.technologies.nodejs.description"
          ),
        },
        {
          name: t("techCategories.backend.technologies.rest.name"),
          level: t("techCategories.backend.technologies.rest.level"),
          description: t(
            "techCategories.backend.technologies.rest.description"
          ),
        },
        {
          name: t("techCategories.backend.technologies.graphql.name"),
          level: t("techCategories.backend.technologies.graphql.level"),
          description: t(
            "techCategories.backend.technologies.graphql.description"
          ),
        },
      ],
    },
    {
      id: "database",
      icon: Database,
      title: t("techCategories.database.title"),
      description: t("techCategories.database.description"),
      technologies: [
        {
          name: t("techCategories.database.technologies.mysql.name"),
          level: t("techCategories.database.technologies.mysql.level"),
          description: t(
            "techCategories.database.technologies.mysql.description"
          ),
        },
        {
          name: t("techCategories.database.technologies.postgresql.name"),
          level: t("techCategories.database.technologies.postgresql.level"),
          description: t(
            "techCategories.database.technologies.postgresql.description"
          ),
        },
        {
          name: t("techCategories.database.technologies.mongodb.name"),
          level: t("techCategories.database.technologies.mongodb.level"),
          description: t(
            "techCategories.database.technologies.mongodb.description"
          ),
        },
        {
          name: t("techCategories.database.technologies.firestore.name"),
          level: t("techCategories.database.technologies.firestore.level"),
          description: t(
            "techCategories.database.technologies.firestore.description"
          ),
        },
      ],
    },
    {
      id: "devops",
      icon: Settings,
      title: t("techCategories.devops.title"),
      description: t("techCategories.devops.description"),
      technologies: [
        {
          name: t("techCategories.devops.technologies.docker.name"),
          level: t("techCategories.devops.technologies.docker.level"),
          description: t(
            "techCategories.devops.technologies.docker.description"
          ),
        },
        {
          name: t("techCategories.devops.technologies.aws.name"),
          level: t("techCategories.devops.technologies.aws.level"),
          description: t("techCategories.devops.technologies.aws.description"),
        },
        {
          name: t("techCategories.devops.technologies.git.name"),
          level: t("techCategories.devops.technologies.git.level"),
          description: t("techCategories.devops.technologies.git.description"),
        },
        {
          name: t("techCategories.devops.technologies.github_actions.name"),
          level: t("techCategories.devops.technologies.github_actions.level"),
          description: t(
            "techCategories.devops.technologies.github_actions.description"
          ),
        },
        {
          name: t("techCategories.devops.technologies.nginx.name"),
          level: t("techCategories.devops.technologies.nginx.level"),
          description: t(
            "techCategories.devops.technologies.nginx.description"
          ),
        },
        {
          name: t("techCategories.devops.technologies.linux.name"),
          level: t("techCategories.devops.technologies.linux.level"),
          description: t(
            "techCategories.devops.technologies.linux.description"
          ),
        },
      ],
    },
    {
      id: "design",
      icon: Palette,
      title: t("techCategories.design.title"),
      description: t("techCategories.design.description"),
      technologies: [
        {
          name: t("techCategories.design.technologies.figma.name"),
          level: t("techCategories.design.technologies.figma.level"),
          description: t(
            "techCategories.design.technologies.figma.description"
          ),
        },
        {
          name: t("techCategories.design.technologies.adobe_xd.name"),
          level: t("techCategories.design.technologies.adobe_xd.level"),
          description: t(
            "techCategories.design.technologies.adobe_xd.description"
          ),
        },
      ],
    },
  ];

  const whyChooseOurTech = [
    {
      icon: Zap,
      title: t("whyChooseTech.performance.title"),
      description: t("whyChooseTech.performance.description"),
    },
    {
      icon: Shield,
      title: t("whyChooseTech.security.title"),
      description: t("whyChooseTech.security.description"),
    },
    {
      icon: Layers,
      title: t("whyChooseTech.future_proof.title"),
      description: t("whyChooseTech.future_proof.description"),
    },
    {
      icon: GitBranch,
      title: t("whyChooseTech.developer_friendly.title"),
      description: t("whyChooseTech.developer_friendly.description"),
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200";
      case "Advanced":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-6 py-2">
                {t("technologiesPage.hero.badge")}
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t("technologiesPage.hero.title")}{" "}
                <span className="gradient-text">
                  {t("technologiesPage.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("technologiesPage.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-6 text-lg">
                  {t("technologiesPage.hero.ctaPrimary")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  {t("technologiesPage.hero.ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Categories */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("technologiesPage.categories.title")}{" "}
                <span className="gradient-text">
                  {t("technologiesPage.categories.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("technologiesPage.categories.subtitle")}
              </p>
            </div>

            <Tabs defaultValue="mobile" className="max-w-7xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 h-auto p-1">
                {technologyCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground p-3"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    <span className="hidden lg:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {technologyCategories.map((category) => (
                <TabsContent
                  key={category.id}
                  value={category.id}
                  className="space-y-6"
                >
                  <Card className="glass-card border-border/20 p-8">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4">
                          <category.icon className="w-full h-full text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-2">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-lg">
                                {tech.name}
                              </h4>
                              <Badge
                                variant="outline"
                                className={`text-xs ${getLevelColor(
                                  tech.level
                                )}`}
                              >
                                {tech.level}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {tech.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Why Choose Our Tech Stack */}
        <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("technologiesPage.whyChoose.title")}{" "}
                <span className="gradient-text">
                  {t("technologiesPage.whyChoose.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("technologiesPage.whyChoose.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseOurTech.map((item, index) => (
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

        {/* Technology Process */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("technologiesPage.process.title")}{" "}
                <span className="gradient-text">
                  {t("technologiesPage.process.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("technologiesPage.process.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: t("technologiesPage.process.step1_title"),
                  description: t("technologiesPage.process.step1_desc"),
                },
                {
                  step: "02",
                  title: t("technologiesPage.process.step2_title"),
                  description: t("technologiesPage.process.step2_desc"),
                },
                {
                  step: "03",
                  title: t("technologiesPage.process.step3_title"),
                  description: t("technologiesPage.process.step3_desc"),
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden hover-glow text-center"
                >
                  <CardHeader>
                    <div className="text-6xl font-bold text-primary/20 leading-none mb-4">
                      {step.step}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
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

export default TechnologiesPage;
