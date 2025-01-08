import React from "react";
import { motion } from "framer-motion";

interface AchievementItemProps {
  number: string;
  description: string;
  className?: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({
  number,
  description,
  className = "",
}) => (
  <motion.div 
    className={className}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full">
      <div className="flex flex-col items-start gap-1.5">
        <motion.span 
          className="text-5xl lg:text-6xl font-bold text-gray-900 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>
        <motion.span 
          className="text-gray-600 text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.span>
      </div>
    </div>
  </motion.div>
);

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.section 
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)] pointer-events-none" />
      
      <div className="container relative">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Section - Text */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-red-600 font-bold text-base uppercase tracking-wider mb-3"
              whileHover={{ scale: 1.05 }}
            >
              ACHIEVEMENTS
            </motion.h2>
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Our achievements
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              With years of experience, we've delivered hundreds of successful
              mobile apps, websites, and innovative projects that drive impactful
              results.
            </motion.p>
          </motion.div>

          {/* Right Section - Achievement Cards */}
          <div className="lg:w-2/3">
            <motion.div 
              className="grid grid-cols-2 gap-5 max-w-2xl ml-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-[85%]">
                <AchievementItem 
                  number="10+" 
                  description="Years in business"
                />
              </div>
              <div className="w-[95%]">
                <AchievementItem 
                  number="100+" 
                  description="Projects delivered"
                />
              </div>
              <div className="w-[90%]">
                <AchievementItem 
                  number="300+" 
                  description="Mobile apps developed"
                />
              </div>
              <div className="w-[88%]">
                <AchievementItem 
                  number="400+" 
                  description="Website developed"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
