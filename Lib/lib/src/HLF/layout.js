import { Outlet } from "react-router-dom";
import Navbar from "./navBar";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />   
      {/* rafce */}

      <Outlet />

      <Footer />
    </>
  );
}