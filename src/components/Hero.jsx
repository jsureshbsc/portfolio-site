import { motion } from "framer-motion";
import { Code2, Rocket, Smartphone, Zap } from "lucide-react";
import myphoto from "../assets/myphoto.jpg";

const Hero = () => {
  const features = [
    { icon: Zap, text: "Fast Delivery" },
    { icon: Smartphone, text: "Mobile Friendly" },
    { icon: Rocket, text: "Modern Design" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full glass-effect"
            >
              <Code2 className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium">
                Web Developer 
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-gradient">Suresh J</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              I build modern, fast, mobile-friendly websites using HTML, CSS,
              JavaScript, React, and Spring Boot. I help small businesses,
              startups, and creators get a professional online presence —
              quickly and affordably.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full glass-effect"
                >
                  <feature.icon className="w-4 h-4 text-primary-400" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold text-white text-center hover-lift"
              >
                Start Your Project
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary-500 rounded-lg font-semibold text-primary-400 text-center hover-lift"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Main floating card */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 glass-effect rounded-2xl p-6 hover-lift"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={myphoto}
                    alt="Suresh"
                    className="w-64 h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -30, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-xl flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, -15, 0],
                  y: [0, 25, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center"
              >
                <Rocket className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
