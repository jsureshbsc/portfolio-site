import { motion } from "framer-motion";
import { Code2, Heart, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Logo and Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-3"
          >
            <Code2 className="w-6 h-6 text-primary-400" />
            <img width={20} src={logo} alt="suresh"/>
            <span className="text-lg font-bold text-gradient">Suresh</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400 text-sm">
              © {currentYear} All rights reserved.
            </span>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 text-gray-400"
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Suresh</span>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <motion.a
              href="mailto:suresh02.jrs@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Get in touch</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            Ready to start your next project? Let's build something amazing
            together! 🚀
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
