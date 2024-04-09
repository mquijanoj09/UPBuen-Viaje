interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  disabled?: boolean;
}

export default function Input({
  value,
  onChange,
  placeholder,
  type,
  disabled,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-red-100 p-4 rounded-xl w-full mb-3 outline-[#CD25B3] border border-[#CD25B3]"
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
}
