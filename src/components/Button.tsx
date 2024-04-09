interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button className={`rounded-full p-4 mx-auto ${className}`} {...props}>
      {children}
    </button>
  );
}
