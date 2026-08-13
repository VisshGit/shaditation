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
      className="rounded-full border border-amber-700 bg-transparent px-10 py-4 text-sm uppercase tracking-[3px] text-amber-700 transition-all duration-500 hover:bg-amber-700 hover:text-white"
    >
      {children}
    </button>
  );
}