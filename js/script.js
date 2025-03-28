function ex01() {
  var idade = parseInt(document.getElementById("idade1").value)
  var nacionalidade = document.getElementById("nacionalidade").value
  var msg = ''

  if (idade >= 16 && nacionalidade === 'S') {
    msg = 'Você pode votar !'
  } else {
    msg = 'Você não pode votar !'
  }

  document.getElementById("resultado1").innerHTML = msg
}





function ex02() {
  var valor = parseFloat(document.getElementById("valor").value)
  var origem = document.getElementById("origem").value
  var destino = document.getElementById("destino").value
  var resultado;

  if (origem === destino) {
    resultado = valor
  } else if (origem === "cm" && destino === "m") {
    resultado = valor / 100
  } else if (origem === "cm" && destino === "km") {
    resultado = valor / 100000
  } else if (origem === "m" && destino === "cm") {
    resultado = valor * 100
  } else if (origem === "m" && destino === "km") {
    resultado = valor / 1000
  } else if (origem === "km" && destino === "cm") {
    resultado = valor * 100000
  } else if (origem === "km" && destino === "m") {
    resultado = valor * 1000
  } else {
    resultado = "Unidades invalidas"
  }

  document.getElementById("resultado2").innerHTML = `${valor} ${origem} = ${resultado} ${destino}`
}





function ex03() {
  var idade = document.getElementById("idade3").value
  var msg = ''
  if (idade < 0) {
    msg = 'Idade inválida.'
  } else if (idade <= 7) {
    msg = 'Mirim'
  } else if (idade <= 10) {
    msg = 'Infantil'
  } else if (idade <= 13) {
    msg = 'Juvenil A'
  } else if (idade <= 17) {
    msg = 'Juvenil B'
  } else {
    msg = 'Adulto'
  }

  document.getElementById("resultado3").innerHTML = msg
}