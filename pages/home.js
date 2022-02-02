import { useContext,useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";


import AuthContext from "../context/auth/authContext";

const home = () => {
  const router = useRouter();
  const { tienda,setTienda } = useContext(AuthContext);

  console.log("home tienda",tienda)

  function renderRuleta() {
    document.getElementById("songclick").play();
    setTimeout(() => {
      router.push("ruleta");
    }, 500);
  }

  useEffect(() => {
    // document.getElementById("modal").style.display = 'flex'
    // if(tienda === null){
    //   document.getElementById("modal").style.display = 'flex'
    // }
    
    return () => {
      
    };
  }, [tienda]);
  
  // function addTienda(){
  //   document.getElementById("modal").style.display = 'none'
  //   let txt = document.getElementById("txt_tienda")
  //   setTienda(txt.value)
    
  // }

  return (
    <div className="container-fluid p-0 m-0 ">
      <div className="row bg-dark m-0 p-0" onClick={renderRuleta}>
        <div className="col-12 p-0 m-0">
          <img src="/images/home.png" className="img-fluid img_class" />
        </div>
      </div>
     
        {/* <div className="modal" id="modal">
          <div className="modal-content">
            <label className="form-label">Ingresar nombre de la tienda</label>
            <input className="form-control" id="txt_tienda"></input>
            <button className="btn btn-primary mt-1" onClick={addTienda}>GUARDAR</button>
            
          </div>
        </div> */}
     

      <audio id="songclick" controls className="sonido">
        <source type="audio/mp3" src="/sonido/click.mp3"></source>
      </audio>
    </div>
  );
};
export default home;
