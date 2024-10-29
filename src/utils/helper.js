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
        console.log( data );
        return data;
    }
    catch ( error )
    {
        console.error( 'Error:', error.message );
    }
    
};

const debounceFn = (func, delay) => {
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

export { debounceFn, fetchSearchResults };
