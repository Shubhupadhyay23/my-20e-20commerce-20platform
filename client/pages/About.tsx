import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Zap, Heart } from "lucide-react";
import {
  useScrollAnimation,
  fadeInUpVariants,
  containerVariants,
  itemVariants,
} from "@/hooks/use-scroll-animation";

export default function About() {
  const heroRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const valuesRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We push the boundaries of technology to create products that define the future of digital experience.",
    },
    {
      icon: Heart,
      title: "Quality",
      description:
        "Every product is meticulously crafted to meet the highest standards of excellence and durability.",
    },
    {
      icon: Award,
      title: "Customer First",
      description:
        "Your satisfaction is our success. We're committed to providing exceptional support and service.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header cartCount={0} />

      {/* Hero Section */}
      <motion.section
        ref={heroRef.ref}
        initial="hidden"
        animate={heroRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            About anon
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Redefining the way the world experiences technology
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        ref={missionRef.ref}
        initial="hidden"
        animate={missionRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={missionRef.isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.h2 variants={itemVariants} className="text-4xl font-bold">
                Our Story
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Founded in 2020, anon emerged from a vision to democratize
                premium technology. We believed that cutting-edge innovation
                shouldn't be exclusive – it should be accessible to everyone.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                What started as a small team of passionate tech enthusiasts has
                grown into a global brand trusted by millions. Today, we
                continue to push boundaries and set new standards in the tech
                industry.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Our commitment to excellence, innovation, and customer
                satisfaction remains unwavering as we shape the future of
                technology.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Our Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef.ref}
        initial="hidden"
        animate={valuesRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesRef.isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-gray-900"
              >
                Our Core Values
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                These principles guide everything we do
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={valuesRef.isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={teamRef.ref}
        initial="hidden"
        animate={teamRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={teamRef.isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { number: "5M+", label: "Happy Customers" },
              { number: "50+", label: "Countries" },
              { number: "200+", label: "Products" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </motion.div>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
