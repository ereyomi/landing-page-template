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
    if ( document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 )
    {
        header.style.background = 'white';
    } else
    {
        header.style.background = 'none';
     }

};

/*  */
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute( 'id' );
            console.log(id)
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
    
});