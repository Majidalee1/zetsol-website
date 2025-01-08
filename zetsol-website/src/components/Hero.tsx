import React from "react";
import heroVideo from "../assets/hero-background.mp4";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const Hero = () => {
  const titleLines = [
    "Your Product Your Idea",
    "Our Innovation and",
    "Engineering",
  ];

  return (
    <section className="hero w-screen">
      {/* Video Background */}
      <div className="hero-video-container w-screen h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video absolute min-w-full min-h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <motion.div
          className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Content */}
      <div className="hero-content relative container mx-auto px-4 h-full flex items-center">
        <div className="hero-text max-w-3xl mx-auto text-center text-white pt-20">
          <div className="overflow-hidden">
            {titleLines.map((line, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={titleVariants}
                className="overflow-hidden"
              >
                <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight inline-block">
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8"
          >
            <motion.p
              className="hero-description text-xl md:text-2xl mb-12 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                With over
              </motion.span>
              <motion.span
                className="text-red-500 font-semibold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
              >
                {" "}
                30 years
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                {" "}
                of experience, Zetsol simplifies outsourcing by vetting
                developers and managing payments for seamless, cost-effective
                solutions.
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <motion.button
                className="hero-button text-lg px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-700 to-red-800 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0" />
                <span className="relative z-10">Get a quote</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mx-auto"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
