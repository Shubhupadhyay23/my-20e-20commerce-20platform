import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Zap, TrendingUp, Award } from "lucide-react";
import { getFeaturedProducts, categories } from "@/lib/products";

export default function Index() {
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState("");
  const featuredProducts = getFeaturedProducts();

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header cartCount={cartCount} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-semibold">✨ New Collection Available</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Premium Tech Products for Modern Living
              </h1>
              <p className="text-lg text-blue-100">
                Discover the latest in electronics, audio, and accessories. Premium quality at unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Shop Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  View Collections
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <p className="text-2xl font-bold">50K+</p>
                  <p className="text-blue-100 text-sm">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">1000+</p>
                  <p className="text-blue-100 text-sm">Products</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-blue-100 text-sm">Support</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                  alt="Hero"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600">
              Explore our wide selection of premium products
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="text-gray-600 mt-2">
                Check out our latest and most popular items
              </p>
            </div>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Shipping",
                description: "Free delivery on orders over $50",
              },
              {
                icon: Award,
                title: "Quality Guaranteed",
                description: "All products are authentic and verified",
              },
              {
                icon: TrendingUp,
                title: "Best Prices",
                description: "Competitive pricing with regular discounts",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 text-center">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Latest Tech
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Subscribe to our newsletter for exclusive deals and new product launches
          </p>

          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white text-gray-900 placeholder-gray-500 border-0"
            />
            <Button
              type="submit"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-blue-100 text-sm mt-4">
            We'll never share your email. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
