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
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance",
      technologies: [
        {
          name: "Flutter",
          level: "Expert",
          description: "Dart-based UI framework for iOS and Android",
        },
        {
          name: "Dart",
          level: "Expert",
          description: "Programming language for Flutter development",
        },
        {
          name: "Firebase",
          level: "Advanced",
          description: "Backend-as-a-Service for mobile apps",
        },
        {
          name: "SQLite",
          level: "Advanced",
          description: "Local database for offline functionality",
        },
      ],
    },
    {
      id: "frontend",
      icon: Monitor,
      title: "Frontend Development",
      description: "Modern web applications with responsive design",
      technologies: [
        {
          name: "React",
          level: "Expert",
          description: "Component-based UI library for web applications",
        },
        {
          name: "Vue.js",
          level: "Advanced",
          description: "Progressive JavaScript framework",
        },
        {
          name: "JavaScript",
          level: "Expert",
          description: "Core programming language for web development",
        },
        {
          name: "TypeScript",
          level: "Advanced",
          description: "Typed superset of JavaScript",
        },
        {
          name: "HTML5",
          level: "Expert",
          description: "Modern markup language for web content",
        },
        {
          name: "CSS3",
          level: "Expert",
          description: "Styling language with modern features",
        },
        {
          name: "Tailwind CSS",
          level: "Expert",
          description: "Utility-first CSS framework",
        },
      ],
    },
    {
      id: "backend",
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      technologies: [
        {
          name: "Laravel",
          level: "Expert",
          description: "PHP web framework for rapid development",
        },
        {
          name: "PHP",
          level: "Expert",
          description: "Server-side scripting language",
        },
        {
          name: "Node.js",
          level: "Advanced",
          description: "JavaScript runtime for server-side development",
        },
        {
          name: "Express.js",
          level: "Advanced",
          description: "Web framework for Node.js",
        },
        {
          name: "REST APIs",
          level: "Expert",
          description: "Architectural style for web services",
        },
        {
          name: "GraphQL",
          level: "Intermediate",
          description: "Query language for APIs",
        },
      ],
    },
    {
      id: "database",
      icon: Database,
      title: "Database & Storage",
      description: "Reliable data storage and management solutions",
      technologies: [
        {
          name: "MySQL",
          level: "Expert",
          description: "Popular relational database management system",
        },
        {
          name: "PostgreSQL",
          level: "Advanced",
          description: "Advanced open-source relational database",
        },
        {
          name: "MongoDB",
          level: "Advanced",
          description: "NoSQL document database",
        },
        {
          name: "Redis",
          level: "Intermediate",
          description: "In-memory data structure store",
        },
        {
          name: "Firebase Firestore",
          level: "Advanced",
          description: "NoSQL cloud database",
        },
      ],
    },
    {
      id: "devops",
      icon: Settings,
      title: "DevOps & Deployment",
      description: "Streamlined development and deployment processes",
      technologies: [
        {
          name: "Docker",
          level: "Advanced",
          description: "Containerization platform",
        },
        {
          name: "AWS",
          level: "Advanced",
          description: "Amazon Web Services cloud platform",
        },
        { name: "Git", level: "Expert", description: "Version control system" },
        {
          name: "GitHub Actions",
          level: "Advanced",
          description: "CI/CD platform",
        },
        {
          name: "Nginx",
          level: "Advanced",
          description: "Web server and reverse proxy",
        },
        {
          name: "Linux",
          level: "Advanced",
          description: "Open-source operating system",
        },
      ],
    },
    {
      id: "design",
      icon: Palette,
      title: "Design & Prototyping",
      description: "User-centered design and prototyping tools",
      technologies: [
        {
          name: "Figma",
          level: "Expert",
          description: "Collaborative design and prototyping tool",
        },
        {
          name: "Adobe XD",
          level: "Advanced",
          description: "Design and prototyping software",
        },
        {
          name: "Sketch",
          level: "Intermediate",
          description: "Digital design toolkit",
        },
        {
          name: "InVision",
          level: "Intermediate",
          description: "Digital product design platform",
        },
        {
          name: "Principle",
          level: "Intermediate",
          description: "Animation and interaction design tool",
        },
      ],
    },
  ];

  const whyChooseOurTech = [
    {
      icon: Zap,
      title: "Performance Optimized",
      description:
        "Every technology is chosen for maximum performance and scalability",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Built-in security features and best practices for data protection",
    },
    {
      icon: Layers,
      title: "Future-Proof",
      description:
        "Technologies that evolve and scale with your business needs",
    },
    {
      icon: GitBranch,
      title: "Developer Friendly",
      description:
        "Tools and frameworks that enhance productivity and code quality",
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
                {t("servicesPage.hero.badge")}
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
