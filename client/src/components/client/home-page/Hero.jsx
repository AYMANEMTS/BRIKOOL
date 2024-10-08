import React from 'react';
import workerspng from "../../../images/workers.png";

function Hero() {
    return (
        <section className="bg-blue-600 rounded-lg text-white py-12 my-6">
            <div className="container mx-auto flex flex-col sm:flex-row items-center px-6">
                <div className="sm:w-1/2 mb-6 sm:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explorez Nos Meilleures Offres</h2>
                    <p className="text-lg sm:text-xl mb-6">Découvrez des articles uniques, des offres exclusives, et
                        bien plus encore. Soyez au premier rang des nouveautés.</p>
                    <a href="#"
                       className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition">Voir
                        Nos Offres</a>
                </div>
                <div className="sm:w-1/2">
                    <img src={workerspng} alt="Hero Image"
                         className="rounded-lg shadow-lg "/>
                </div>
            </div>
        </section>
    );
}

export default Hero;