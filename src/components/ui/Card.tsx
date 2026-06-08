interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "highlight";
}

const variants = {
  default: "bg-gray-dark",
  bordered: "bg-gray-dark border border-gray-mid",
  highlight: "bg-gray-dark border border-lime",
};

export default function Card({ children, className = "", variant = "default" }: CardProps) {
  return (
    <div className={`${variants[variant]} p-6 ${className}`}>
      {children}
    </div>
  );
}
