import { memo } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Database,
  Code2,
  Server,
  Palette,
  Terminal,
  Smartphone,
  Shield,
  Zap,
  Cpu,
  Layout,
  Brain,
  MessageSquare,
  Cloud,
  Bot,
  Workflow,
  Sparkles,
} from "lucide-react";

/* -------------------- Animation Presets -------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

/* -------------------- Tech Data (Static) -------------------- */
const techCategories = [
  {
    title: "Frontend",
    icon: Smartphone,
    technologies: [
      { name: "HTML5", icon: Code2, color: "text-orange-500" },
      { name: "CSS3", icon: Palette, color: "text-blue-500" },
      { name: "JavaScript", icon: Zap, color: "text-yellow-500" },
      { name: "React.js", icon: Cpu, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: Palette, color: "text-teal-400" },
      { name: "Bootstrap", icon: Layout, color: "text-purple-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    technologies: [
      { name: "Spring Boot", icon: Server, color: "text-green-500" },
      { name: "Hibernate + JPA", icon: Database, color: "text-blue-400" },
      { name: "MySQL", icon: Database, color: "text-blue-600" },
      { name: "Node.js", icon: Server, color: "text-green-600" },
      { name: "Express.js", icon: Workflow, color: "text-gray-400" },
    ],
  },
  {
    title: "AI & Bots",
    icon: Brain,
    technologies: [
      { name: "AI Chatbots", icon: Bot, color: "text-purple-500" },
      { name: "OpenAI API", icon: Sparkles, color: "text-emerald-400" },
      { name: "LangChain", icon: Workflow, color: "text-red-400" },
      { name: "LLM Integration", icon: Brain, color: "text-indigo-400" },
      { name: "Dialogflow", icon: MessageSquare, color: "text-blue-400" },
      { name: "Rasa", icon: Bot, color: "text-orange-500" },
    ],
  },
  {
    title: "Tools & Others",
    icon: GitBranch,
    technologies: [
      { name: "Git / GitHub", icon: GitBranch, color: "text-red-500" },
      { name: "VS Code", icon: Code2, color: "text-blue-400" },
      { name: "Postman", icon: Terminal, color: "text-orange-400" },
      { name: "Firebase", icon: Zap, color: "text-yellow-500" },
      { name: "JWT", icon: Shield, color: "text-purple-400" },
      { name: "REST API", icon: Server, color: "text-green-400" },
      { name: "AWS", icon: Cloud, color: "text-orange-600" },
      { name: "Docker", icon: Cloud, color: "text-blue-500" },
    ],
  },
];

/* -------------------- Component -------------------- */
const TechStack = () => {
  return (
    <section id="tech" aria-labelledby="tech-heading" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 id="tech-heading" className="text-4xl lg:text-5xl font-bold mb-6">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build amazing digital experiences
            and intelligent solutions
          </p>
        </motion.header>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-effect rounded-2xl p-6 hover-lift"
                aria-label={`${category.title} technologies`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-primary-500 to-accent-500">
                    <Icon aria-hidden="true" className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech) => {
                    const TechIcon = tech.icon;
                    return (
                      <motion.li
                        key={tech.name}
                        variants={scaleIn}
                        transition={{ duration: 0.25 }}
                        className="flex items-center space-x-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition"
                      >
                        <TechIcon
                          aria-hidden="true"
                          className={`w-4 h-4 ${tech.color}`}
                        />
                        <span className="text-sm font-medium text-gray-300">
                          {tech.name}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(TechStack);
