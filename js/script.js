function checarVotacao() {
    var idade = parseInt(document.getElementById("idade1").value);
    var msg = document.getElementById("resultado1");
    var brasileiroSim = document.getElementById("brasileiroCheck").checked;

    if (brasileiroSim) {
        if (idade >= 16) {
            msg.textContent = "Você pode votar!";
        } else {
            msg.textContent = "Você não pode votar porque é menor de 16 anos.";
        }
    } else {
        msg.textContent = "Você não pode votar porque não é brasileiro(a).";
    }
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