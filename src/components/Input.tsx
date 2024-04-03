interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

export default function Input({ value, onChange, placeholder, type }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-red-100 p-4 rounded-xl w-full mb-3 outline-gray-300"
      value={value}
      onChange={onChange}
    />
  );
}
