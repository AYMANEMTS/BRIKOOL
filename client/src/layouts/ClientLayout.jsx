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
            <main className="flex-grow mt-[8rem] w-full">
                <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-screen-xl">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}



export default ClientLayout;