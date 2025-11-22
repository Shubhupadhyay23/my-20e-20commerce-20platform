import { Link } from "react-router-dom";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

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
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div
      className={cn(
        "group relative rounded-lg border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300",
        variant === "compact" && "flex gap-4"
      )}
    >
      {/* Product Image */}
      <div className={cn("relative bg-gray-100 overflow-hidden", variant === "compact" ? "w-24 h-24 flex-shrink-0" : "aspect-square")}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </Link>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            -{discount}%
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 left-3 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-gray-50">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className={cn("p-4 flex flex-col", variant === "compact" ? "flex-1 justify-between" : "")}>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <Link
            to={`/product/${product.id}`}
            className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2"
          >
            {product.name}
          </Link>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="font-bold text-lg text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        {variant !== "compact" && (
          <Button
            onClick={() => onAddToCart?.(product)}
            disabled={!product.inStock}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
}
