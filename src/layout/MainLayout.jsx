import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";   // 👈 make sure path is correct

function MainLayout() {
    return (
        <div style={{ display: "flex" }}>

            <Sidebar />   {/* 👈 DON'T remove this */}

            <div style={{ flex: 1, padding: "20px" }}>
                <Outlet />   {/* 👈 THIS is required */}
            </div>

        </div>
    );
}

export default MainLayout;

