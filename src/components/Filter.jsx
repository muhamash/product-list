/* eslint-disable react/display-name */
import { forwardRef, useState } from 'react';
import { useProduct } from '../hooks/useProduct';
import useProductContext from '../hooks/useProductContext';

const Filter = forwardRef( (props, ref) => {
    const [ isOpen, setIsOpen ] = useState( false );
    const [ selectedOption, setSelectedOption ] = useState( null );
    const { dispatch } = useProductContext();
    const { data: categories, isLoading, error } = useProduct( true );

    const toggleDropdown = () =>
    {
        setIsOpen( ( prev ) => !prev );
        if ( !isOpen )
        {
            document.addEventListener( 'mousedown', handleClickOutside );
        } else
        {
            document.removeEventListener( 'mousedown', handleClickOutside );
        }
    };

    const handleCheckboxChange = ( option ) =>
    {
        const newSelectedOption = selectedOption === option ? null : option;
        setSelectedOption( newSelectedOption );
        dispatch( { type: "CATEGORY", payload: newSelectedOption } );
        setIsOpen( false );
        document.removeEventListener( 'mousedown', handleClickOutside );
    };

    const handleClickOutside = ( event ) =>
    {
        if ( !event.target.closest( '.dropdown' ) )
        {
            setIsOpen( false );
            document.removeEventListener( 'mousedown', handleClickOutside );
        }
    };

    return (
        <div className="relative inline-block text-left dropdown rounded-md">
            <div>
                <button
                    ref={ ref }
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                    id="filter-button"
                    aria-expanded={ isOpen }
                    aria-haspopup="true"
                    onClick={ toggleDropdown }
                >
                    Filter
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            { isOpen && (
                <div
                    className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="filter-button"
                    tabIndex="-1"
                    id="filter-dropdown"
                >
                    <div className="py-1" role="none">
                        { isLoading ? (
                            <p className="text-base font-mono text-teal-600">Loading categories...</p>
                        ) : (
                            categories?.map( ( category, index ) => (
                                <label key={ index } className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700 z-10">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4"
                                        id={ `filter-option-${index + 1}` }
                                        checked={ selectedOption === category }
                                        onChange={ () => handleCheckboxChange( category ) }
                                    />
                                    <span className="ml-2">{ category }</span>
                                </label>
                            ) )
                        ) }
                        { error && <p className="text-red-600 text-base font-thin">{ error }</p> }
                    </div>
                </div>
            ) }
        </div>
    );
} );

export default Filter;