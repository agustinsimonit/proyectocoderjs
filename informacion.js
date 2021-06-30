// Creacion de "Scroll" con informacion de cada destino.

window.onload = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content');  window.addEventListener('scroll', () => {
        let sectionId = '';      
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;        
            console.log(pageYOffset);        
        
        if(pageYOffset >= (sectionTop - sectionHeight / 4)) {
            sectionId = section.getAttribute('id');
        }
    });      
        
    navItems.forEach(item => {
        item.classList.remove('active');        
        if(item.classList.contains(sectionId)) {
            item.classList.add('active')
        }
    })
})  
    
    navItems.forEach(item => {
        item.onclick = e => {
            const sectionId = item.classList[1];
            document.getElementById(sectionId).scrollIntoView({ block:'start', behavior: 'smooth' })
        }
    })
}
  