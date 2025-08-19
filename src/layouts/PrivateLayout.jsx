import { Outlet } from "react-router-dom";
import PlatFooter from "../components/organisms/PlatFooter";
import PlatNavbar from "../components/organisms/PlatNavbar";

const PrivateLayout = () => {
    return (
        <div className="layout">
            <PlatNavbar />
            <Outlet />
            <PlatFooter />
        </div>
    );
}

export default PrivateLayout;