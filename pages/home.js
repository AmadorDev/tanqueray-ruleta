import { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import AuthContext from "../context/auth/authContext";
import Head from "next/head";

const home = () => {
  const router = useRouter();
  const { tienda, setTienda, premios } = useContext(AuthContext);

  const [txt_tienda, setTxt_tienda] = useState("");

  const select = useRef(null);
  function renderRuleta() {
    document.getElementById("songclick").play();
    setTimeout(() => {
      router.push("ruleta");
    }, 500);
  }

  useEffect(() => {
    if (tienda === null) {
      document.getElementById("modal").style.display = "flex";
    } else {
      document.getElementById("modal").style.display = "none";
    }

    return () => {};
  }, [tienda]);

  function addTienda() {
    if (txt_tienda != "") {
      document.getElementById("modal").style.display = "none";
      setTienda(txt_tienda);
    } else {
      select.current.focus();
      return false;
    }
  }

  return (
    <>
      <Head>
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        /> */}
      </Head>
      <div className="container-fluid p-0 m-0 ">
        <div className="row bg-dark m-0 p-0" onClick={renderRuleta}>
          <div className="col-12 p-0 m-0">
            <img src="/images/home.png" className="img-fluid img_class" />
          </div>
        </div>

        <div className="modal" id="modal">
          <div className="modal-content">
            <div className="row justify-content-center align-items-center p-3">
              <div className="col-8">
                {" "}
                <label className="form-label">Seleccionar Tienda</label>
                <select
                  ref={select}
                  className="form-control"
                  onChange={(e) => setTxt_tienda(e.target.value)}
                  value={txt_tienda}
                >
                  <option value=""></option>
                  <option value="A">V.Benavides</option>
                  <option value="B">V.Asia</option>
                  <option value="C">D.Dasso</option>
                  <option value="D">P.Cortijo</option>
                  <option value="E">P.CInca</option>
                </select>
                <button
                  className="btn btn-per mt-2"
                  type="button"
                  onClick={addTienda}
                >
                  INGRESAR
                </button>
              </div>
            </div>
          </div>
        </div>

        <audio id="songclick" controls className="sonido">
          <source type="audio/mp3" src="/sonido/click.mp3"></source>
        </audio>
      </div>
    </>
  );
};
export default home;
