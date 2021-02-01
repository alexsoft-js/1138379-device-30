// header-dropdown start
  let headerServicesLinkCatalog = document.querySelector('.header-services__link--catalog');
  let headerDropdown = document.querySelector('.header-dropdown');
  let headerDropdownFlex = document.querySelector('.header-dropdown--flex');

    headerServicesLinkCatalog.onclick = function() {
      headerDropdown.classList.toggle('header-dropdown--flex');
    } 
// header-dropdown end

// control start
  let controlItem01 = document.querySelector('.control__item-01');
  let controlItem02 = document.querySelector('.control__item-02');
  let controlItem03 = document.querySelector('.control__item-03');
  let controlLabel = document.querySelector('.control__label');
  let controlLabel01 = document.querySelector('.control__label-01');
  let controlLabel02 = document.querySelector('.control__label-02');
  let controlLabel03 = document.querySelector('.control__label-03');
  let sliderItem01 = document.querySelector('.slider-item__01');
  let sliderItem02 = document.querySelector('.slider-item__02');
  let sliderItem03 = document.querySelector('.slider-item__03');

    controlItem01.onclick = function() {
      controlLabel01.classList.add('control__label--active');
      controlLabel02.classList.remove('control__label--active');
      controlLabel03.classList.remove('control__label--active');
      sliderItem01.classList.add('slider-item--active');
      sliderItem02.classList.remove('slider-item--active');
      sliderItem03.classList.remove('slider-item--active');
    }

    controlItem02.onclick = function() {
      controlLabel01.classList.remove('control__label--active');
      controlLabel02.classList.add('control__label--active');
      controlLabel03.classList.remove('control__label--active');
      sliderItem01.classList.remove('slider-item--active');
      sliderItem02.classList.add('slider-item--active');
      sliderItem03.classList.remove('slider-item--active');
    }

    controlItem03.onclick = function() {
      controlLabel01.classList.remove('control__label--active');
      controlLabel02.classList.remove('control__label--active');
      controlLabel03.classList.add('control__label--active');
      sliderItem01.classList.remove('slider-item--active');
      sliderItem02.classList.remove('slider-item--active');
      sliderItem03.classList.add('slider-item--active');
    }
// control end