/* eslint-disable react/prop-types */
// import React from 'react';
export default function Drawer({ isMenuOpen, toggleMenu }) {
    return (
        <div
            className={`absolute top-0 left-0 h-screen w-[70%] bg-teal-600 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                transition-transform duration-300 ease-in-out lg:hidden`}
        >
            <button
                onClick={toggleMenu}
                className="p-4 text-rose-600 font-semibold text-md"
            >
                X (Close)
            </button>

            <div className="mt-6 space-y-6 px-6">
                {/*  Navigation Links */}
                <div className="space-y-4 text-white font-medium text-md">
                    <button
                        type="button"
                        className="block w-full text-left hover:text-teal-300"
                        onClick={toggleMenu}
                    >
                        Women
                    </button>
                    <button
                        type="button"
                        className="block w-full text-left hover:text-teal-300"
                        onClick={toggleMenu}
                    >
                        Men
                    </button>
                    <a href="#" className="block w-full text-left hover:text-teal-300" onClick={toggleMenu}>Company</a>
                    <a href="#" className="block w-full text-left hover:text-teal-300" onClick={toggleMenu}>Stores</a>
                </div>

                {/* Divider */}
                <div className="border-t border-teal-300 pt-4"></div>

                {/* Account Links */}
                <div className="space-y-4 text-white font-medium text-md">
                    <a href="#" className="block w-full text-left hover:text-teal-300" onClick={toggleMenu}>Sign in</a>
                    <a href="#" className="block w-full text-left hover:text-teal-300" onClick={toggleMenu}>Create account</a>
                </div>

                {/* Currency Selector */}
                <div className="border-t border-teal-300 pt-4">
                    <a href="#" className="flex items-center text-white hover:text-teal-300">
                        {/* <img
                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                            alt="Canada flag"
                            className="h-auto w-5 mr-3"
                        /> */}
                        <span className="text-md font-medium">CAD</span>
                        <span className="sr-only">, change currency</span>
                    </a>
                </div>
            </div>
        </div>
    );
};