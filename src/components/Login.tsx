"use client";
import { Next } from "@/icons";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Link from "next/link";

interface Props {
  handleSetIsLoginOpen: () => void;
  user: any;
  setUser: (user: any) => void;
}

export default function Login({ handleSetIsLoginOpen, user, setUser }: Props) {
  const router = useRouter();

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <div className="absolute z-50 bg-red-100 right-0 top-[60px] w-full md:w-auto border border-red-200">
      {user.name ? (
        <div>
          <Link
            href={"/mi-perfil"}
            className="p-4 w-full md:w-80 hover:bg-red-200 flex justify-between rounded-none"
          >
            <p>Mi perfil</p>
            <Next />
          </Link>
          <Button
            className="p-4 w-full md:w-80 hover:bg-red-200 flex justify-between rounded-none"
            onClick={handleLogOut}
          >
            <p>Cerrar sesión</p>
            <Next />
          </Button>
        </div>
      ) : (
        <div>
          <Link
            href={"/login"}
            className="p-4 w-full md:w-80 hover:bg-red-200 flex justify-between"
            onClick={handleSetIsLoginOpen}
          >
            <p>Iniciar sesión</p>
            <Next />
          </Link>
          <Link
            href={"/registrarse"}
            className="p-4 w-full md:w-80 hover:bg-red-200 flex justify-between"
            onClick={handleSetIsLoginOpen}
          >
            <p>Registrarse</p>
            <Next />
          </Link>
        </div>
      )}
    </div>
  );
}
