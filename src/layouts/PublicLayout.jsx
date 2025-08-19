import { Outlet } from "react-router-dom";
import Navbar from "../components/organisms/Navbar/Navbar";
import Footer from "../components/organisms/Footer/Footer";

const PublicLayout = () => {
    return (
    <>
        <Navbar />
        <main className="layout">
            <Outlet />
        </main>
        <Footer />
    </>
    );
}

export default PublicLayout;