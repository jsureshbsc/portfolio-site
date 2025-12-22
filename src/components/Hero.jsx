import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Rocket,
  Smartphone,
  Zap,
  Globe,
  Shield,
  Layers,
  Sparkles,
  Gauge,
  Target,
} from "lucide-react";

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "Good code is its own best documentation.",
      author: "Steve McConnell",
      tag: "Programming",
    },
    {
      text: "The web is not just a technology, it's a canvas for human creativity.",
      author: "Anonymous",
      tag: "Web Development",
    },
    {
      text: "Quality means doing it right when no one is looking.",
      author: "Henry Ford",
      tag: "Professionalism",
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
      tag: "Problem Solving",
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
      tag: "Clean Code",
    },
    {
      text: "The function of good software is to make the complex appear to be simple.",
      author: "Grady Booch",
      tag: "Software Design",
    },
    {
      text: "Programming isn't about what you know; it's about what you can figure out.",
      author: "Chris Pine",
      tag: "Learning",
    },
    {
      text: "The best error message is the one that never shows up.",
      author: "Thomas Fuchs",
      tag: "Quality",
    },
    {
      text: "It's not a bug; it's an undocumented feature.",
      author: "Anonymous",
      tag: "Humor",
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
      tag: "Elegance",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
              <span className="text-sm font-medium">Full Stack Developer</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">
                AI & Bot Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold mb-6"
            >
              Building Digital <span className="text-gradient">Solutions</span>{" "}
              That Drive Success
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              I create{" "}
              <span className="text-primary-400 font-semibold">
                high-performance websites
              </span>{" "}
              and
              <span className="text-purple-400 font-semibold">
                {" "}
                intelligent AI chatbots
              </span>{" "}
              that help businesses grow their online presence, automate
              operations, and engage customers effectively.
            </motion.p>

            {/* SEO Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mb-8 p-4 border-l-4 border-primary-500 bg-gray-800/30 rounded-r-lg"
            >
              <p className="text-lg italic text-gray-300">
                "A well-designed website is the foundation of your digital
                presence. It should not only look good but also{" "}
                <span className="text-accent-400 font-medium">rank well</span>,
                <span className="text-accent-400 font-medium">
                  {" "}
                  convert visitors
                </span>
                , and
                <span className="text-accent-400 font-medium">
                  {" "}
                  drive business growth
                </span>
                ."
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold text-white text-center hover-lift flex items-center justify-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Start Your Project</span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary-500 rounded-lg font-semibold text-primary-400 text-center hover-lift flex items-center justify-center space-x-2"
              >
                <Layers className="w-5 h-5" />
                <span>View Project</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Quotes Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] glass-effect rounded-2xl overflow-hidden hover-lift">
              {/* Gradient Background with Quotes */}
              <div className="w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center p-6">
                <div className="text-white text-center w-full max-w-lg">
                  {/* Quote Icon */}
                  <svg
                    className="w-10 h-10 mx-auto mb-6 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604-.51.789-.672 1.747-.672 2.889v.496h4.396v4H5.93v4H2.197v-4.399c0-1.904.779-3.528 2.32-4.843 1.54-1.316 3.694-2.026 6.434-2.117V6H10c-2.29 0-4.01.771-5.117 2.168C3.777 9.563 3 11.5 3 13.496V18H0v-4.496c0-2.571.778-4.806 2.309-6.212zM20 6.292C21.403 4.771 23.526 4 26.309 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604-.51.789-.672 1.747-.672 2.889v.496h4.396v4H22.238v4h-3.734v-4.399c0-1.904.779-3.528 2.32-4.843 1.54-1.316 3.694-2.026 6.434-2.117V6H26.309c-2.29 0-4.01.771-5.117 2.168C20.086 9.563 19.309 11.5 19.309 13.496V18h-3v-4.496c0-2.571.778-4.806 2.309-6.212z" />
                  </svg>

                  {/* Animated Quotes */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuote}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="mb-6"
                    >
                      <p className="text-2xl md:text-3xl font-medium italic leading-tight mb-6">
                        "{quotes[currentQuote].text}"
                      </p>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-8 h-px bg-white/50"></div>
                        <div>
                          <p className="text-lg opacity-90 font-medium">
                            {quotes[currentQuote].author}
                          </p>
                          <p className="text-sm opacity-70 mt-1">
                            {quotes[currentQuote].tag}
                          </p>
                        </div>
                        <div className="w-8 h-px bg-white/50"></div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Quote Indicator Dots */}
                  <div className="flex justify-center space-x-2 mt-8">
                    {quotes.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentQuote(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentQuote
                            ? "bg-white w-8"
                            : "bg-white/50 hover:bg-white/80"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to quote ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Static Developer Quote */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-10 pt-6 border-t border-white/30"
                  >
                    <p className="text-sm uppercase tracking-wider opacity-80 mb-2">
                      Developer Wisdom
                    </p>
                    <p className="text-lg font-medium">
                      <span className="text-white/90">
                        "Write code that not only works,{" "}
                      </span>
                      <span className="text-white font-semibold">
                        but also tells a story."
                      </span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
