import { useEffect, useState } from "react";
import { fetchSearchResults, sortData } from "../utils/helper.js";

const useProduct = (category = false, selectedCategory = "", direction) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        // setData( [] );
        // setError( [] )
        // setIsLoading(false)

        const apiUrl = category
            ? "https://fakestoreapi.com/products/categories"  // Fetch categories
            : selectedCategory
                ? `https://fakestoreapi.com/products/category/${selectedCategory}`  // Fetch specific category data
                : "https://fakestoreapi.com/products";  // Fetch all products data

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await fetchSearchResults(apiUrl);
                if (!ignore) {
                    setData(result);
                    setError(null);
                }
            } catch (error) {
                if (!ignore) {
                    setError("Failed to fetch products");
                    console.error("Fetch error:", error);
                }
            } finally {
                if (!ignore) setIsLoading(false);
            }
        };

        if ((category && !selectedCategory) || !category) {
            fetchData();
        }

        return () => {
            ignore = true;
        };
    }, [category, selectedCategory]);

    const sortedData = sortData(data, direction);

    return { data: sortedData, error, isLoading };
};

export default useProduct;