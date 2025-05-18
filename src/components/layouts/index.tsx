import { Outlet } from "react-router-dom";
import Navbar from ".././sections/Header";
// import Footer from ".././sections/Footer";
import "./style.scss"


const Layouts = () => {
  return (
    <>
      <Navbar />
      <main className="container xl mx-auto">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
