


export const AboutSection = () => {
  return (
  <section id="about" className="py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 gradient-text drop-shadow-lg">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that matter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Profile & Bio */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex flex-col items-center">
                <img
                  src="./src/assets/bala.jpg"
                  alt="Profile"
                  className="w-70 h-70 rounded-full object-cover border-4 border-purple-500 shadow-xl mb-6 animate-fade-in"
                />
                <p className="text-lg text-foreground leading-relaxed text-center">
                  Hi! I’m <span className="font-bold text-purple-400">Balamurugan</span>, a passionate and motivated full-stack developer with hands-on experience in <span className="text-pink-400">React</span>, <span className="text-indigo-400">MongoDB</span>, the <span className="text-purple-400">MERN stack</span>, and mobile app development using <span className="text-teal-400">Flutter</span>.<br />
                  I love building responsive web and mobile applications that solve real-world problems and deliver seamless user experiences.<br />
                  As a fresher, I bring a fresh perspective, a strong learning mindset, and a drive to turn ideas into practical solutions. I’m always excited to explore new technologies and contribute to innovative projects.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {[{ number: "2", label: "Projects Completed" }].map((stat, index) => (
                  <div key={index} className="glass-card p-6 text-center hover:shadow-elevated transition-all duration-300 rounded-xl">
                    {/* Icon removed for troubleshooting */}
                    <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: My Approach */}
            <div className="relative animate-slide-in-right">
              <div className="glass-card p-10 hover:shadow-elevated transition-all duration-300 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-foreground">My Approach</h3>
                <div className="space-y-6">
                  {[
                    { title: "Research & Discovery", desc: "Understanding user needs and business goals" },
                    { title: "Design & Prototype", desc: "Creating intuitive and beautiful interfaces" },
                    { title: "Develop & Test", desc: "Building robust, scalable solutions" },
                    { title: "Deploy & Optimize", desc: "Launching and continuously improving" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        {/* Icon removed for troubleshooting */}
                        <span className="font-bold text-lg text-white">{index + 1}</span>
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