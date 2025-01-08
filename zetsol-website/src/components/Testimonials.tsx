import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  videoThumbnail: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Olivia Martinez",
    role: "Founder",
    company: "Socialize",
    content:
      "Zetsol has been an invaluable partner for our development needs. Their expertise, dedication, and seamless collaboration have helped us achieve outstanding results. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    videoUrl: "https://player.vimeo.com/video/824804225",
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content:
      "Working with Zetsol has transformed our development process. Their team's technical expertise and commitment to quality have helped us launch our products faster and with better results.",
    image:
      "https://images.unsplash.com/photo-1472099645785-bb43f82c33c4?w=400&h=400&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop",
    videoUrl: "https://player.vimeo.com/video/824804225",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Product Manager",
    company: "InnovateLabs",
    content:
      "The level of professionalism and technical skill at Zetsol is exceptional. They've consistently delivered high-quality solutions that exceed our expectations. A truly reliable partner.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
    videoUrl: "https://player.vimeo.com/video/824804225",
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Digital Ventures",
    content:
      "Zetsol's ability to understand our vision and translate it into reality has been remarkable. Their team's dedication and innovative approach have made them an essential part of our success.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    videoThumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    videoUrl: "https://player.vimeo.com/video/824804225",
  },
];

const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = "" }) => {
  const [error, setError] = useState(false);

  return (
    <img
      src={
        error
          ? `https://ui-avatars.com/api/?name=${encodeURIComponent(
              alt
            )}&background=random`
          : src
      }
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = React.useRef<HTMLIFrameElement>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.src = `${testimonials[currentIndex].videoUrl}?autoplay=1`;
    }
  };

  useEffect(() => {
    setIsVideoPlaying(false);
    setIsVideoLoading(true);
    if (videoRef.current) {
      videoRef.current.src = testimonials[currentIndex].videoUrl;
    }
  }, [currentIndex]);

  return (
    <motion.section
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)] pointer-events-none" />
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-600 font-bold text-base uppercase tracking-wider mb-3 font-['Space_Grotesk']">
              TESTIMONIALS
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-['Space_Grotesk']">
              What Our Clients Say
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Space_Grotesk']">
              Don't just take our word for it. Here's what our clients have to
              say about their experience working with us.
            </p>
          </motion.div>

          <div className="relative h-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <motion.div
                      className="bg-white/80 backdrop-blur-md p-8 lg:p-12 rounded-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                          <ImageWithFallback
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 font-['Space_Grotesk']">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-gray-600 font-['Space_Grotesk']">
                            {testimonials[currentIndex].role} at{" "}
                            {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 font-['Space_Grotesk']">
                        "{testimonials[currentIndex].content}"
                      </p>
                    </motion.div>
                  </div>

                  <div className="order-1 lg:order-2">
                    <motion.div
                      className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100"
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {!isVideoPlaying ? (
                        <>
                          <ImageWithFallback
                            src={testimonials[currentIndex].videoThumbnail}
                            alt={`${testimonials[currentIndex].name}'s testimonial video`}
                            className="w-full h-full object-cover"
                            onLoad={() => setIsVideoLoading(false)}
                          />
                          <motion.div
                            className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors duration-300"
                            initial={false}
                            animate={{ opacity: isVideoLoading ? 0 : 1 }}
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.button
                                onClick={handlePlayVideo}
                                className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-red-600 shadow-lg hover:bg-white/100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-8 h-8"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                  />
                                </svg>
                              </motion.button>
                            </div>
                          </motion.div>
                        </>
                      ) : (
                        <div className="relative w-full h-full">
                          <iframe
                            ref={videoRef}
                            src={testimonials[currentIndex].videoUrl}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                      {isVideoLoading && !isVideoPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 -bottom-12 lg:-bottom-4 flex items-center justify-between">
              <motion.button
                onClick={() => paginate(-1)}
                className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-lg text-gray-600 hover:text-red-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? "bg-red-600" : "bg-gray-300"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => paginate(1)}
                className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-white/20 shadow-lg text-gray-600 hover:text-red-600"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
