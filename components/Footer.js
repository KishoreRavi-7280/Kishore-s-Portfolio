function Footer() {
  try {
    const socialLinks = [
      { name: "github", url: "https://github.com/KishoreRavi-7280?tab=repositories" },
      { name: "linkedin", url: "https://www.linkedin.com/in/kishore-ravi-/" }
    ];

    return (
      <footer className="py-14 sm:py-16 bg-gradient-to-t from-gray-950/60 to-transparent relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">

          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-12">

            {/* Brand Section */}
            <div className="text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center pulse-glow mb-3 sm:mb-0">
                  <div className="icon-code text-white text-lg"></div>
                </div>
                <span className="text-xl font-bold gradient-text">Kishore Ravi</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-xs mx-auto sm:mx-0">
                Creative developer crafting digital experiences that inspire and engage users.
              </p>

              <div className="flex justify-center sm:justify-start space-x-4">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    <div className={`icon-${social.name} text-cyan-400 text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {["Home", "About", "Skills", "Projects"].map(link => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Portfolio</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Web Projects", link: "#projects" },
                  { name: "Blogs", link: "#about" },
                  { name: "Certifications", link: "#skills" }
                ].map(item => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-center sm:justify-start items-center space-x-3">
                  <div className="icon-mail text-cyan-400 text-lg"></div>
                  <span className="text-gray-300 break-all">kishoresde006@gmail.com</span>
                </div>

                <div className="flex justify-center sm:justify-start items-center space-x-3">
                  <div className="icon-phone text-cyan-400 text-lg"></div>
                  <span className="text-gray-300">+91 7397753765</span>
                </div>

                <div className="flex justify-center sm:justify-start items-center space-x-3">
                  <div className="icon-map-pin text-cyan-400 text-lg"></div>
                  <span className="text-gray-300">Trichy, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center">

              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0">
                © 2025 Kishore Ravi. All rights reserved.
              </p>

              <div className="flex space-x-6 text-xs sm:text-sm">
                <a
                  href="../public/privacy.html"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="../public/terms.html"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </a>
              </div>

            </div>
          </div>

        </div>
      </footer>
    );
  } catch (error) {
    console.error("Footer component error:", error);
    return null;
  }
}

export default Footer;
