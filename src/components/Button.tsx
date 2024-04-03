interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      className={`rounded-full p-4 mx-auto ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
