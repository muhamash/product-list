 
import React from 'react';

export default function Nav ()
{
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50  bg-white">
            <p className="flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                Get free delivery on orders over $100
            </p>

            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */ }
                        <button onClick={ toggleMenu } type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                        <div
                            className={ `absolute top-0 left-0 h-screen w-[80%] bg-cyan-600 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                                } transition-transform duration-300 ease-in-out lg:hidden` }
                        >
                            <button
                                onClick={ toggleMenu }
                                className="p-4 text-black-600"
                            >
                                X(close)
                            </button>
                            <p className="p-2 font-mono text-base text-yellow-500">Sorry there is no content!! this website is not appearing with full form</p>
                        </div>

                        {/* <!-- Logo --> */ }
                        <div className="ml-4 flex lg:ml-0">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="logo.svg" alt="" />
                            </a>
                        </div>

                        {/* <!-- Flyout menus --> */ }
                        <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                                <div className="flex">
                                    <div className="relative flex">
                                        {/* <!-- Item active: "border-teal-600 text-teal-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */ }
                                        <button
                                            type="button"
                                            className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                                            aria-expanded="false"
                                        >
                                            Women
                                        </button>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="relative flex">
                                        {/* <!-- Item active: "border-teal-600 text-teal-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */ }
                                        <button
                                            type="button"
                                            className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"
                                            aria-expanded="false"
                                        >
                                            Men
                                        </button>
                                    </div>
                                </div>

                                <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>
                                <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
                            </div>
                        </div>

                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                                <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                                <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
                            </div>

                            <div className="hidden lg:ml-8 lg:flex">
                                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                                    <img
                                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                                        alt=""
                                        className="block h-auto w-5 flex-shrink-0"
                                    />
                                    <span className="ml-3 block text-sm font-medium">CAD</span>
                                    <span className="sr-only">, change currency</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}