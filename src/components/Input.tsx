// "use client";
// import { FieldError, UseFormRegister } from "react-hook-form";
// interface InputProps {
//   inputText: string;
//   inputType: string;
//   error?: FieldError;
//   label: string;
//   register: UseFormRegister<any>;
//   disabled?: boolean;
// }

// export default function Input({
//   inputText,
//   inputType,
//   error,
//   register,
//   label,
//   disabled,
// }: InputProps) {
//   return (
//     <div className="relative flex w-full flex-col items-center">
//       <input
//         className="bg-red-100 p-4 rounded-xl w-full mb-3 outline-[#CD25B3] border border-[#CD25B3]"
//         type={inputType}
//         placeholder={inputText}
//         {...register(label)}
//         disabled={disabled}
//       />
//       {error && (
//         <p className="absolute -bottom-4 text-xs font-semibold text-red-600">
//           {error?.message}
//         </p>
//       )}
//     </div>
//   );
// }

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
