import { db } from "@/utils/firebase";
import { get, ref } from "firebase/database";
import { headers } from "next/headers";

export async function GET() {
  const headersList = headers();
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
