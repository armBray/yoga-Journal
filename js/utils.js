export function renderDate() {
    const thisYear = new Date()
    const copyrightEl = document.getElementById('copyright-year')
    copyrightEl.textContent = thisYear.getFullYear()
}

export function renderMenu(){
    const menuEL = document.getElementById('menu-mobile')

    function myFunction(x) {
        if (x.matches) { // If media query matches
        //   console.log('matches');
        document.getElementById("menu-hamburger").style.display = 'none'
        document.getElementById("menu-strawberry").style.display = 'none'
        } else {
        //   console.log('none');
        document.getElementById("menu-hamburger").style.display = 'inline'
        }
    }

    // Create a MediaQueryList object
    var x = window.matchMedia("(min-width: 414px)")

    // Call listener function at run time
    myFunction(x);

    // Attach listener function on state changes
    x.addEventListener("change", function() {
        myFunction(x);
    });

    menuEL.addEventListener('click', e => {
        // console.log('menu: ', e.target.id);
        if (e.target.id === 'menu-hamburger'){
            e.target.style.display = 'none'
            document.getElementById("menu-strawberry").style.display = 'inline'
            document.getElementById('menu-mobile-list').style.transform = 'translateX(0)'
        } else {
            e.target.style.display = 'none'
            document.getElementById("menu-hamburger").style.display = 'inline'
            document.getElementById('menu-mobile-list').style.transform = 'translateX(-100%)'
        }
    })
}

