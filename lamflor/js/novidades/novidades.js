
function readMore(d, m, b) {
    var dots = document.getElementById(d);
    var moreText = document.getElementById(m);
    var btnReadMore = document.getElementById(b);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.innerHTML = "Ler Mais"
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.innerHTML = "Voltar"
    }
}