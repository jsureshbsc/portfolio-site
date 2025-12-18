import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Mail, Phone, Linkedin, MessageCircle, Copy, Check } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const initialFormData = {
    name: "",
    phoneNo: "",
    email: "",
    subject: "",
    message: "",
    callMe: false,
    botField: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const emailClickTime = useRef(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.botField) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Sending your message...", { id: "send" });

    try {
      const scriptBaseUrl =
        "https://script.google.com/macros/s/AKfycbxrdbo-6B5T_1zfsf0esgCIMiHiS_qWQvZ9OZtnUrZOo63KDWbAYTk-MpfcsBRWkzuqAg/exec";
      const params = new URLSearchParams({
        name: formData.name.trim(),
        phone: formData.phoneNo.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        callMe: formData.callMe ? "YES" : "NO",
      });

      const response = await fetch(`${scriptBaseUrl}?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully ✅", { id: "send" });
        setFormData(initialFormData);
      } else {
        toast.error("Submission failed ❌", { id: "send" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error ❌", { id: "send" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Email handling with fallback
  const handleEmailClick = (e) => {
    e.preventDefault();
    emailClickTime.current = Date.now();
    
    // Try to open mail client
    const mailtoUrl = "mailto:suresh02.jrs@gmail.com?subject=Portfolio Inquiry";
    const openedWindow = window.open(mailtoUrl, "_self");
    
    // Check if mail client opened (fallback after 1 second)
    setTimeout(() => {
      const timeSinceClick = Date.now() - emailClickTime.current;
      
      // If user hasn't clicked copy button and no mail client seems to have opened
      if (timeSinceClick > 1000 && !emailCopied) {
        toast(
          (t) => (
            <div className="flex flex-col">
              <span className="font-medium">Email client not detected</span>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("suresh02.jrs@gmail.com");
                    setEmailCopied(true);
                    toast.dismiss(t.id);
                    toast.success("Email copied to clipboard!");
                    setTimeout(() => setEmailCopied(false), 2000);
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
                >
                  Copy Email Address
                </button>
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="px-3 py-1 bg-gray-600 text-white rounded text-sm"
                >
                  Dismiss
                </button>
              </div>
            </div>
          ),
          { duration: 5000 }
        );
      }
    }, 1000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("suresh02.jrs@gmail.com");
    setEmailCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "suresh02.jrs@gmail.com",
      action: handleEmailClick,
      isButton: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6369263611",
      href: "tel:+916369263611",
      isButton: false,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/web-developer-suresh",
      href: "https://www.linkedin.com/in/web-developer-suresh",
      isButton: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-blue-400">Work Together</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your message will be saved securely in our sheet. Get in touch and
            let's discuss your project!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            {contactMethods.map((method, index) => (
              method.isButton ? (
                // Email button with fallback
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <button
                    onClick={method.action}
                    className="w-full flex items-center justify-between p-5 glass-effect rounded-xl hover:shadow-lg transition-all duration-300 text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{method.label}</p>
                        <p className="text-sm text-gray-300 mt-1">{method.value}</p>
                        <p className="text-xs text-blue-400 mt-2">
                          Click to email me
                        </p>
                      </div>
                    </div>
                    <div className="text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Copy email button */}
                  <button
                    onClick={copyEmailToClipboard}
                    className="absolute right-4 -bottom-2 bg-gray-800 hover:bg-gray-700 text-xs text-gray-300 hover:text-white px-3 py-1 rounded-full flex items-center space-x-1 transition-all shadow-lg"
                    title="Copy email address"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </motion.div>
              ) : (
                // Phone and LinkedIn links
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label === "LinkedIn" ? "_blank" : "_self"}
                  rel={method.label === "LinkedIn" ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-5 glass-effect rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <method.icon className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{method.label}</p>
                    <p className="text-sm text-gray-300 mt-1">{method.value}</p>
                  </div>
                </motion.a>
              )
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-5 glass-effect rounded-xl"
            >
              <p className="text-gray-300">
                I typically respond within 24 hours. For urgent matters, please
                call or email directly.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    required
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Subject *"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project... *"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <input
                  type="checkbox"
                  id="callMe"
                  name="callMe"
                  checked={formData.callMe}
                  onChange={handleChange}
                  className="w-5 h-5 accent-blue-500"
                />
                <label
                  htmlFor="callMe"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  I'd like to schedule a call to discuss this further
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white flex justify-center items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-400 text-center mt-4">
                Your information is secure and will only be used to respond to
                your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;