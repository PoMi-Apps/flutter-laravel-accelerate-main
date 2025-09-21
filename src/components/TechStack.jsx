import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { CheckCircle, Layers, Database, Cloud } from 'lucide-react';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const technologies = {
    frontend: {
      icon: Layers,
      title: 'Frontend & Mobile',
      items: [
        'Flutter for cross-platform mobile apps',
        'Modern web frameworks for responsive interfaces',
        'Progressive Web App (PWA) development'
      ],
      code: `// Flutter Example
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Your App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomeScreen(),
    );
  }
}`
    },
    backend: {
      icon: Database,
      title: 'Backend & Infrastructure',
      items: [
        'Laravel PHP framework for robust APIs',
        'RESTful API development and integration',
        'Database design and optimization',
        'Cloud deployment and scaling'
      ],
      code: `// Laravel Example
Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('products', ProductController::class);
});`
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Battle-tested tech stack for maximum performance and developer productivity
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="frontend" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Layers className="mr-2 w-4 h-4" />
              Frontend & Mobile
            </TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Database className="mr-2 w-4 h-4" />
              Backend & Infrastructure
            </TabsTrigger>
          </TabsList>

          {Object.entries(technologies).map(([key, tech]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Features List */}
                <Card className="glass-card border-border/20 p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <tech.icon className="w-6 h-6 text-primary" />
                    {tech.title}
                  </h3>
                  <ul className="space-y-4">
                    {tech.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Code Preview */}
                <Card className="code-block p-6 overflow-hidden">
                  <pre className="text-sm overflow-x-auto">
                    <code className="text-primary/90">{tech.code}</code>
                  </pre>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Why This Stack */}
        <div className="mt-16 text-center glass-card rounded-xl p-8 max-w-3xl mx-auto">
          <Cloud className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Why This Stack?</h3>
          <p className="text-muted-foreground text-lg">
            Flutter + Laravel combination reduces development time by{' '}
            <span className="text-primary font-semibold">50%</span> while maintaining 
            enterprise-level security and performance
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;