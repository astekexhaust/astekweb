interface ProductCardProps {
  image?: string;
  brand: string;
  name: string;
  year: string;
  model: string;
}

export function ProductCard({
  image,
  brand,
  name,
  year,
  model,
}: ProductCardProps) {
  return (
    <div className="border border-gray-700 rounded overflow-hidden hover:border-blue-600 transition">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-500">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm">Product Image</span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-black">
        <p className="text-gray-500 text-xs font-semibold mb-2">{brand}</p>
        <h3 className="text-white font-bold text-sm mb-4">{name}</h3>
        <p className="text-gray-400 text-xs">
          {year}
          <br />
          {model}
        </p>
      </div>
    </div>
  );
}
