import "../styles/globals.css";

import MobileSidebar from "../components/MobileSidebar";
import NavbarSuperior from "../components/NavbarSuperior";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavbarSuperior />
      <MobileSidebar />

      <main className="pt-5 pb-5">
        <Component {...pageProps} />
      </main>
    </>
  );
}