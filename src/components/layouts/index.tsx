import { Outlet } from "react-router-dom";
import Navbar from ".././sections/Header";
// import Footer from ".././sections/Footer";
import "./style.scss"
import { LoadingProvider } from "../../context/LoadingContext";


const Layouts = () => {
  return (
    <>
      <LoadingProvider>
        <Navbar />
        <main className="container xl mx-auto">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </LoadingProvider>
    </>
  );
};

export default Layouts;
