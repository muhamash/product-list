import React from 'react';
import useProductContext from "../hooks/useProductContext";

export default function Cart() {
    const [cartOpen, setCartOpen] = React.useState(false);
    const { state } = useProductContext();
    
    const handleOpenCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <div className="relative">
            {/* Cart Button */}
            <button 
                onClick={handleOpenCart} 
                className="group -m-2 flex items-center p-2 relative"
                aria-expanded={cartOpen}
            >
                <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                </svg>
                <span className="ml-2 mt-1 text-sm font-medium text-gray-700 group-hover:text-gray-800 opacity-100 group-hover:opacity-0">
                    {state.addToCart.length}
                </span>
                <span className="text-xs text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity absolute right-0 bottom-8">
                    {state.addToCart.length} items in cart, {cartOpen ? 'close' : 'view'} the bag
                </span>
                <span className="sr-only">
                    {state.addToCart.length} items in cart, {cartOpen ? 'close' : 'view'} the bag
                </span>
            </button>

            {/* Cart Dropdown */}
            {cartOpen && (
                <div className="absolute z-10 right-0 mt-2 w-64 p-4 bg-teal-600 text-white rounded-md shadow-lg max-h-[300px] overflow-y-scroll">
                    {state.addToCart.length > 0 ? (
                        state.addToCart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-2">
                                <p className="text-sm font-mono">{item.title}</p>
                                <p className="text-sm font-mono text-rose-700">${ item.price }</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-sm">Your cart is empty!</p>
                    )}
                </div>
            )}
        </div>
    );
};