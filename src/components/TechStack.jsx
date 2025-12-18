import { motion } from "framer-motion";
import {
  GitBranch,
  Database,
  Code2,
  Server,
  Palette,
  Terminal,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Cpu,
  Layout,
} from "lucide-react";

const TechStack = () => {
  // Simple custom icons using available lucide icons
  const Html5Icon = ({ className = "w-4 h-4" }) => (
    <Code2 className={className} />
  );

  const Css3Icon = ({ className = "w-4 h-4" }) => (
    <Palette className={className} />
  );

  const JavascriptIcon = ({ className = "w-4 h-4" }) => (
    <Zap className={className} />
  );

  const ReactIcon = ({ className = "w-4 h-4" }) => (
    <Cpu className={className} />
  );

  const SpringBootIcon = ({ className = "w-4 h-4" }) => (
    <Server className={className} />
  );

  const BootstrapIcon = ({ className = "w-4 h-4" }) => (
    <Layout className={className} />
  );

  const PostmanIcon = ({ className = "w-4 h-4" }) => (
    <Terminal className={className} />
  );

  const VSCodeIcon = ({ className = "w-4 h-4" }) => (
    <Code2 className={className} />
  );

  const FirebaseIcon = ({ className = "w-4 h-4" }) => (
    <Zap className={className} />
  );

  const techCategories = [
    {
      title: "Frontend",
      icon: Smartphone,
      technologies: [
        { name: "HTML5", icon: Html5Icon, color: "text-orange-500" },
        { name: "CSS3", icon: Css3Icon, color: "text-blue-500" },
        { name: "JavaScript", icon: JavascriptIcon, color: "text-yellow-500" },
        { name: "React.js", icon: ReactIcon, color: "text-cyan-500" },
        { name: "Tailwind CSS", icon: Palette, color: "text-teal-400" },
        { name: "Bootstrap", icon: BootstrapIcon, color: "text-purple-500" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      technologies: [
        { name: "Spring Boot", icon: SpringBootIcon, color: "text-green-500" },
        { name: "Hibernate + JPA", icon: Database, color: "text-blue-400" },
        { name: "MySQL", icon: Database, color: "text-blue-600" },
      ],
    },
    {
      title: "Tools & Others",
      icon: GitBranch,
      technologies: [
        { name: "Git / GitHub", icon: GitBranch, color: "text-red-500" },
        { name: "VS Code", icon: VSCodeIcon, color: "text-blue-400" },
        { name: "Postman", icon: PostmanIcon, color: "text-orange-400" },
        { name: "Firebase", icon: FirebaseIcon, color: "text-yellow-500" },
        { name: "JWT", icon: Shield, color: "text-purple-400" },
        { name: "REST API", icon: Server, color: "text-green-400" },
      ],
    },
  ];

  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-gray-800 bg-opacity-50"
                  >
                    {tech.icon && (
                      <tech.icon className={`w-4 h-4 ${tech.color}`} />
                    )}
                    <span className="text-sm font-medium text-gray-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Why Choose My Tech Stack?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Modern & Scalable",
                  desc: "Using latest technologies that scale with your business",
                },
                {
                  title: "Performance Focused",
                  desc: "Optimized for fast loading and smooth user experience",
                },
                {
                  title: "Maintenance Friendly",
                  desc: "Clean code that is easy to maintain and update",
                },
              ].map((item, index) => (
                <div key={item.title} className="text-center">
                  <h4 className="font-semibold text-primary-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
