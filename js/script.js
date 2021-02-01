// header-dropdown start
let headerServicesLinkCatalog = document.querySelector('.header-services__link--catalog');
  let headerDropdown = document.querySelector('.header-dropdown');
  let headerDropdownFlex = document.querySelector('.header-dropdown--flex');

  headerServicesLinkCatalog.onclick = function() {
    headerDropdown.classList.toggle('header-dropdown--flex');
  } 
// header-dropdown end