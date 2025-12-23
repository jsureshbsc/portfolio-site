import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Function to track WhatsApp clicks
  const trackWhatsAppClick = (path = window.location.pathname) => {
    if (window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "Lead",
        event_label: path,
        value: 1,
      });
    }
  };

  useEffect(() => {
    // Function to tag WhatsApp links with UTM parameters
    const tagWhatsAppLinks = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");

      const source = utmSource || "direct";
      const medium = utmMedium || "website";
      const campaign = utmCampaign || "lead";

      const defaultMessage = "Hi Suresh, I need a website.";
      const taggedMessage = `Hi Suresh, I found you via ${source.toUpperCase()} (${campaign}). I need a website.`;

      // Update all WhatsApp links on the page
      document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
        try {
          const url = new URL(link.href);
          const phone = url.pathname.split("/").pop(); // Extract phone number
          const newText = source === "direct" ? defaultMessage : taggedMessage;
          
          // Update the href with tagged message
          link.href = `https://wa.me/${phone}?text=${encodeURIComponent(newText)}`;
          link.title = `Contact Suresh on WhatsApp (Source: ${source})`;
          
          // Add tracking to existing click handlers
          const originalOnClick = link.onclick;
          link.onclick = (e) => {
            trackWhatsAppClick(window.location.pathname);
            if (originalOnClick) originalOnClick.call(link, e);
            return true;
          };
        } catch (error) {
          console.error("Error updating WhatsApp link:", error);
        }
      });
    };

    // Run after component mounts
    setTimeout(tagWhatsAppLinks, 500); // Small delay to ensure DOM is ready
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Services />
          <Projects />
          <TechStack />
          <Contact trackWhatsAppClick={() => trackWhatsAppClick(window.location.pathname)} />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;