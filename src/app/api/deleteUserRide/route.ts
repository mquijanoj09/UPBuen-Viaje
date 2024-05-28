import { db } from "@/utils/firebase";
import { get, ref, set } from "firebase/database";

export async function POST(req: Request) {
  const data = await req.json();
  const { ride, userId } = data;
  await set(ref(db, "viajes/" + ride.id), {
    ...ride,
    places: ride.places + 1,
    users: ride.users?.filter((u: string) => u !== userId) || [],
  });
  return Response.json({ message: "User travel removed" });
}
