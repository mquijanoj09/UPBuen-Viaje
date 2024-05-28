"use client";
import { Button, Input } from "@/components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function LoginForm() {
  const schema = yup
    .object({
      id: yup
        .string()
        .matches(/^[0-9]+$/, "El id solo puede contener números")
        .min(3, "El ID debe tener mínimo 3 dígitos")
        .max(6, "El ID debe tener máximo 6 dígitos")
        .required("El id es requerido"),
      password: yup.string().required("La contraseña es requerida"),
    })
    .required();
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <main className="flex items-center justify-center w-full mt-20 text-lg">
      <form
        className="flex gap-10 items-center flex-col py-10 max-w-3xl"
        onSubmit={handleSubmit(async ({ id, password }) => {
          const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ id, password }),
          });
          const data = await res.json();
          if (data.isLoggedIn) {
            localStorage.setItem("userId", id);
            window.location.pathname = "/";
          } else {
            setError(data.error, {
              type: "manual",
              message: data.message,
            });
          }
        })}
      >
        <h2 className="text-4xl text-red-500 font-semibold">
          ¿Cuál es tu id y tu contraseña?
        </h2>
        <div className="w-full flex flex-col gap-5">
          <Input
            inputText="Id"
            inputType="string"
            label="id"
            error={errors.id}
            register={register}
          />
          <Input
            inputText="Contraseña"
            inputType="password"
            label="password"
            error={errors.password}
            register={register}
          />
        </div>
        <Button
          type="submit"
          className="bg-red-500 text-white hover:bg-red-400"
        >
          Iniciar sesión
        </Button>
      </form>
    </main>
  );
}
