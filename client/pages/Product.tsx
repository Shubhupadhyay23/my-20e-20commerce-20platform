import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Share2, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { getProductById, products, Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import {
  useScrollAnimation,
  fadeInUpVariants,
  containerVariants,
  itemVariants,
} from "@/hooks/use-scroll-animation";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : null;
  const [cartCount, setCartCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const detailsRef = useScrollAnimation();
  const specsRef = useScrollAnimation();
  const relatedRef = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header cartCount={cartCount} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
            <Link to="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
              Return to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert(`Added ${quantity} item(s) to cart`);
    setQuantity(1);
  };

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header cartCount={cartCount} />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-gray-900">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">
                  -{discount}%
                </div>
              )}

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                      selectedImage === index
                        ? "border-blue-600"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category and Rating */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>
              <p className="text-green-600 font-medium">
                {product.inStock ? "✓ In Stock" : "Out of Stock"}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold text-gray-900">Specifications</h3>
              <div className="space-y-3">
                {product.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  size="lg"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Add to Cart
                </Button>

                <button className="border border-gray-300 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Heart className="w-6 h-6" />
                </button>

                <button className="border border-gray-300 rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              {[
                {
                  icon: Truck,
                  title: "Free Shipping",
                  description: "On orders over $50",
                },
                {
                  icon: Shield,
                  title: "Secure Payment",
                  description: "100% secure transactions",
                },
                {
                  icon: RotateCcw,
                  title: "Easy Returns",
                  description: "30-day return policy",
                },
              ].map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">{badge.title}</p>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t pt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onAddToCart={() => setCartCount(cartCount + 1)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
