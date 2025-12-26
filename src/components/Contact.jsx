import { memo, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

/* ---------------- Static ---------------- */
const EMAIL = "suresh02.jrs@gmail.com";
const PHONE = "+91 6369263611";
const LINKEDIN = "https://www.linkedin.com/in/web-developer-suresh";

const initialFormData = {
  name: "",
  phoneNo: "",
  email: "",
  subject: "",
  message: "",
  callMe: false,
  botField: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const emailClickTime = useRef(0);

  /* ---------------- Handlers ---------------- */
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setEmailCopied(false), 2000);
  }, []);

  const handleEmailClick = useCallback(
    (e) => {
      e.preventDefault();
      emailClickTime.current = Date.now();
      window.location.href = `mailto:${EMAIL}?subject=Portfolio Inquiry`;

      setTimeout(() => {
        if (Date.now() - emailClickTime.current > 1000 && !emailCopied) {
          toast(
            (t) => (
              <div className="flex flex-col">
                <strong>Email client not detected</strong>
                <button
                  onClick={() => {
                    copyEmail();
                    toast.dismiss(t.id);
                  }}
                  className="mt-2 px-3 py-1 bg-blue-600 rounded text-white text-sm"
                >
                  Copy Email
                </button>
              </div>
            ),
            { duration: 4000 }
          );
        }
      }, 1000);
    },
    [copyEmail, emailCopied]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (formData.botField) return;

      setIsSubmitting(true);
      toast.loading("Sending message...", { id: "send" });

      try {
        const base =
          "https://script.google.com/macros/s/AKfycbxrdbo-6B5T_1zfsf0esgCIMiHiS_qWQvZ9OZtnUrZOo63KDWbAYTk-MpfcsBRWkzuqAg/exec";

        const params = new URLSearchParams({
          name: formData.name.trim(),
          phone: formData.phoneNo.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          callMe: formData.callMe ? "YES" : "NO",
        });

        const res = await fetch(`${base}?${params}`);
        const data = await res.json();

        data.success
          ? toast.success("Message sent ✅", { id: "send" })
          : toast.error("Submission failed ❌", { id: "send" });

        if (data.success) setFormData(initialFormData);
      } catch {
        toast.error("Network error ❌", { id: "send" });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  /* ---------------- UI ---------------- */
  return (
    <>
      <Helmet>
        <title>Contact – Full Stack Developer | Suresh J</title>
        <meta
          name="description"
          content="Contact Suresh J for web development, AI chatbot development, and automation projects. Available for freelancing and full-time opportunities."
        />
        <link
          rel="canonical"
          href="https://portfolio-site-5o3.pages.dev/contact"
        />
      </Helmet>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-20 bg-gray-900"
      >
        <Toaster position="top-right" />
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Let's <span className="text-blue-400">Work Together</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get in touch — your message is securely saved.
            </p>
          </motion.header>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.button
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={handleEmailClick}
                className="w-full p-5 glass-effect rounded-xl text-left"
                aria-label="Send email"
              >
                <Mail aria-hidden className="w-6 h-6 text-white mb-2" />
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-300">{EMAIL}</p>
              </motion.button>

              <a href={`tel:${PHONE.replace(/\s/g, "")}`}>
                <motion.div
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-5 glass-effect rounded-xl"
                >
                  <Phone aria-hidden className="w-6 h-6 text-white mb-2" />
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-300">{PHONE}</p>
                </motion.div>
              </a>
              <a
                href="https://wa.me/916369263611?text=Hi%20Suresh%2C%20I%20need%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                <motion.div
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-5 glass-effect rounded-xl"
                >
                  {" "}
                  <MessageCircle
                    aria-hidden
                    className="w-6 h-6 text-white mb-2"
                  />
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-gray-300">{PHONE}</p>
                </motion.div>
              </a>

              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <motion.div
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-5 glass-effect rounded-xl"
                >
                  <Linkedin aria-hidden className="w-6 h-6 text-white mb-2" />
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-gray-300">View Profile</p>
                </motion.div>
              </a>
            </div>

            {/* Form */}
            <motion.form
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="glass-effect rounded-2xl p-6 space-y-5"
            >
              <input
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {["name", "phoneNo", "email", "subject"].map((field) => (
                <input
                  key={field}
                  name={field}
                  required
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field.replace(/No/, " Number")}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white"
                />
              ))}

              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white flex justify-center items-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <MessageCircle /> Send Message
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Contact);
