import { useRouter } from "next/router";
import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";

export default function ruleta() {
  const { addPremio, premios, setWinner } = useContext(AuthContext);
  console.log(premios);
  const router = useRouter();

  const maxale = parseInt(premios.length) - 1;

  function girar() {
    Splay();
    let rand = Math.floor(Math.random() * (maxale - 0)) + 0;
    calcular(premios[rand]);
  }

  function calcular(item) {
    let ruleta = document.getElementById("ruleta");
    let valor = item.value / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;

    ruleta.style.transform = "rotate(" + parseInt(item.value) + "deg)";
    console.log(item.value);
    console.log(valor);
    setTimeout(() => {
      setWinner(item);
      renderResult();
    }, 5000);
  }
  function renderResult() {
    setTimeout(() => {
      router.push("/prize");
    }, 1000);
  }
  function Splay() {
    document.getElementById("rsonido").play();
  }

  return (

    <div className="container-fluid p-0 m-0 ">
      <div className="row bg-dark m-0 p-0">
        <div className="col-12 p-0 m-0">
          <img src="/images/bg_prize.png" className="img-fluid img_class" />
        </div>
      </div>
      <audio id="songclick" controls className="sonido">
          <source type="audio/mp3" src="/sonido/click.mp3"></source>
        </audio>
        <div className="d-absolute">
        <div className="col-8 text-center d_ruleta">
           <img
            src="/images/ruleta_d.png"
            className="img_ruleta ruleta"
             onClick={girar}
             id="ruleta"
           ></img>
        </div>
        </div>
           <div>
         <div>
           <img src="/images/gancho.png" className="gancho"></img>
         </div>
       </div>
       <audio id="rsonido" controls className="sonido">
        <source type="audio/mp3" src="/sonido/ruletad.mp3"></source>
      </audio>
    </div>


    // <div className="bg_ruleta">
    //   <div className="row justify-content-center d-flex align-items-center row_add">
    //     <div className="col-8 text-center">
    //       <img
    //         src="/images/ruleta_d.png"
    //         className="img_ruleta ruleta"
    //         onClick={girar}
    //         id="ruleta"
    //       ></img>
    //     </div>
    //   </div>
    //   <div>
    //     <div>
    //       <img src="/images/gancho.png" className="gancho"></img>
    //     </div>
    //   </div>
    //   <audio id="rsonido" controls className="sonido">
    //     <source type="audio/mp3" src="/sonido/ruletad.mp3"></source>
    //   </audio>
    // </div>
  );
}
