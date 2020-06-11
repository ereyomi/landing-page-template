/* declarations */
const header = document.querySelector( '.my-header' ),
    ereBtn = document.querySelector( '.erebtn' ),
    navMenu = document.querySelector( '.nav-menu' );

const createNavLinks = async ( toActive, links, navigator ) => {
    links.forEach( link => {
        const createdLink = document.createElement( 'li' );
        const createAnchor = document.createElement( 'a' );
        //createAnchor.setAttribute( 'href', `#${ link.toLowerCase() }` );
        toActive === link ? createAnchor.setAttribute( 'class', 'active' ) : '';
        const linkName = document.createTextNode( `${ link }` );
        createAnchor.appendChild( linkName );
        createdLink.appendChild( createAnchor );
        navigator.appendChild( createdLink );
    } );
}

window.addEventListener( 'DOMContentLoaded', async (event) => {

    const navigator = document.querySelector( '.nav-menu ul' );

    const links = [ 'Home', 'About', 'Services', 'Team', 'Contact' ];
    const toActive = 'Home';

    try {
        await createNavLinks( toActive, links, navigator );
    } catch (error) {
        console.log( error );
    }
    

/* Scroll to section  */

    const navLinks = document.querySelectorAll( '.nav-menu ul li a' );

    navLinks.forEach( link => {
        link.addEventListener( 'click', (event) => {
            removeActiveClassFromLinks();
            //event.target.classList.add('active');
            document.querySelector( `#${link.textContent.toLowerCase()}` ).scrollIntoView( {
                behavior: 'smooth'
            } )
        } );
    } ); 
    
    const removeActiveClassFromLinks = () => {
        navLinks.forEach( link => {
            link.classList.remove('active')
         })
    }


    
   

    ereBtn.addEventListener( 'click', event => {
    
        if ( !navMenu.classList.contains('showNav'))
        {
            navMenu.style.height = `${ navMenu.scrollHeight }px`;
        } else
        {
            navMenu.style.height = '0px';
        }
        navMenu.classList.toggle( "showNav" );
    } )


    //Change navigation style on scroll
    window.addEventListener( 'scroll', event => {
        const nav = document.querySelector( '.nav-container' );

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

        const fromTop = window.scrollY;

        navLinks.forEach( link => {
            //let section = document.querySelector( link.hash );
            let section = document.querySelector( `#${ link.textContent.toLowerCase() }` );
           
            if (
                (section.offsetTop <= fromTop) &&
                ((section.offsetTop + section.offsetHeight) > fromTop)
            )
            {
                link.classList.add( 'active' );
                
            } else
            {
                link.classList.remove( 'active' );
            }
        } );
    } );

} );


