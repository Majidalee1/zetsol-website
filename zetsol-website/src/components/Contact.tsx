import React, { useState } from "react";
import { motion } from "framer-motion";

interface ContactMethod {
  icon: JSX.Element;
  label: string;
  link?: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Mail us",
    link: "mailto:contact@zetsol.com",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
        />
      </svg>
    ),
    label: "Whatsapp",
    link: "https://wa.me/1234567890",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
    ),
    label: "Skype",
    link: "skype:your.id?chat",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        />
      </svg>
    ),
    label: "Call us",
    link: "tel:+1234567890",
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with consistent style */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)] backdrop-blur-[100px]" />
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-red-600 font-bold text-sm uppercase tracking-wider mb-4 block font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Have An Idea? Let's Build Together.
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Transform your vision into reality with our expertise. 
            We're here to help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-7xl mx-auto">
          {/* Contact Methods - Left Column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl backdrop-blur-md bg-white/80 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50/50 hover:to-transparent transition-all"
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="p-3 bg-red-50 rounded-lg text-red-600 group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
                      {method.icon}
                    </span>
                    <span className="font-medium text-gray-900 group-hover:text-red-600 transition-colors font-['Space_Grotesk']">
                      {method.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info Card */}
            <motion.div 
              className="p-8 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              whileHover={{ y: -2 }}
            >
              <h4 className="text-2xl font-bold mb-4 font-['Space_Grotesk']">Ready to get started?</h4>
              <p className="text-red-100 mb-6 font-['Space_Grotesk']">
                Let's discuss your project and see how we can help you achieve your goals.
              </p>
              <div className="flex items-center gap-3 text-sm text-red-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="font-['Space_Grotesk']">Response time: within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Column */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 lg:p-10 rounded-2xl backdrop-blur-md bg-white/80 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Space_Grotesk']">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Space_Grotesk'] shadow-[0_2px_8px_rgb(0,0,0,0.04)]"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-['Space_Grotesk']">
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Space_Grotesk'] shadow-[0_2px_8px_rgb(0,0,0,0.04)]"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Space_Grotesk']">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Space_Grotesk'] shadow-[0_2px_8px_rgb(0,0,0,0.04)]"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-['Space_Grotesk']">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all font-['Space_Grotesk'] resize-none shadow-[0_2px_8px_rgb(0,0,0,0.04)]"
                    placeholder="Describe your project requirements..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-medium font-['Space_Grotesk'] shadow-lg shadow-red-600/10 hover:shadow-xl hover:shadow-red-600/20 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Send message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
