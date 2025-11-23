import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedWatch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotateVariants = {
    animate: {
      rotateY: [0, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const bounceVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const parallaxOffset = scrollY * 0.5;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{
        perspective: "1000px",
        transform: `translateY(${parallaxOffset * 0.3}px)`,
      }}
    >
      <motion.div
        variants={bounceVariants}
        animate="animate"
        className="relative"
      >
        <motion.div
          variants={rotateVariants}
          animate="animate"
          className="relative w-80 h-96 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* 3D Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-30 -z-10" />

          {/* Watch Image Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd61f253c37474b7da0212cd3faf2c09d%2Fd95e1d94d71041c6bf2236e091c1859d?format=webp&width=800"
              alt="Premium 3D Smartwatch"
              className="w-full h-full object-cover"
            />

            {/* 3D Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          </div>

          {/* Floating Particles */}
          <motion.div
            className="absolute -top-12 -right-12 w-32 h-32 bg-blue-300 rounded-full blur-2xl opacity-20"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-12 -left-12 w-40 h-40 bg-purple-300 rounded-full blur-2xl opacity-20"
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
