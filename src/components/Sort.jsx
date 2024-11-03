import { useState } from 'react';
import useProductContext from '../hooks/useProductContext';

export default function Sort() {
    const [isOpen, setIsOpen] = useState(false);
    const { dispatch, state } = useProductContext();

    const toggleDropdown = () =>
    {
        setIsOpen( ( prev ) => !prev );
    };

    const handleSortChange = (sort) => {
        dispatch({ type: 'SORT', payload: sort });
        // setIsOpen(false);
    };

    const handleClickOutside = ( event ) =>
    {
        if ( !event.target.closest( '.dropdown' ) )
        {
            setIsOpen( false );
        }
    };

    const handleButtonClick = ( ) =>
    {
        toggleDropdown();
        document.addEventListener( 'mousedown', handleClickOutside );
    };

    const handleOptionClick = ( sort ) =>
    {
        handleSortChange( sort );
        document.removeEventListener( 'mousedown', handleClickOutside );
    };

    // console.log('sorting')

    return (
        <div className="relative inline-block text-left dropdown">
            <div>
                <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="menu-button"
                    aria-expanded={ isOpen }
                    aria-haspopup="true"
                    onClick={ handleButtonClick }
                >
                    Sort
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Sort Options */ }
            { isOpen && (
                <div
                    className="absolute z-10  hover:z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <span
                            onClick={ () => handleOptionClick( 'Low to High' ) }
                            className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 transition-all ${state.sortData === "Low to High" && "bg-teal-600 text-white"}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                        >
                            Low to High
                        </span>
                        <span
                            onClick={ () => handleOptionClick( 'High to Low' ) }
                            className={`cursor-pointer block px-4 py-2 text-sm text-gray-700 transition-all ${state.sortData === "High to Low" && "bg-teal-600 text-white"}`}
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-1"
                        >
                            High to Low
                        </span>
                    </div>
                </div>
            ) }
        </div>
    );
};