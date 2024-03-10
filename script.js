window.onload = ()=> {
    window.addEventListener('scroll', (e)=> {
        if(window.scrollY > 100) {
            document.querySelector("header").classList.add('is-scrolling')
        } else{
            document.querySelector("header").classList.remove('is-scrolling')

        }
    })

    const menu_btn = document.querySelector('.hamburguer')
    const mobile_menu = document.querySelector('.mobile-nav')

    menu_btn.addEventListener('click', ()=> {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}