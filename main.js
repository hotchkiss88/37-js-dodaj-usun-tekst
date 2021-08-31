let add = document.getElementById("dodaj");

let remove = document.getElementById("usun");

let txt = document.getElementById("tekst");

add.onclick = function() {
    txt.innerText = "ONLY CSS!"
}

remove.onclick = function() {
    txt.innerText = ""
}