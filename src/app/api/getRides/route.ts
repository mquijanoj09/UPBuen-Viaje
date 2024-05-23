import { db } from "@/utils/firebase";
import { get, ref } from "firebase/database";

export async function GET() {
  const viajesRef = ref(db, "viajes/");
  const viajes = await get(viajesRef);
  const userData = viajes.val();
  if (!userData) {
    return Response.json({ message: "Travel not found" });
  } else {
    return Response.json({
      message: "Travel found",
      userData: Object.values(userData),
    });
  }
}
