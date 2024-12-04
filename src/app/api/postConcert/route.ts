import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/firebase";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, location, date, bands, link, tickets } = req.body;

      // Add the data to Firestore
      const docRef = await addDoc(collection(db, "Concerts"), {
        name,
        location,
        date: Timestamp.fromDate(new Date(date)), // Convert date to Firestore format
        bands,
        link,
        tickets,
      });

      res.status(201).json({ id: docRef.id }); // Success response
    } catch (error) {
      console.error("Error adding document: ", error);
      res.status(500).json({ error: "Failed to add concert" });
    }
  } else {
    // Handle unsupported methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
