/* eslint-disable react/prop-types */
import React from 'react';

export default function Drawer({ isMenuOpen, toggleMenu, handleNavigation }) {
    const [active, setActive] = React.useState('');

    const handleDrawer = ( item ) =>
    {
        handleNavigation( item );
        setActive( item );
        toggleMenu();
    };

    return (
        <div
            className={ `absolute top-0 left-0 h-screen w-[70%] bg-teal-600 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out lg:hidden` }
            aria-hidden={ !isMenuOpen }
            tabIndex={ isMenuOpen ? 0 : -1 }
        >
            <button
                onClick={ toggleMenu }
                className="p-4 text-rose-600 font-semibold text-md"
                aria-label="Close menu"
            >
                X (Close)
            </button>

            <div className="mt-6 space-y-6 px-6">
                {/* Navigation Links */ }
                <div className="space-y-4 text-white font-medium text-md">
                    { [ 'Women', 'Men', 'Stores' ].map( ( item ) => (
                        <button
                            key={ item }
                            type="button"
                            className={ `block w-full text-left hover:text-teal-300 ${active === item ? 'text-teal-300' : ''
                                }` }
                            onClick={ () => handleDrawer( item ) }
                        >
                            { item }
                        </button>
                    ) ) }
                    <button
                        onClick={ () =>
                        {
                            handleDrawer( "Company" )
                            document.getElementById( "header" ).scrollIntoView( { behavior: 'smooth' } );
                        } }
                        className={ `block w-full text-left hover:text-teal-300 ${active === "Company" ? 'text-teal-300' : ''
                            }` }
                    >
                        Company
                    </button>
                </div>

                {/* Divider */ }
                <div className="border-t border-teal-300 pt-4"></div>

                {/* Account Links */ }
                <div className="space-y-4 text-white font-medium text-md">
                    { [ 'Sign in', 'Create account' ].map( ( link ) => (
                        <a
                            key={ link }
                            href="#"
                            className="block w-full text-left hover:text-teal-300"
                            onClick={ toggleMenu }
                        >
                            { link }
                        </a>
                    ) ) }
                </div>

                {/* Currency Selector */ }
                <div className="border-t border-teal-300 pt-4">
                    <a href="#" className="flex items-center text-white hover:text-teal-300">
                        <span className="text-md font-medium">CAD</span>
                        <span className="sr-only">, change currency</span>
                    </a>
                </div>
            </div>
        </div>
    );
}