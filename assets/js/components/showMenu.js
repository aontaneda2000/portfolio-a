 function showMenu() {
   const buttonNavIcon = document.querySelector(".nav__icon");
   const navMenu = document.querySelector(".nav__menu");
   const buttonnavClose = document.querySelector(".nav__close");


   buttonNavIcon.addEventListener('click', () => {
     if (buttonNavIcon) {
       console.log('object');
      navMenu.classList.toggle("show-menu");
     }
   })

   
   buttonnavClose.addEventListener("click", () => {
     if (buttonnavClose) {
       console.log("object");
       navMenu.classList.toggle("show-menu");
     }
   });
   
   
}
 
export default showMenu