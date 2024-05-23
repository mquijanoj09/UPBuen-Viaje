import { db } from "@/utils/firebase";
import { get, ref, set } from "firebase/database";

export async function POST(req: Request) {
  const data = await req.json();
  const { ride, user } = data;
  console.log(ride, user);
  await set(ref(db, "viajes/" + ride.id), {
    ...ride,
    places: ride.places - 1,
    users: ride.users?.filter((u: string) => u !== user) || [],
  });
  return Response.json({ message: "User travel removed" });
}
