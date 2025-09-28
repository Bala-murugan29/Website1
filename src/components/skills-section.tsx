import { Code, Palette, Database, Globe, Smartphone, Zap } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Vue.js",
      level: 95,
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL, MongoDB",
      level: 90,
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Sketch, Prototyping",
      level: 85,
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "HTML5, CSS3, Sass, Tailwind CSS",
      level: 98,
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, Progressive Web Apps",
      level: 80,
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Web Vitals, SEO, Accessibility",
      level: 88,
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-4 md:p-8 hover:shadow-elevated transition-all duration-500 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="ml-2 md:ml-4">
                  <h3 className="text-base md:text-xl font-bold text-foreground">{skill.title}</h3>
                </div>
              </div>
              
              <p className="text-xs md:text-base text-muted-foreground mb-4 md:mb-6">{skill.description}</p>
              
              <div className="space-y-1 md:space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm font-medium text-foreground">Proficiency</span>
                  <span className="text-xs md:text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-1 md:h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-10 md:mt-20">
          <h3 className="text-lg md:text-2xl font-bold text-center mb-6 md:mb-12 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {[
              "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB",
               "Vue.js", "Express", "FastAPI",
              "Figma", "Tailwind CSS"
            ].map((tech, index) => (
              <div 
                key={tech}
                className="glass-card px-3 py-2 md:px-6 md:py-3 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-xs md:text-base text-foreground font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};