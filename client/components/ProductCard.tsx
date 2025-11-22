import { Link } from "react-router-dom";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  variant?: "grid" | "compact";
}

export default function ProductCard({
  product,
  onAddToCart,
  variant = "grid",
}: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300",
        variant === "compact" && "flex gap-4",
      )}
    >
      {/* Product Image */}
      <div
        className={cn(
          "relative bg-gray-50 overflow-hidden",
          variant === "compact" ? "w-24 h-24 flex-shrink-0" : "aspect-square",
        )}
      >
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          />
        </Link>

        {/* Discount Badge */}
        {discount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-semibold"
          >
            -{discount}%
          </motion.div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-4 left-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-gray-50"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>

      {/* Product Info */}
      <div
        className={cn(
          "p-5 flex flex-col",
          variant === "compact" ? "flex-1 justify-between" : "",
        )}
      >
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">
            {product.category}
          </p>
          <Link
            to={`/product/${product.id}`}
            className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-base"
          >
            {product.name}
          </Link>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex text-yellow-400 text-sm">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-4">
          <span className="font-bold text-lg text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        {variant !== "compact" && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-5"
          >
            <Button
              onClick={() => onAddToCart?.(product)}
              disabled={!product.inStock}
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
