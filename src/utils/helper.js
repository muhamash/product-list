const fetchSearchResults = async ( url ) =>
{
    try
    {
        const response = await fetch( url );
        if ( !response.ok )
        {
            throw new Error( 'Failed to fetch data' );
        }
        const data = await response.json();
        // console.log( data );
        return data;
    }
    catch ( error )
    {
        console.error( 'Error:', error.message );
    }
    
};

const debounceFn = ( func, delay ) =>
{
    let timer;
    return function ( ...args )
    {
        clearTimeout( timer );
        timer = setTimeout( () =>
        {
            func.apply( this, args );
        }, delay );
    };
};

const sortData = ( array, direction ) =>
{
    return [ ...array ].sort( ( a, b ) =>
    {
        if ( direction === "Low to High" )
        {
            return a.price - b.price;
        }
        else if ( direction === "High to Low" )
        {
            return b.price - a.price;
        }

        return 0;
    } );
};

const searchData = ( array, searchTerm ) =>
{
    return [ ...array ].filter( d => d.title && d.title.toLowerCase().includes( searchTerm.toLowerCase() ) );
}

export { debounceFn, fetchSearchResults, searchData, sortData };