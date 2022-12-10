document.addEventListener('click', e => {
   
   let selectedDropdown
   const isHamburger = e.target.matches('[data-hamburger]')
   const isFeatures = e.target.matches('[data-button-feat]')
   const isCompany = e.target.matches('[data-button-company]')
   
   if(isFeatures){
      e.target.classList.toggle('active')
   }
   if(isCompany){
      e.target.classList.toggle('active')
   }
   
   
  
   
   
   if(!isHamburger && e.target.closest('[data-navigation]') != null) return;
   if(isHamburger){
      selectedDropdown = e.target.closest('[data-navigation]')
      selectedDropdown.classList.toggle('active')
   }

   
   document.querySelectorAll('[data-navigation].active').forEach(dropdown => {
      if(dropdown === selectedDropdown) return
      dropdown.classList.remove('active')
   })
         
})

