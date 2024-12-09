import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return NextResponse.json(
      { uid: user.uid, email: user.email },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
