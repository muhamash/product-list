/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const initialState = {
        selectedCategory: "",
        searchQuery: "",
        sortData: "",
        addToCart: [],
    };

    const [state, dispatch] = useReducer(productReducer, initialState);
    const contextValue = { state, dispatch };
    // console.log( state );

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
}