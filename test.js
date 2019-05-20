$ ("#container .com p").on('click', function() {
    $('.pp').css('color', 'pink'); //zmienia kolor drugiego p na różowy po
    //kliknięciu na pierwszy p
})

$('#text').on('change', function() {
    $('.fillText').text($('#text').val());
    //zapisuje wprowadzany tekst w okienku
})
