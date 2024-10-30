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
        default:
            return state;
    }
};