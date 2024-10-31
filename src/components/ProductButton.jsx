/* eslint-disable react/prop-types */
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProductContext from "../hooks/useProductContext";

export default function ProductButton({ data }) {
    const { state, dispatch } = useProductContext();

    const isInCart = state.addToCart.some(cartItem => cartItem.id === data.id);

    const handleCart = () =>
    {
        const actionType = isInCart ? 'REMOVE_FROM_CART' : 'ADD_TO_CART';
        dispatch( { type: actionType, payload: data } );
        
        if ( actionType === 'ADD_TO_CART' )
        {
            toast.success( `${data.title} added to the Cart!!!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            } );
        } else
        {
            toast.warn( `${data.title} removed from Cart!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            } );
        }
    };

    return (
        <button onClick={ handleCart } className={ `flex px-3 py-2 text-white justify-center cursor-pointer hover:shadow-md transition-all duration-200 ${isInCart ? "bg-rose-600" : "bg-teal-600"} w-full h-fit rounded-md` }>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="mr-2.5 h-5 w-5 flex-none white"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
            </svg>
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>
        // <ToastContainer />
    );
};