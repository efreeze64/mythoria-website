"use client";
import React, { useState } from "react";
import { Timestamp } from "firebase/firestore";

import "./admin.css";

import Footer from "@/assets/components/footer";
import Navbar from "@/assets/components/navbar";

const convertToFirestoreTimestamp = (datetime) => {
  const jsDate = new Date(datetime);
  return Timestamp.fromDate(jsDate);
};

//TODO: Implement Login
//TODO: Implement creating new Concert
//TODO: Implement deleting concert

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bands, setBands] = useState<string[]>([""]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/postLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("res: ", res);

      const data = await res.json();

      console.log("data: ", data);

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setIsLoggedIn(true);
    } catch (error) {
      console.log("Login failed: ", error);
    }
  };

  const handlePostConcert = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const location = form.location.value;
    const datetime = form.date.value;
    const link = form.link.value || "";
    const tickets = form.tickets.value || "";

    const bandsWithMythoria = [
      "Mythoria",
      ...bands.filter((band) => band.trim() !== ""),
    ];

    const date = convertToFirestoreTimestamp(datetime);

    const concertData = {
      location,
      date,
      bands: bandsWithMythoria,
      link,
      tickets,
    };

    try {
      const res = await fetch("/api/postConcert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(concertData),
      });

      if (!res.ok) {
        throw new Error("Failed to add concert");
      }

      const result = await res.json();
      console.log("Concert added successfully with ID:", result.id);
      alert("Concert added successfully!");
    } catch (error) {
      console.error("Error adding concert:", error);
      alert("Failed to add concert. Please try again.");
    }
  };

  const handleAddBand = () => {
    setBands([...bands, ""]);
  };

  const handleRemoveBand = (index: number) => {
    setBands(bands.filter((_, i) => i !== index));
  };

  const handleChangeBand = (index: number, value: string) => {
    const newBands = [...bands];
    newBands[index] = value;
    setBands(newBands);
  };

  return (
    <>
      <Navbar />
      <div className="center-wrapper">
        {!isLoggedIn ? <h1>New concert entry</h1> : <h1>Login</h1>}
        {isLoggedIn ? (
          <div className="container">
            <form className="email-form" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">LOGIN</button>
            </form>
          </div>
        ) : (
          <div className="container">
            <form className="concert-entry" onSubmit={handlePostConcert}>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" required />
              <label htmlFor="bands">Bands</label>
              <input
                type="text"
                value="Mythoria"
                disabled // Make Mythoria read-only
                style={{ fontWeight: "bold", color: "gray" }}
              />
              {bands.map((band, index) => (
                <div key={index} className="band-input">
                  <input
                    type="text"
                    value={band}
                    onChange={(e) => handleChangeBand(index, e.target.value)}
                    placeholder={`Band ${index + 2}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveBand(index)}
                    disabled={bands.length === 1} // Prevent removing the last input
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddBand}>
                Add Band
              </button>
              <label htmlFor="date">Date</label>
              <input type="datetime-local" id="date" name="date" required />
              <label htmlFor="link">(Optional) link to Facebook event</label>
              <input type="url" id="link" name="link" />
              <label htmlFor="tickets">(Optional) link to tickets</label>
              <input type="url" id="tickets" name="tickets" />
              <button>Submit</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
