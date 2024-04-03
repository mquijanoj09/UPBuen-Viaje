interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: Props) {
  return (
    <button className={`rounded-full p-4 mx-auto ${className}`}>
      {children}
    </button>
  );
}
