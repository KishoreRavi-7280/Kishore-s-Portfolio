
export default function Projects() {
  const [selectedFilter, setSelectedFilter] = React.useState("All");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const projects = [
    {
      id: 1,
      title: "Printer Shop Website",
      description:
        "Designed and developed a simple printer shop website showcasing services, pricing, and contact details using HTML and CSS.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Web App",
      link: "https://kishoreravi-7280.github.io/RPP/",
    },
    {
      id: 2,
      title: "Travel Blog",
      description:
        "Created a simple travel blog website using HTML and CSS to share travel experiences with clean layout and easy navigation.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: ["HTML5", "CSS3", "JavaScript"],
      category: "Web App",
      link: "https://kishoreravi-7280.github.io/Landingpage/",
    },
    {
      id: 3,
      title: "Student Management-System",
      description:
        "Developed a console-based Student Management System in Java with features to add, update, view, and delete student records.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Java"],
      category: "Data Visualization",
      link: "https://github.com/KishoreRavi-7280/Student-Management-System.git",
    },
  ];

  const filters = ["All", "Web App", "Mobile App", "Data Visualization", "Social Platform"];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  // slides per view based on screen width
  const slidesPerView =
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;

  const maxIndex = Math.ceil(filteredProjects.length / slidesPerView) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing innovative solutions that push the boundaries of
            technology and design.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter);
                  setCurrentIndex(0);
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
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

        {/* Responsive Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${filteredProjects.length * (100 / slidesPerView)}%`,
            }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
              >
                <div className="morph-card shadow-lg rounded-xl overflow-hidden group">
                  {/* Image */}
                  <div className="relative w-full h-70 bg-black overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-all">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all">
                        View Project
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            &#10094;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}

