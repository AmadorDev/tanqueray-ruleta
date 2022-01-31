import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "../context/auth/authContext";

export default function prize() {
  const { winner } = useContext(AuthContext);
  const [song, setsong] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (winner.quality != "") {
      setsong("/sonido/winnerd.mp3");
    } else {
      setsong("/sonido/losserd.mp3");
    }
    play();
    function play() {
      document.getElementById("song").play();
      setTimeout(()=> {
        router.push("/");
      },10000)
    }
  });
  return (
    <div className="bg_ruleta">
      <div className="row justify-content-center d-flex align-items-center row_add">
        <div className="col-6 d-flex justify-content-center text-center">
          {" "}
          <img src={winner.url} className="img_prize "></img>
        </div>
        <div className="col-6 text-center prize-text">
          <p className="t_title">{winner.title}</p>
          <p className="t_subtitle">
            {" "}
            {winner.quality} {winner.subtitle}
          </p>
        </div>
        <audio id="song" controls className="sonido">
          <source type="audio/mp3" src={song}></source>
        </audio>
      </div>
    </div>
  );
}
