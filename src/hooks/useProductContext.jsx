import { useContext } from 'react';
import { ProductContext } from '../context/productProvider';

export default function useProductContext()
{
    return useContext(ProductContext)
};