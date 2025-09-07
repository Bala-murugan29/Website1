export const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-foreground leading-relaxed">
                With over 5 years of experience in web development and design, I specialize in creating 
                modern, responsive applications that deliver exceptional user experiences.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                I'm passionate about staying at the forefront of technology trends, constantly learning 
                new frameworks and methodologies to craft innovative solutions that solve real-world problems.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "5+", label: "Years Experience" },
                  { number: "20+", label: "Happy Clients" },
                  { number: "100%", label: "Satisfaction Rate" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-6 text-center hover:shadow-elevated transition-all duration-300">
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="glass-card p-8 hover:shadow-elevated transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-foreground">My Approach</h3>
                <div className="space-y-4">
                  {[
                    { title: "Research & Discovery", desc: "Understanding user needs and business goals" },
                    { title: "Design & Prototype", desc: "Creating intuitive and beautiful interfaces" },
                    { title: "Develop & Test", desc: "Building robust, scalable solutions" },
                    { title: "Deploy & Optimize", desc: "Launching and continuously improving" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};