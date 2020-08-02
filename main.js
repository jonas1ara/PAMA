jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon'),
        menu = $('.navigation ul');

    menuBtn.click(function() {

        if( menu.hasClass('show')) {
            menu.removeClass('show');
        }else {

            menu.addClass('show');
        }
    });  

});


var map = L.map('mapa').setView([19.06771, -98.231565], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([19.06771, -98.231565]).addTo(map)
    .bindTooltip('Grupo PAMA <br> Integración Industrial')
    .openTooltip();
