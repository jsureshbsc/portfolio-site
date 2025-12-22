import { memo } from "react";
import { motion } from "framer-motion";
import { Code2, Heart, Mail } from "lucide-react";
import logo from "../assets/logo.png";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-800"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 text-gray-400"
          >
            <Code2 aria-hidden className="w-6 h-6 text-primary-400" />
            <img
              src={logo}
              width={20}
              height={20}
              alt="Suresh logo"
              loading="lazy"
            />
            <span className="text-lg font-bold text-gradient">Suresh</span>
            <span aria-hidden>•</span>
            <span className="text-sm">© {year} All rights reserved.</span>
          </motion.div>

          {/* Made with love */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-2 text-gray-400"
            aria-label="Made with love"
          >
            <span>Made with</span>
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            <span>by Suresh</span>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="mailto:suresh02.jrs@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Email Suresh"
            >
              <Mail aria-hidden className="w-4 h-4" />
              <span className="text-sm">Get in touch</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="text-center mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm"
        >
          Ready to start your next project? Let’s build something amazing
          together! 🚀
        </motion.p>
      </div>
    </footer>
  );
};

export default memo(Footer);
