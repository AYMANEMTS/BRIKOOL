import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ClientLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow mt-[8rem]"> {/* Add margin top to accommodate fixed header */}
                <div className="container mx-auto px-4">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default ClientLayout;