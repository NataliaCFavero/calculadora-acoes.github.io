'use strict'
function calcular() {
    var qtdAtual, pcMedioAtual, qtdDesejada, pcAtual;
  
    qtdAtual = Number(document.getElementById("qtdAtual").value);
    pcMedioAtual = Number(document.getElementById("pcMedioAtual").value);
    qtdDesejada = Number(document.getElementById("qtd").value);
    pcAtual = Number(document.getElementById("pcAtual").value);
  
    if (isNaN(qtdAtual) || isNaN(pcMedioAtual) || isNaN(qtdDesejada) || isNaN(pcAtual)) {
      text = "Todos os campos são obrigatórios";
    } else {
      var totalAtual = qtdAtual * pcMedioAtual;
      var totalFuturo = qtdDesejada * pcAtual;

      var valorTotal = totalAtual + totalFuturo;
      var qtdeTotal = qtdAtual + qtdDesejada;

      var precoMedioFinal = valorTotal/qtdeTotal;

      document.getElementById("resultado").innerHTML = precoMedioFinal.toFixed(2);
    }
}

$(document).ready(function () {
    $("#pcMedioAtual").on("keyup", null, function () {
        var $input = $(this),
            value = $input.val(),
            num = parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

        $input.siblings('.add-on').text('$' + num);
    });
});