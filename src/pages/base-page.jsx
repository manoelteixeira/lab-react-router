import { Outlet } from "react-router-dom";
// import Nav from "./components/common/Nav";
// import Footer from "./components/common/Footer";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

export default function BasePage() {
  return (
    <div className="wrapper">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
