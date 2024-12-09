import { NextResponse } from "next/server";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      throw new Error("Concert ID is required.");
    }

    await deleteDoc(doc(db, "Concerts", id));
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting concert: ", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
