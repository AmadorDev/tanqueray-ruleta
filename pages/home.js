import { useRouter } from "next/router";
import Image from "next/image";

import { useContext } from "react";
import AuthContext from "../context/auth/authContext";

const home = () => {
  const router = useRouter();
  const { premios } = useContext(AuthContext);

  function renderRuleta() {
    router.push("ruleta");
  }
  return (
    <div className="container-fluid p-0 m-0 ">
      <div className="row bg-dark m-0 p-0" onClick={renderRuleta}>
        <div className="col-12 p-0 m-0">
          <img src="/images/home.png" className="img-fluid img_class" />
        </div>
      </div>
    </div>
  );
};
export default home;
