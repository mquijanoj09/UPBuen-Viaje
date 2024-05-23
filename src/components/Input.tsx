"use client";
import { FieldError, UseFormRegister } from "react-hook-form";
interface InputProps {
  inputText: string;
  inputType: string;
  error?: FieldError;
  label: string;
  register: UseFormRegister<any>;
  disabled?: boolean;
}

export default function Input({
  inputText,
  inputType,
  error,
  register,
  label,
  disabled,
}: InputProps) {
  return (
    <div className="relative flex w-full flex-col items-center">
      <input
        className="bg-red-100 rounded-xl w-full mb-3 outline-[#CD25B3] border border-[#CD25B3] h-12 px-3 focus:outline-main"
        type={inputType}
        placeholder={inputText}
        {...register(label)}
        disabled={disabled}
      />
      {error && (
        <p className="absolute -bottom-2 text-xs font-semibold text-red-600 z-20">
          {error?.message}
        </p>
      )}
    </div>
  );
}
