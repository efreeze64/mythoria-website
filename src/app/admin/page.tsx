"use client";
import React, { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

import "@/assets/styling/global-style.css";
import "./admin.css";

import Navbar from "@/assets/components/navbar";
import AltConcertEntry from "./alt-concert-entry";

import CryingEmoji from "@/assets/img/dregun_crying.png";
import Close from "@/assets/img/close_30dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import Logout from "@/assets/img/logout.png";

import { Concert } from "@/types";

const convertToFirestoreTimestamp = (datetime) => {
  const jsDate = new Date(datetime);
  return Timestamp.fromDate(jsDate);
};

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [bands, setBands] = useState<string[]>([""]);
  const [responseMessage, setResponseMessage] = useState("");

  const [data, setData] = useState<Concert[] | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [outDatedConcerts, setOutDatedConcerts] = useState(false);

  useEffect(() => {
    fetch("/api/getConcerts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const showOutDatedConcerts = () => {
    setOutDatedConcerts(!outDatedConcerts);
  };

  const filterUpcomingConcerts = () => {
    if (!data) return [];
    const today = new Date();
    return data
      .filter((concert) => {
        // Filter concerts that are not upcomming
        if (!concert.date || !concert.date.seconds) return false;
        const concertDate = new Date(concert.date.seconds * 1000);
        return concertDate >= today;
      })
      .sort((a, b) => {
        // Sort by closes date
        const dateA = new Date(a.date.seconds * 1000);
        const dateB = new Date(b.date.seconds * 1000);
        return dateA.getTime() - dateB.getTime();
      });
  };

  const filterEarlierConcerts = () => {
    if (!data) return [];
    const today = new Date();
    return data
      .filter((concert) => {
        // Filter concerts that are not upcomming
        if (!concert.date || !concert.date.seconds) return false;
        const concertDate = new Date(concert.date.seconds * 1000);
        return concertDate < today;
      })
      .sort((a, b) => {
        // Sort by closest date
        const dateA = new Date(a.date.seconds * 1000);
        const dateB = new Date(b.date.seconds * 1000);
        return dateA.getTime() - dateB.getTime();
      });
  };

  const upcomingConcerts = filterUpcomingConcerts();
  const earlierConcerts = filterEarlierConcerts();

  const signInUser = async (email, password) => {
    try {
      const response = await fetch("/api/postLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const data = await response.json();
      if (data.uid) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInUser(email, password);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      location.reload();
    } catch (error) {
      console.error("Error login out: ", error.message);
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
      const response = await fetch("/api/postConcert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(concertData),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage(`Concert uploaded with ID: ${result.id}`);

        const newConcert = { ...concertData, id: result.id };
        setData((prevData) =>
          prevData ? [...prevData, newConcert] : [newConcert]
        );

        form.reset();
        setBands([""]);
      } else {
        setResponseMessage(`Error uploading concert: ${result.error}`);
      }
    } catch (error) {
      setResponseMessage("An error occurred: " + error.message);
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

  const handleDeleteConcert = async (id: string) => {
    try {
      const response = await fetch("/api/postDeleteConcert", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const result = await response.json();
      if (result.success) {
        setData((prevData) =>
          prevData ? prevData.filter((concert) => concert.id !== id) : null
        );
      } else {
        console.error("Error deleting concert:", result.error);
      }
    } catch (error) {
      console.error("An error occurred while deleting the concert:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="center-wrapper">
        {!isLoggedIn ? <h1>Login</h1> : <h1>Admin</h1>}
        {!isLoggedIn ? (
          <div className="container">
            <form className="concert-entry" id="smaller" onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className="submit-button" type="submit">
                LOGIN
              </button>
            </form>
          </div>
        ) : (
          <div className="row">
            <div className="container" id="scroll">
              <form className="concert-entry" onSubmit={handlePostConcert}>
                <h2>Concert Details</h2>
                {responseMessage && (
                  <p className="response-message">{responseMessage}</p>
                )}
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" name="location" required />
                </div>
                <div className="form-group">
                  <label htmlFor="bands">Bands</label>
                  <input
                    type="text"
                    value="Mythoria"
                    disabled
                    className="mythoria-input"
                  />
                  {bands.map((band, index) => (
                    <div key={index} className="band-input">
                      <input
                        type="text"
                        value={band}
                        onChange={(e) =>
                          handleChangeBand(index, e.target.value)
                        }
                        placeholder={`Band ${index + 2}`}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveBand(index)}
                        disabled={bands.length === 1}
                        className="remove-button"
                      >
                        <img src={Close.src} />
                      </button>
                    </div>
                  ))}
                  <div className="button">
                    <button
                      type="button"
                      onClick={handleAddBand}
                      className="add-button"
                    >
                      Add Band
                    </button>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input type="datetime-local" id="date" name="date" required />
                </div>
                <div className="form-group">
                  <label htmlFor="link">
                    Link to Facebook event
                    <br />
                    (Optional)
                  </label>
                  <input type="url" id="link" name="link" />
                </div>
                <div className="form-group">
                  <label htmlFor="tickets">
                    Link to tickets
                    <br />
                    (Optional)
                  </label>
                  <input type="url" id="tickets" name="tickets" />
                </div>
                <div className="button">
                  <button type="submit" className="submit-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="row-middle-line"></div> */}
            <div className="container" id="list">
              {isLoading ? (
                <div className="container">
                  <h2>Concerts</h2>
                  <p>Fetching all upcomming concerts</p>
                </div>
              ) : upcomingConcerts.length > 0 ? (
                <>
                  <div className="container" id="column">
                    <h2>Concerts</h2>
                    {upcomingConcerts.map((concert, index) => (
                      <AltConcertEntry
                        key={index}
                        concert={concert}
                        onDelete={handleDeleteConcert}
                      />
                    ))}
                  </div>
                  <p onClick={showOutDatedConcerts} className="expandable">
                    Show Earlier Concerts
                  </p>
                  {outDatedConcerts ? (
                    <div className="container" id="column">
                      {earlierConcerts.map((concert, index) => (
                        <AltConcertEntry
                          key={index}
                          concert={concert}
                          onDelete={handleDeleteConcert}
                        />
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <div className="container" id="empty">
                  <h2>Concerts</h2>
                  <p>There are no upcoming concerts</p>
                  <img src={CryingEmoji.src} alt="crying dragon" />
                </div>
              )}
            </div>
          </div>
        )}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout">
            <img src={Logout.src} />
          </button>
        ) : (
          <></>
        )}
        <div className="spacing"></div>
      </div>
    </>
  );
};

export default Admin;
