import { db } from "@/utils/firebase";
import { get, ref, set } from "firebase/database";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const headersList = headers();
  const data = await req.json();
  const { ride, user, places } = data;
  await set(ref(db, "viajes/" + ride.id), {
    ...ride,
    places: ride.places - 1,
    users: ride.users ? [...ride.users, user] : [user],
  });
  return Response.json({ message: "User added to ride" });
}
