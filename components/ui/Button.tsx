type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-amber-700 px-10 py-4 text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-amber-800"
    >
      {children}
    </button>
  );
}