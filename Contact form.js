let Form1 = document.getElementById ("Form1");
let Form2 = document.getElementById ("Form2");
let Form3 = document.getElementById ("Form3");

let Volgende1 = document.getElementById ("Volgende1");
let Volgende2 = document.getElementById ("Volgende2");
let Terug2 = document.getElementById ("Terug2");
let Terug3 = document.getElementById ("Terug3");

let Progres = document.getElementById ("Progres");

Volgende1.onclick = function () {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    Progres.style.width = "240px";
}

Terug2.onclick = function () {
    Form1.style.left = "40px";
    Form2.style.left = "-450px";
    Progres.style.width = "120px";
}

Volgende2.onclick = function () {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    Progres.style.width = "360px";
}

Terug3.onclick = function () {
    Form2.style.left = "40px";
    Form3.style.left = "-450px";
    Progres.style.width = "240px";
}

