function checarIdade() {
    var idade = document.getElementById("idade1").value;
}











function classificar() {
    var idade = document.getElementById("idade3").value;
    var msg = ''
    if (idade < 0) {
        msg = 'Idade inválida.';
    } else if (idade <= 7) {
        msg = 'Mirim';
    } else if (idade <= 10) {
        msg = 'Infantil';
    } else if (idade <= 13) {
        msg = 'Juvenil A';
    } else if (idade <= 17) {
        msg = 'Juvenil B';
    } else {
        msg = 'Adulto';
    }

    document.getElementById("resultado3").innerHTML = msg
}