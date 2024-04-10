import { db } from "@/utils/firebase";
import { get, ref } from "firebase/database";

export async function POST(req: Request) {
  const data = await req.json();
  const { id, password } = data;
  const userRef = ref(db, "users/" + id);
  const user = await get(userRef);
  const userData = user.val();
  if (!userData)
    return Response.json({ message: "User not found", isLoggedIn: false });
  if (userData.password === password) {
    return Response.json({ message: "User found", isLoggedIn: true });
  } else {
    return Response.json({ message: "Incorrect password", isLoggedIn: false });
  }
}
