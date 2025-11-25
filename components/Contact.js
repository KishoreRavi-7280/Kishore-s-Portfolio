
function Contact() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = new FormData();
    formPayload.append("access_key", "02465c3b-d080-4f1a-a083-f8626172519c");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("subject", formData.subject);
    formPayload.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formPayload,
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send message!");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      data-name="contact"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-cyan-900/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <h2 className="text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FORM */}
          <div
            className={`order-2 lg:order-1 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <form onSubmit={handleSubmit} className="morph-card p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card rounded-lg bg-transparent text-white placeholder-gray-400 border border-cyan-400/30 focus:border-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-card rounded-lg bg-transparent text-white placeholder-gray-400 border border-cyan-400/30 focus:border-cyan-400"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 glass-card rounded-lg bg-transparent text-white border border-cyan-400/30 focus:border-cyan-400 mb-6"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 glass-card rounded-lg bg-transparent text-white border border-cyan-400/30 focus:border-cyan-400 mb-6 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* CONTACT DETAILS */}
          <div
            className={`order-1 lg:order-2 ${
              isVisible ? "animate-slide-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Let's Start a Conversation
            </h3>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: "mail",
                  title: "Email",
                  value: "kishoresde006@gmail.com",
                  link: "mailto:kishoresde006@gmail.com",
                },
                {
                  icon: "phone",
                  title: "Phone",
                  value: "+91 7397753765",
                  link: "tel:+917397753765",
                },
                {
                  icon: "map-pin",
                  title: "Location",
                  value: "Bangalore, Karnataka India",
                  link: "#",
                },
              ].map((c, index) => (
                <a
                  key={c.title}
                  href={c.link}
                  className={`flex items-center space-x-4 morph-card p-4 hover:scale-105 transition-all duration-300 ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`icon-${c.icon} text-2xl text-cyan-400`}></div>
                  <div>
                    <div className="text-gray-400 text-sm">{c.title}</div>
                    <div className="text-white font-semibold">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

