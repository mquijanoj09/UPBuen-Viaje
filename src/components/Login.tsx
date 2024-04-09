"use client";
import { Next } from "@/icons";
import { useRouter } from "next/navigation";
import { onValue, ref } from "firebase/database";
import { db } from "@/utils/firebase";
import Button from "./Button";
import Link from "next/link";
import { use, useEffect, useState } from "react";

interface Props {
  handleSetIsLoginOpen: () => void;
}

export default function Login({ handleSetIsLoginOpen }: Props) {
  const router = useRouter();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const handleUser = () => {
      const id = localStorage.getItem("userId");
      const userRef = ref(db, "users/" + id);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) return;
        setUser(data);
      });
    };
    handleUser();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    router.push("/login");
  };

  console.log(user);

  return (
    <div className="absolute z-20 bg-red-100 right-0 top-[60px]">
      {user.name ? (
        <div>
          <h3 className="p-4">
            Hola {user.name} {user.lastName}!
          </h3>
          <Button
            className="p-4 w-80 hover:bg-red-200 flex justify-between rounded-none"
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
            className="p-4 w-80 hover:bg-red-200 flex justify-between"
            onClick={handleSetIsLoginOpen}
          >
            <p>Iniciar sesión</p>
            <Next />
          </Link>
          <Link
            href={"/registrarse"}
            className="p-4 w-80 hover:bg-red-200 flex justify-between"
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
