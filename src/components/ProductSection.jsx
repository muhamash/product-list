// import React from 'react'
import Cart from './Cart';
import Filter from './Filter';
import ProductListTitle from './ProductListTitle';
import Search from './Search';
import Sort from './Sort';

export default function ProductSection() {
    return (
        <div className="pt-16 sm:pt-24 lg:pt-40">
            <ProductListTitle />
            <div className="mt-10">
                <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className='w-full'>
                        <Sort />
                        <Filter />
                    </div>

                    <div className="flex gap-2 items-center">
                        <Search/>
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
    );
}
