import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap, TrendingUp, Award } from "lucide-react";
import { getFeaturedProducts, categories } from "@/lib/products";
import {
  useScrollAnimation,
  fadeInUpVariants,
  fadeInVariants,
  containerVariants,
  itemVariants,
} from "@/hooks/use-scroll-animation";

export default function Index() {
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState("");
  const featuredProducts = getFeaturedProducts();

  const heroRef = useScrollAnimation();
  const categoriesRef = useScrollAnimation();
  const productsRef = useScrollAnimation();
  const trustRef = useScrollAnimation();
  const newsletterRef = useScrollAnimation();

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden">
      <Header cartCount={cartCount} />

      {/* Hero Section */}
      <motion.section
        ref={heroRef.ref}
        initial="hidden"
        animate={heroRef.isInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        className="relative bg-gradient-to-b from-gray-50 to-white pt-20 lg:pt-32 pb-20 lg:pb-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroRef.isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900"
              >
                Experience Technology
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg"
              >
                Discover our curated collection of premium tech products
                designed for the modern lifestyle.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/products">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800 text-base"
                  >
                    Explore Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={itemVariants}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=700&fit=crop"
                  alt="Premium Tech"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Categories */}
      <motion.section
        ref={categoriesRef.ref}
        initial="hidden"
        animate={categoriesRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={categoriesRef.isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Shop by Category
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600"
              >
                Explore our collections
              </motion.p>
            </div>

            {/* Categories Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={categoriesRef.isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/products?category=${category.id}`}
                    className="group block"
                  >
                    <div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 text-center h-full flex flex-col items-center justify-center space-y-4">
                      <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-base">
                        {category.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        ref={productsRef.ref}
        initial="hidden"
        animate={productsRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="py-24 lg:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={productsRef.isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {/* Section Header */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-between"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Featured
                </h2>
                <p className="text-lg text-gray-600 mt-2">
                  Our best-selling products
                </p>
              </div>
              <Link
                to="/products"
                className="text-gray-900 hover:text-blue-600 font-semibold flex items-center gap-2 text-lg"
              >
                View All
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={productsRef.isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {featuredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        ref={trustRef.ref}
        initial="hidden"
        animate={trustRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="py-24 lg:py-32 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={trustRef.isInView ? "visible" : "hidden"}
          >
            {/* Section Header */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
            >
              Why Choose TechHub
            </motion.h2>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={trustRef.isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                {
                  icon: Zap,
                  title: "Fast Shipping",
                  description:
                    "Free delivery on orders over $50. Get your products quickly.",
                },
                {
                  icon: Award,
                  title: "Quality Guaranteed",
                  description:
                    "All products are authentic and verified by experts.",
                },
                {
                  icon: TrendingUp,
                  title: "Best Prices",
                  description:
                    "Competitive pricing with regular exclusive deals.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 space-y-4 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <Icon className="w-12 h-12 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        ref={newsletterRef.ref}
        initial="hidden"
        animate={newsletterRef.isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className="py-24 lg:py-32 bg-black text-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={newsletterRef.isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-5xl font-bold"
            >
              Stay Updated
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl text-gray-300">
              Get the latest tech news and exclusive offers delivered to your
              inbox.
            </motion.p>

            <motion.form
              variants={itemVariants}
              onSubmit={handleNewsletterSignup}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 text-white placeholder-gray-400 border-white/20 rounded-lg"
              />
              <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-100 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </motion.form>

            <motion.p variants={itemVariants} className="text-gray-400 text-sm">
              We respect your privacy. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
