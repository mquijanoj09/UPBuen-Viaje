import { db } from "@/utils/firebase";
import { get, ref } from "firebase/database";

export async function POST(req: Request) {
  const data = await req.json();
  const { id } = data;
  const ViajeRef = ref(db, "viajes/" + id);
  const viaje = await get(ViajeRef);
  const userData = viaje.val();
  if (!userData) {
    return Response.json({ message: "Travel not found" });
  } else {
    return Response.json({ message: "Travel found", userData });
  }
}
