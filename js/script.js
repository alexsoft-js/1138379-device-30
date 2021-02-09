// header-catalog start
let headerServicesLinkCatalog = document.querySelector('.header-services__link--catalog');
let headerCatalog = document.querySelector('.header-catalog');

  headerServicesLinkCatalog.onclick = function() {
    headerCatalog.classList.toggle('header-catalog--flex');
  } 
// header-catalog end

// control start
  let controlItem01 = document.querySelector('.control__item-01');
  let controlItem02 = document.querySelector('.control__item-02');
  let controlItem03 = document.querySelector('.control__item-03');
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

// services start
  let servicesNavigationLink01 = document.querySelector('.services-navigation__link-01');
  let servicesNavigationLink02 = document.querySelector('.services-navigation__link-02');
  let servicesNavigationLink03 = document.querySelector('.services-navigation__link-03');
  let servicesContentBox01 = document.querySelector('.services-content__box-01');
  let servicesContentBox02 = document.querySelector('.services-content__box-02');
  let servicesContentBox03 = document.querySelector('.services-content__box-03');
    
    servicesNavigationLink01.onclick = function() {
      servicesNavigationLink01.classList.add('services-navigation__link--active');
      servicesNavigationLink02.classList.remove('services-navigation__link--active');
      servicesNavigationLink03.classList.remove('services-navigation__link--active');
      servicesContentBox01.classList.add('services-content__box--active');
      servicesContentBox02.classList.remove('services-content__box--active');
      servicesContentBox03.classList.remove('services-content__box--active');
    }

    servicesNavigationLink02.onclick = function() {
      servicesNavigationLink01.classList.remove('services-navigation__link--active');
      servicesNavigationLink02.classList.add('services-navigation__link--active');
      servicesNavigationLink03.classList.remove('services-navigation__link--active');
      servicesContentBox01.classList.remove('services-content__box--active');
      servicesContentBox02.classList.add('services-content__box--active');
      servicesContentBox03.classList.remove('services-content__box--active');
    }

    servicesNavigationLink03.onclick = function() {
      servicesNavigationLink01.classList.remove('services-navigation__link--active');
      servicesNavigationLink02.classList.remove('services-navigation__link--active');
      servicesNavigationLink03.classList.add('services-navigation__link--active');
      servicesContentBox01.classList.remove('services-content__box--active');
      servicesContentBox02.classList.remove('services-content__box--active');
      servicesContentBox03.classList.add('services-content__box--active');
    }
// services end

