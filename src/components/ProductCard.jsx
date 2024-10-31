/* eslint-disable react/prop-types */
import { useState } from 'react';
import ProductButton from './ProductButton';

export default function ProductCard({data}) {
    const [ loading, setLoading ] = useState( true );
    const { image, title, category, price } = data;
    // console.log( data );

    return (
        <div className="relative  flex flex-col shadow-md justify-between p-2 rounded-md">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80 relative">
                { loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-1">
                        <div className="border-t-4 border-b-4 border-yellow-500 rounded-full w-12 h-12 animate-spin">
                        </div>
                    </div>
                ) }
                <img
                    src={ image }
                    alt="product image"
                    className={ `h-full w-full object-cover object-top lg:h-full lg:w-full p-4 rounded-md bg-gray-100 ${loading ? 'hidden' : 'block'
                        }` }
                    onLoad={ () => setLoading( false ) }
                />
            </div>
            <div className="mt-4 px-3 pb-4">
                <div>
                    <h3 className="text-sm text-gray-700">{ title }</h3>
                    <p className="mt-1 text-sm text-gray-500">{ category }</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{ price } ৳</p>
            </div>
            <ProductButton data={ data } />
        </div>
    );
};