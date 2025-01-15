import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSeatSelected } from "./slice";
import "./BaiTapBookingTicket.css";

export default function Seat({ seat }) {
  const [isChoosing, setIsChoosing] = useState(false);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        setIsChoosing(!isChoosing);
        dispatch(setSeatSelected(seat));
      }}
      disabled={seat.daDat}
      className={`ghe ${seat.daDat ? "gheDuocChon" : ""} ${
        isChoosing ? "gheDangChon" : ""
      } `}
    >
      <span>{seat.soGhe}</span>
    </button>
  );
}
