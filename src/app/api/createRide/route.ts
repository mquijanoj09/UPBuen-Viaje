import { db } from "@/utils/firebase";
import { get, onValue, ref, set } from "firebase/database";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const headersList = headers();
  const data = await req.json();
  const {
    id,
    name,
    lastName,
    date,
    time,
    origin,
    destiny,
    money,
    car,
    plate,
    info,
    places,
  } = data;
  const viajesRef = ref(db, "viajes/" + id);
  onValue(viajesRef, (snapshot) => {
    const data = snapshot.val();
    if (!data)
      set(ref(db, "viajes/" + id), {
        id,
        name,
        lastName,
        date,
        time,
        origin,
        destiny,
        money,
        car,
        plate,
        info: info || null,
        places,
        users: [],
      });
  });
  revalidatePath("/carpool");
  return Response.json({ message: "Ride added." });
}
