export const productReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case 'CATEGORY':
            return { ...state, selectedCategory: action.payload };
        case 'SEARCH':
            return { ...state, searchQuery: action.payload };
        case 'SORT':
            return { ...state, sortData: action.payload };
        case 'ADD_TO_CART':
            return { ...state, addToCart: [ ...state.addToCart, action.payload ] };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                addToCart: state.addToCart.filter( ( productId ) => productId !== action.payload )
            };
        default:
            return state;
    };
};