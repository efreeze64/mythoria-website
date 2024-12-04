import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export async function POST(request) {
  const { email, password } = await request.json();

  console.log("Email:", email);
  console.log("Password:", password);

  if (!email || !password) {
    return NextResponse.json({ error: "Email and Password are required." });
  }

  try {
    const userCredentials = signInWithEmailAndPassword(auth, email, password);
    return NextResponse.json(userCredentials);
  } catch (error) {
    console.log("Error login in: ", error);
    return NextResponse.json({ error: error.message });
  }
}
