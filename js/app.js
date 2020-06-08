const header = document.querySelector( '.my-header' ),
ereBtn = document.querySelector( '.erebtn' ),
navMenu = document.querySelector( '.nav-menu' )
ereBtn.addEventListener( 'click', event => {
   
    if ( !navMenu.classList.contains('showNav'))
    {
        navMenu.style.height = `${ navMenu.scrollHeight }px`;
    } else
    {
        navMenu.style.height = '0px';
    }
    navMenu.classList.toggle( "showNav" );
    console.log(navMenu.scrollHeight)
} )


//Change navigation style on scroll
window.addEventListener( 'scroll', event => {
    let nav = document.querySelector( '.nav-container' );

    //( window.scrollY >= 44 ) ? nav.classList.add( 'scroll' ) : nav.classList.remove( 'scroll' );

    if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 )
    {
        header.style.background = 'white';
    } else
    {
        header.style.background = 'none';
    }
    
} ); 

//Active navigation on scroll
window.addEventListener( 'scroll', event => {
    let navigationLinks = document.querySelectorAll( '.nav-menu ul li a' );
    let fromTop = window.scrollY;

    navigationLinks.forEach( link => {
        let section = document.querySelector( link.hash );
        console.log(section)
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        )
        {
            link.classList.add( 'active' );
        } else
        {
            link.classList.remove( 'active' );
        }
    } );
} );