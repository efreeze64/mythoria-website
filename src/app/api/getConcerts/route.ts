import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "Concerts"));

    const concert = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(concert);
  } catch (error) {
    console.log("Error fetching concerts ", error);
  }
}
