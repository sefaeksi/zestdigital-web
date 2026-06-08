interface BadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "outline" | "dark";
  className?: string;
}

const variants = {
  lime: "bg-lime text-black",
  outline: "border border-lime text-lime",
  dark: "bg-gray-dark text-gray-light",
};

export default function Badge({ children, variant = "lime", className = "" }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-display font-bold uppercase tracking-widest ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
