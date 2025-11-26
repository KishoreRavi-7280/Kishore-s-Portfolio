export default function Projects() {
  const [selectedFilter, setSelectedFilter] = React.useState("All");
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [slidesPerView, setSlidesPerView] = React.useState(1);

  const projects = [
    {
      id: 1,
      title: "Printer Shop Website",
      description: "Designed a simple printer shop website.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Web App",
      link: "https://kishoreravi-7280.github.io/RPP/",
    },
    {
      id: 2,
      title: "Travel Blog",
      description: "Created a clean travel blog layout.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Web App",
      link: "https://kishoreravi-7280.github.io/Landingpage/",
    },
    {
      id: 3,
      title: "Student Management System",
      description: "Console-based Java CRUD project.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Java"],
      category: "Data Visualization",
      link: "https://github.com/KishoreRavi-7280/Student-Management-System.git",
    },
  ];

  const filters = ["All", "Web App", "Mobile App", "Data Visualization", "Social Platform"];

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((p) => p.category === selectedFilter);

  // RESPONSIVE SLIDER
  React.useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesPerView(3);
      else if (width >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const maxIndex = Math.ceil(filteredProjects.length / slidesPerView) - 1;

  const nextSlide = () => setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  setCurrentIndex(0);
                }}
                className={`px-5 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                  selectedFilter === filter
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                    : "glass-card text-gray-300 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              width:
                slidesPerView === 1
                  ? "100%"
                  : `${(filteredProjects.length / slidesPerView) * 100}%`,
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="px-3 sm:px-4 flex-shrink-0 w-full"
                style={{
                  width: slidesPerView === 1 ? "100%" : `${100 / slidesPerView}%`,
                }}
              >
                <div className="morph-card shadow-xl rounded-2xl overflow-hidden group">

                  {/* ⭐ FINAL FIXED MOBILE IMAGE + 100% WIDTH FIX */}
                  <div className="w-full h-auto sm:aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full min-w-full md:w-full h-[260px] sm:h-full object-cover transition-all duration-500 group-hover:scale-110 rounded-md"
                    />
                  </div>

                  <div className="p-3 sm:p-6">
                    <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-all">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-base mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 border border-cyan-500/30 text-cyan-300 bg-cyan-500/10 rounded-full text-[10px] sm:text-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} target="_blank">
                      <button className="w-full py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all text-sm sm:text-base">
                        View Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full"
          >
            &#10094;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}
