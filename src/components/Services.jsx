import { motion } from "framer-motion";
import {
  Code,
  Zap,
  ShoppingCart,
  Wrench,
  Smartphone,
  Globe,
  Server,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites from landing pages to complex web applications",
      features: [
        "Landing pages",
        "Multi-page websites",
        "Portfolio sites",
        "React frontends",
      ],
    },
    {
      icon: Server,
      title: "Microservices API Gateway",
      description:
        "Centralized API management system with routing, security, and monitoring",
      features: [
        "JWT Authentication",
        "Rate limiting",
        "Request/Response logging",
        "Load balancing",
        "Circuit breaker pattern",
        "API documentation (Swagger)",
      ],
    },
    {
      icon: Code,
      title: "Bug Tracking System",
      description:
        "Full-stack issue tracking application for software development teams",
      features: [
        "Issue creation & assignment",
        "Project boards",
        "User authentication",
        "Real-time notifications",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Fixes",
      description: "Keep your website running smoothly with ongoing support",
      features: [
        "Bug fixing",
        "Performance optimization",
        "UI improvements",
        "Backend fixes",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Services I <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital ideas
            to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6 hover-lift group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <Zap className="w-4 h-4 text-primary-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Smartphone,
              title: "Responsive Design",
              desc: "Perfect on all devices",
            },
            {
              icon: Zap,
              title: "Fast Performance",
              desc: "Optimized for speed",
            },
            {
              icon: Shield,
              title: "SEO Friendly",
              desc: "Better search rankings",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 p-4 rounded-xl glass-effect"
            >
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
