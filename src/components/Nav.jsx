/* eslint-disable react/prop-types */
import React from 'react';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Drawer from './Drawer';

export default function Nav({domRef}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [ active, setActive ] = React.useState( '' );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleActive = (item) => {
        setActive(item);
    };

    const handleNavigationLinks = ( item ) =>
    {
        toggleActive( item );
    
        document.getElementById( "store" )?.scrollIntoView( { behavior: 'smooth' } );

        if ( [ 'Men', 'Women' ].includes( item ) )
        {
            toast.info( `Please select ${item}'s product option at the category menu to get specific products`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            } );
        }

        if ( domRef.current && [ 'Men', 'Women' ].includes( item ) )
        {
            // domRef.current.scrollIntoView( { behavior: 'smooth' } );
            const intervalId = setInterval( () =>
            {
                domRef.current.classList.toggle( "bg-rose-600" );
                domRef.current.classList.toggle( "text-white" );
                domRef.current.classList.toggle( "scale-110" );
            }, 100 );

            setTimeout( () =>
            {
                clearInterval( intervalId );
                domRef.current.classList.remove( "bg-rose-600", "text-white", "scale-110" );
            }, 3000 );
        }
    };


    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            <p className="flex h-10 items-center justify-center bg-teal-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                Get free delivery on orders over $100
            </p>

            <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/* Mobile menu toggle */ }
                        <button onClick={ toggleMenu } type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
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
                        
                        <Drawer isMenuOpen={ isMenuOpen } toggleMenu={ toggleMenu } />

                        {/* Logo */ }
                        <div className="ml-4 flex lg:ml-0">
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="logo.svg" alt="Logo" />
                            </a>
                        </div>

                        {/* Navigation items with active state */ }
                        <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                            <div className="flex h-full space-x-8">
                                { [ "Women", "Men", "Stores" ].map( ( item ) => (
                                    <button
                                        key={ item }
                                        type="button"
                                        onClick={ () => handleNavigationLinks( item ) }
                                        className={ `relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out ${active === item
                                            ? "border-b-2 border-teal-600 text-teal-600"
                                            : "border-b-2 border-transparent text-gray-700 hover:text-gray-800"
                                            }` }
                                    >
                                        { item }
                                    </button>
                                ) ) }
                                <button
                                    onClick={ () =>
                                    {
                                        toggleActive( 'Company' );
                                        document.getElementById( "header" ).scrollIntoView( { behavior: 'smooth' } );
                                    } }
                                    className={ `relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out ${active === "Company"
                                        ? "border-b-2 border-teal-600 text-teal-600"
                                        : "border-b-2 border-transparent text-gray-700 hover:text-gray-800"
                                        }` }
                                >
                                    Company
                                </button>
                            </div>
                        </div>

                        {/* Account and Currency options */ }
                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:items-center lg:space-x-6">
                                <button onClick={ () => toggleActive( "Sign in" ) } className={ `relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out ${active === "Sign in"
                                    ? "border-b-2 border-teal-600 text-teal-600"
                                    : "border-b-2 border-transparent text-gray-700 hover:text-gray-800"
                                    }` }>
                                    Sign in
                                </button>
                                {/* <span className="h-6 w-px bg-gray-200" aria-hidden="true">
                                    
                                </span> */}
                                <button onClick={ () => toggleActive( "Create account" ) } className={ `relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out ${active === "Create account"
                                    ? "border-b-2 border-teal-600 text-teal-600"
                                    : "border-b-2 border-transparent text-gray-700 hover:text-gray-800"
                                    }` }>
                                    Create account
                                </button>
                            </div>
                            <div className="hidden lg:ml-8 lg:flex">
                                <button onClick={ () => toggleActive( "Currency" ) } className={ `relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out ${active === "Currency"
                                    ? "border-b-2 border-teal-600 text-teal-600"
                                    : "border-b-2 border-transparent text-gray-700 hover:text-gray-800"
                                    }` }>
                                    CAD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};