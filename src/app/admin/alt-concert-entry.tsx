"use client";
import React from "react";
import Link from "next/link";
import "@/assets/styling/global-style.css";
import "./alt-concert-entry.css";

import { Concert } from "@/types";

import Facebook from "@/assets/img/Facebook_Logo_Secondary.png";
import Ticket from "@/assets/img/local_activity_500dp_E8EAED_FILL0_wght400_GRAD0_opsz48.png";
import Delete from "@/assets/img/trashcan.png";

type ConcertInfo = {
  concert: Concert;
  onDelete: (id: string) => void;
};

const AltConcertEntry: React.FC<ConcertInfo> = ({ concert, onDelete }) => {
  const { seconds } = concert.date;

  const date = new Date(seconds * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDelete = () => {
    if (
      confirm(
        `Are you sure you want to delete the concert at ${concert.location}?`
      )
    ) {
      onDelete(concert.id);
    }
  };

  return (
    <div className="column">
      <div className="inner-column" id="left">
        <p>{formattedDate}</p>
        <p>{formattedTime}</p>
      </div>
      <div className="inner-column" id="middle">
        <p className="location">{concert.location}</p>
        <p>{concert.bands.join(", ")}</p>
      </div>
      <div className="inner-column" id="right">
        {concert.tickets && (
          <Link href={concert.tickets} target="_blank">
            <img src={Ticket.src} className="link" id="bigger" />
          </Link>
        )}
        {concert.link && (
          <Link href={concert.link} target="_blank">
            <img src={Facebook.src} className="link" />
          </Link>
        )}
      </div>
      <div className="inner-column" id="second-right">
        <img src={Delete.src} className="delete" onClick={handleDelete} />
      </div>
    </div>
  );
};

export default AltConcertEntry;
