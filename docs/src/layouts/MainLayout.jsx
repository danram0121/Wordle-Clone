import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <Navbar />
        <div className="h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
