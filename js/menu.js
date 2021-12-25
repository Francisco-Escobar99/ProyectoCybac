const menu  = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-navegacion');//seleccionando la clase


menu.addEventListener('click', ()=>{ //funcion flecha
    menuNav.classList.toggle("spread")//Aparece el menu Nav
})


window.addEventListener('click', e=>{
    if(menuNav.classList.contains('spread') && e.target != menuNav  &&  e.target != menu){
        
        menuNav.classList.toggle("spread")

    }
})