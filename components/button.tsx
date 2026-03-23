interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "font-semibold transition rounded px-4 py-2 text-center inline-block";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
