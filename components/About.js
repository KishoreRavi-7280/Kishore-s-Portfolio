function About() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Heading */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-3">
            About Me
          </h2>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Passionate about creating digital experiences that inspire and engage users through
            innovative design and seamless functionality.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 items-center gap-14 sm:gap-16">

          {/* Image + Badge */}
          <div className={`${isVisible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative flex justify-center">

              {/* Main Image */}
              <div className="
                w-full 
                h-64 sm:h-96
                max-w-md sm:max-w-none
                rounded-3xl overflow-hidden glass-card
              ">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="
                absolute 
                left-1/2 -translate-x-1/2 
                sm:left-auto sm:translate-x-0 
                -bottom-6 sm:-bottom-6 sm:right-8

                w-20 h-20 sm:w-32 sm:h-32 
                p-2 sm:p-4 
                rounded-2xl 
                floating-animation 
                glass-card
              ">
                <div className="text-center">
                  <div className="text-xl sm:text-3xl font-bold gradient-text-white">5+</div>
                  <div className="text-[10px] sm:text-sm text-gray-200 leading-tight">
                    Months <br /> Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text + Stats */}
          <div className={`${isVisible ? "animate-slide-right" : "opacity-0"}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Bringing Ideas to Life Through Code & Design
            </h3>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
              With over 5 years of experience in web development and design, I
              specialize in creating immersive digital experiences that combine
              aesthetic appeal with functional excellence.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">

              {[
                { icon: "palette", label: "Creative Design", count: "20+" },
                { icon: "code", label: "Projects Built", count: "10+" },
                { icon: "users", label: "Happy Clients", count: "2" },
                { icon: "award", label: "Certifications", count: "2" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    morph-card
                    p-4 text-center rounded-xl
                    ${isVisible ? "animate-scale-in" : "opacity-0"}
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`icon-${stat.icon} text-xl sm:text-2xl text-cyan-400 mb-1`}></div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {stat.count}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
