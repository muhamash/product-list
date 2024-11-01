import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProduct from '../hooks/useProduct';
import useProductContext from '../hooks/useProductContext';
import { searchData } from '../utils/helper';
import Cart from './Cart';
import CustomSkeleton from './CustomSkeleton';
import Filter from './Filter';
import ProductCard from './ProductCard';
import ProductListTitle from './ProductListTitle';
import Search from './Search';
import Sort from './Sort';

export default function ProductSection() {
    const { state } = useProductContext();
    const { selectedCategory, sortData, searchQuery } = state;
    const { data: product, isLoading, error } = useProduct(false, selectedCategory, sortData);
    
    const productData = searchData(product, searchQuery);

    const skeletonArray = Array.from({ length: 8 });

    return (
        <div className="pt-16 sm:pt-24 lg:pt-40">
            <ProductListTitle />
            <div className="mt-10">
                <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="w-full">
                        <Sort />
                        <Filter />
                    </div>
                    <div className="flex gap-2 items-center">
                        <Search />
                        <Cart />
                    </div>
                </div>
                <div id="productSection" className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {isLoading ? (
                                skeletonArray.map((_, index) => (
                                    <CustomSkeleton key={index} />
                                ))
                            ) : productData.length !== 0 ? (
                                productData.map((p, index) => (
                                    <ProductCard
                                        key={index}
                                        data={p}
                                    />
                                ))
                            ) : (
                                <p className="font-mono text-red-600 text-xl text-center">404! No matches found</p>
                            )}
                            {error && (
                                <p className="font-mono text-red-700 text-base text-center">Something is wrong!!! : {error}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}