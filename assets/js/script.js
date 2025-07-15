var toggle = document.getElementById("toggle");
var mainnav = document.getElementById("mainnav");
toggle.onclick = function(){
    mainnav.classList.toggle('active');
    document.querySelector('.inner-logo').classList.toggle('hide-when-menu-open');
    document.querySelector('.inner-shopping-cart').classList.toggle('hide-when-menu-open');
    document.querySelector('.inner-wrap').classList.toggle('inner-wrap-change');
    document.querySelector('.inner-header-btn').classList.toggle('inner-header-btn-change');
    document.querySelector('.fa-bars').classList.toggle('exchange-after-click');
    document.querySelector('.fa-x').classList.toggle('exchange-after-click');
    document.querySelector('.header').classList.toggle('active');
}