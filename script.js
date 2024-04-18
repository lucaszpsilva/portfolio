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


document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        let targetId = link.getAttribute('href').substring(1);
  
        
        let targetElement = document.getElementById(targetId);
  
        
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  });