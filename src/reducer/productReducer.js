export const productReducer = ( state, action ) =>
{
    switch ( action.type )
    {
        case 'CATEGORY':
            return { ...state, searchQuery: "", selectedCategory: action.payload };
        case 'SEARCH':
            return { ...state, searchQuery: action.payload, selectedCategory: "" };
        case 'SORT':
            return { ...state, searchQuery: "", selectedCategory: "", sortData: action.payload };
        default:
            return state;
    }
};