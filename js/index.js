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
window.onscroll = () => {
    if ( document.body.scrollTop > 80
        || document.documentElement.scrollTop > 80 )
    {
        header.style.background = 'white';
    } else
    {
        header.style.background = 'none';
     }

};