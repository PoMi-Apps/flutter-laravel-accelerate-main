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
import {
  CheckCircle,
  Heart,
  Target,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Shield,
  Rocket,
  Star,
  MapPin,
  Calendar,
  Code,
  Smartphone,
  Globe
} from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  const companyStats = [
    { icon: Calendar, value: "2024", label: t("aboutPage.stats.founded") },
    { icon: Users, value: "10+", label: t("aboutPage.stats.team") },
    { icon: Award, value: "50+", label: t("aboutPage.stats.projects") },
    { icon: Globe, value: "5+", label: t("aboutPage.stats.countries") }
  ];

  const values = [
    {
      icon: Heart,
      title: t("aboutPage.values.passion.title"),
      description: t("aboutPage.values.passion.description")
    },
    {
      icon: Target,
      title: t("aboutPage.values.excellence.title"),
      description: t("aboutPage.values.excellence.description")
    },
    {
      icon: Users,
      title: t("aboutPage.values.collaboration.title"),
      description: t("aboutPage.values.collaboration.description")
    },
    {
      icon: Lightbulb,
      title: t("aboutPage.values.innovation.title"),
      description: t("aboutPage.values.innovation.description")
    }
  ];

  const team = [
    {
      name: "Richard",
      role: t("aboutPage.team.founder"),
      bio: t("aboutPage.team.founderBio"),
      image: "/team/richard.jpg"
    },
    {
      name: "Development Team",
      role: t("aboutPage.team.developers"),
      bio: t("aboutPage.team.developersBio"),
      image: "/team/developers.jpg"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: t("aboutPage.achievements.started"),
      description: t("aboutPage.achievements.startedDesc")
    },
    {
      year: "2024",
      title: t("aboutPage.achievements.firstProject"),
      description: t("aboutPage.achievements.firstProjectDesc")
    },
    {
      year: "2025",
      title: t("aboutPage.achievements.expansion"),
      description: t("aboutPage.achievements.expansionDesc")
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
                {t("aboutPage.hero.badge")}
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t("aboutPage.hero.title")}{" "}
                <span className="gradient-text">
                  {t("aboutPage.hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("aboutPage.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-6 text-lg">
                  {t("aboutPage.hero.ctaPrimary")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  {t("aboutPage.hero.ctaSecondary")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("aboutPage.stats.title")}{" "}
                <span className="gradient-text">
                  {t("aboutPage.stats.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("aboutPage.stats.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
                <Card key={index} className="text-center hover-glow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 mb-4">
                      <stat.icon className="w-full h-full text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <CardTitle className="text-lg">{stat.label}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t("aboutPage.story.title")}{" "}
                  <span className="gradient-text">
                    {t("aboutPage.story.titleHighlight")}
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    {t("aboutPage.story.paragraph1")}
                  </p>
                  <p>
                    {t("aboutPage.story.paragraph2")}
                  </p>
                  <p>
                    {t("aboutPage.story.paragraph3")}
                  </p>
                </div>
              </div>
              <div className="glass-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  {t("aboutPage.story.vision.title")}
                </h3>
                <p className="text-muted-foreground text-lg text-center mb-6">
                  {t("aboutPage.story.vision.description")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50%</div>
                    <p className="text-sm text-muted-foreground">
                      {t("aboutPage.story.vision.faster")}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">
                      {t("aboutPage.story.vision.ownership")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("aboutPage.values.title")}{" "}
                <span className="gradient-text">
                  {t("aboutPage.values.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("aboutPage.values.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-glow">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 mb-4">
                      <value.icon className="w-full h-full text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("aboutPage.team.title")}{" "}
                <span className="gradient-text">
                  {t("aboutPage.team.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("aboutPage.team.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="hover-glow">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {member.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t("aboutPage.achievements.title")}{" "}
                <span className="gradient-text">
                  {t("aboutPage.achievements.titleHighlight")}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("aboutPage.achievements.subtitle")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">{achievement.year}</span>
                      </div>
                    </div>
                    <Card className="flex-1 hover-glow">
                      <CardHeader>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{achievement.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </PageTransition>
  );
};

export default AboutPage;
