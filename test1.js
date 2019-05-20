var element = document.getElementById('container');
function col1() {
    element.style.background = "pink"; 
    //zmienia kolor conteinera po najechaniu muszki na różowy (col1)
}
function col2() {
    element.style.background = "green" 
    //zmienia kolor conteinera na zielony po zjechaniu z pola myszką (col2)
}
function col3() {
    element.style.width = "400px";
    //zmienia szerokość conteinera po pojedynczym kliknięciu na conteiner1 (col3)
}

function col4() {
    element.append("hello");
    //wpisuje hello na conteiner po podwójnym kliknięciu na conteiner1 (col4)
}