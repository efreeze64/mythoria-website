import { NextResponse } from "next/server";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export async function POST(req: Request) {
  try {
    const concertData = await req.json();
    const docRef = await addDoc(collection(db, "Concerts"), concertData);

    return NextResponse.json({ success: true, id: docRef.id }, { status: 200 });
  } catch (error) {
    console.error("Error uploading concert: ", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
