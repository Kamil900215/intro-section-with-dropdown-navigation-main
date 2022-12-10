document.addEventListener('click', e => {

   const isHamburger = e.target.matches('[data-hamburger]')
  
   if(!isHamburger && e.target.closest('[data-navigation]') != null) return;

   let selectedDropdown
   if(isHamburger){
      selectedDropdown = e.target.closest('[data-navigation]')
      selectedDropdown.classList.toggle('active')
   }
   document.querySelectorAll('[data-navigation].active').forEach(dropdown => {
      if(dropdown === selectedDropdown) return
      dropdown.classList.remove('active')
   })
         
})

