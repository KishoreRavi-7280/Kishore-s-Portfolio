function Skills() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [animatedBars, setAnimatedBars] = React.useState({});

  const skills = [
    { name: 'Html5/CSS3', level: 95, color: 'from-blue-400 to-cyan-400' },
    { name: 'Bootstrap/Tailwindcss', level: 88, color: 'from-yellow-400 to-orange-400' },
    { name: 'Java /Spring Boot', level: 83, color: 'from-pink-400 to-purple-400' },
    { name: 'My SQL', level: 80, color: 'from-green-400 to-emerald-400' },
    { name: 'DSA / Problem-Solving', level: 76, color: 'from-blue-600 to-blue-400' }
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedBars(prev => ({ ...prev, [skill.name]: true }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-blue-900/10 to-purple-900/10"></div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-5xl font-bold gradient-text mb-3">Skills & Expertise</h2>
          <p className="text-sm sm:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            Mastering modern technologies to build high-quality digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">

          {/* LEFT SIDE – Skill Bars */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Technical Proficiency</h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm sm:text-lg font-semibold text-white">{skill.name}</span>
                    <span className="text-cyan-400 font-bold text-sm sm:text-base">{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                        animatedBars[skill.name] ? "" : "w-0"
                      }`}
                      style={{
                        width: animatedBars[skill.name] ? `${skill.level}%` : "0%"
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE – Skill Cards */}
          <div className={`${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              {[
                { icon: "monitor", title: "Frontend Development", desc: "HTML, CSS, JS, Tailwind" },
                { icon: "server", title: "Backend Development", desc: "Java, Spring Boot" },
                { icon: "smartphone", title: "Prototyping", desc: "Figma" },
                { icon: "database", title: "Database Design", desc: "MySQL" },
                { icon: "cloud", title: "Cloud Services", desc: "AWS Basics" },
                { icon: "git-branch", title: "Version Control", desc: "Git, GitHub" }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    morph-card 
                    p-4 sm:p-6 
                    text-center rounded-xl 
                    hover:scale-105 
                    transition-all duration-300 
                    ${isVisible ? "animate-scale-in" : "opacity-0"}
                  `}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`icon-${item.icon} text-2xl sm:text-3xl text-cyan-400 mb-2 sm:mb-4`}></div>
                  <h4 className="text-sm sm:text-lg font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-[10px] sm:text-sm text-gray-400 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
