


import balaImage from "@/assets/bala.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-32 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 gradient-text drop-shadow-lg">
              About Me
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that matter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Profile & Bio */}
            <div className="space-y-6 md:space-y-8 animate-fade-in-up">
              <div className="flex flex-col items-center">
                <img
                  src={balaImage}
                  alt="Bala"
                  className="w-32 h-32 md:w-56 md:h-56 rounded-full object-cover border-4 border-purple-500 shadow-xl mb-4 md:mb-6 animate-fade-in"
                />
                <p className="text-base md:text-lg text-foreground leading-relaxed text-center px-2">
                  Hi! I’m <span className="font-bold text-purple-400">Balamurugan</span>, a passionate and motivated full-stack developer with hands-on experience in <span className="text-pink-400">React</span>, <span className="text-indigo-400">MongoDB</span>, the <span className="text-purple-400">MERN stack</span>, and mobile app development using <span className="text-teal-400">Flutter</span>.<br />
                  I love building responsive web and mobile applications that solve real-world problems and deliver seamless user experiences.<br />
                  As a fresher, I bring a fresh perspective, a strong learning mindset, and a drive to turn ideas into practical solutions. I’m always excited to explore new technologies and contribute to innovative projects.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
                {[{ number: "2", label: "Projects Completed" }].map((stat, index) => (
                  <div key={index} className="glass-card p-4 md:p-6 text-center hover:shadow-elevated transition-all duration-300 rounded-xl">
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 md:mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
                    <div className="text-gray-300 text-xs md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: My Approach */}
            <div className="relative animate-slide-in-right">
              <div className="glass-card p-6 md:p-10 hover:shadow-elevated transition-all duration-300 rounded-xl md:rounded-2xl">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-foreground">My Approach</h3>
                <div className="space-y-4 md:space-y-6">
                  {[
                    { title: "Research & Discovery", desc: "Understanding user needs and business goals" },
                    { title: "Design & Prototype", desc: "Creating intuitive and beautiful interfaces" },
                    { title: "Develop & Test", desc: "Building robust, scalable solutions" },
                    { title: "Deploy & Optimize", desc: "Launching and continuously improving" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-3 md:space-x-5">
                      <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="font-bold text-base md:text-lg text-white">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-0.5 md:mb-1 text-sm md:text-base">{step.title}</h4>
                        <p className="text-muted-foreground text-xs md:text-sm">{step.desc}</p>
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