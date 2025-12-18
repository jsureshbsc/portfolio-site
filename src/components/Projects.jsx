import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Modern Business Website",
      description:
        "A clean 3-page website for a local business with contact form and responsive UI.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://jsureshbsc.github.io/restaurant/",
      tech: ["React", "Tailwind", "Formspree"],
      features: ["Responsive Design", "Contact Form", "Modern UI"],
    },
    {
      title: "Full-Stack CRUD App",
      description:
        "User registration, login, JWT authentication, and full CRUD operations.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://jsureshbsc.github.io/marblesandstones/index.html",
      tech: ["Spring Boot", "MySQL", "React"],
      features: ["JWT Auth", "CRUD Operations", "REST API"],
    },
    {
      title: "Music Streaming Interface",
      description:
        "Search and play songs using the Saavn.dev API with modern music player UI.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://jsureshbsc.github.io/salon/",
      tech: ["React", "Node.js", "Saavn API"],
      features: ["Music Search", "Audio Player", "API Integration"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Best Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent projects that showcase my skills and
            expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover-lift">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">
                        {project.title}
                      </div>
                      <div className="text-sm opacity-90">Project Preview</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-900" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-primary-500 bg-opacity-20 text-primary-300 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center space-x-2 text-primary-400 font-semibold text-sm"
                  >
                    <span>View Live Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold text-white hover-lift"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
