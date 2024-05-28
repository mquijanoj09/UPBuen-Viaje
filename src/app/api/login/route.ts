import { db } from "@/utils/firebase";
import { get, ref } from "firebase/database";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const headersList = headers();
  const data = await req.json();
  const { id, password } = data;
  const userRef = ref(db, "users/" + id);
  const user = await get(userRef);
  const userData = user.val();
  if (!userData)
    return Response.json({
      message: "Id no encontrado",
      error: "id",
      isLoggedIn: false,
    });
  if (userData.password === password) {
    return Response.json({ message: "User found", isLoggedIn: true });
  } else {
    return Response.json({
      message: "Contraseña incorrecta",
      error: "password",
      isLoggedIn: false,
    });
  }
}
