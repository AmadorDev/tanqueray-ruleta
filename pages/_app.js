import "../sass/index.scss";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import "../styles/Home.module.css";
import AuthState from "../context/auth/authState";

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <Component {...pageProps} />
    </AuthState>
  );
}

export default MyApp;
