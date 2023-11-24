// Modalı al
var modal = document.getElementById("myModal");

// Butonu al
var btn = document.getElementById("modalBtn");

// Kapat butonunu al (x)
var span = document.getElementsByClassName("close")[0];

// Butona tıklandığında modalı aç
btn.onclick = function() {
    modal.style.display = "block";
}

// Kapat butonuna (x) tıklandığında modalı kapat
span.onclick = function() {
    modal.style.display = "none";
}

// Kullanıcı modal dışına tıklarsa, modalı kapat
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
