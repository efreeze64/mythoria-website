"use client";

import React, { useState, useEffect } from "react";

import "@/assets/styling/global-style.css";
import "./calender.css";

import Footer from "@/assets/components/footer";
import Navbar from "@/assets/components/navbar";
import ConcertEntry from "@/assets/components/concert-entry";

import CryingEmoji from "@/assets/img/dregun_crying.png";
import { Concert } from "@/types";

const Calender = () => {
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

  return (
    <>
      <Navbar />
      <div className="center-wrapper">
        <div className="container">
          <h1>Concerts</h1>
        </div>
        {isLoading ? (
          <div className="container">
            <p>Fetching all upcomming concerts</p>
          </div>
        ) : upcomingConcerts.length > 0 ? (
          <>
            <div className="container" id="column">
              {upcomingConcerts.map((concert, index) => (
                <ConcertEntry key={index} concert={concert} />
              ))}
            </div>
            <p onClick={showOutDatedConcerts} className="expandable">
              Show Earlier Concerts
            </p>
            {!outDatedConcerts ? (
              <></>
            ) : earlierConcerts.length > 0 ? (
              <div className="container" id="column">
                {earlierConcerts.map((concert, index) => (
                  <ConcertEntry key={index} concert={concert} />
                ))}
              </div>
            ) : (
              <div className="container" id="empty">
                <p>There are no eariler concerts</p>
                <img src={CryingEmoji.src} alt="crying dragon" />
              </div>
            )}
          </>
        ) : (
          <div className="container" id="empty">
            <p>There are no upcoming concerts</p>
            <img src={CryingEmoji.src} alt="crying dragon" />
          </div>
        )}
        <div className="spacing"></div>
      </div>
      <Footer />
    </>
  );
};
export default Calender;
