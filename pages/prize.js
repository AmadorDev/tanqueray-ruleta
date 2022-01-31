import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";

export default function prize() {
  const { winner } = useContext(AuthContext);
  console.log(winner);
  return (
    <div className="bg_prize">
      <div className="row justify-content-center d-flex align-items-center row_add">
        <div className="col-6 d-flex justify-content-center text-center">
          {" "}
          <img src={winner.url} className="img_prize "></img>
        </div>
        <div className="col-6 text-center prize-text">
          <p className="t_title">{winner.title}</p>
          <p className="t_subtitle"> {winner.quality} {winner.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
