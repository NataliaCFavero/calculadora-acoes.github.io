'use strict'

function calcular() {
    var qtdAtual, pcMedioAtual, qtdDesejada, pcAtual, pcAtualValor, valorTotal, porValorIsCheck;
  
    pcAtual = Number(document.getElementById("pcAtualQtd").value);
    pcAtualValor = Number(document.getElementById("pcAtualValor").value);
    qtdAtual = Number(document.getElementById("qtdAtual").value);
    pcMedioAtual = Number(document.getElementById("pcMedioAtual").value);
    qtdDesejada = Number(document.getElementById("qtd").value);
    valorTotal = Number(document.getElementById("valorTotal").value);
    porValorIsCheck = document.getElementById('valorCheck').checked ? true : false;
  
    if (porValorIsCheck) {
      pcAtual = pcAtualValor;
      qtdDesejada = calcularQtde(valorTotal, pcAtual);
    }

    if (isNaN(qtdAtual) || isNaN(pcMedioAtual) || isNaN(qtdDesejada) || isNaN(pcAtual)) {
      text = "Todos os campos são obrigatórios";
    } else {
      var totalAtual = qtdAtual * pcMedioAtual;
      var totalFuturo = qtdDesejada * pcAtual;

      var valorTotal = totalAtual + totalFuturo;
      var qtdeTotal = qtdAtual + qtdDesejada;

      var precoMedioFinal = valorTotal/qtdeTotal;

      if (porValorIsCheck) {
        setValue("qtdResultado", qtdDesejada.toFixed(3));
      } else {
        setValue("valorResultado", totalFuturo.toFixed(2));
      }
      setResultadoFinal(precoMedioFinal);
    }
}

function optionsCheck() {
  if (document.getElementById('valorCheck').checked) {
    document.getElementById('porValor').classList.remove('d-none');
    document.getElementById('porQuantidade').classList.add('d-none');
  } else {
    document.getElementById('porValor').classList.add('d-none');
    document.getElementById('porQuantidade').classList.remove('d-none');
  }
  setResultadoFinal(parseFloat("000"));
}

function calcularQtde(valorTotal, valorUnitario) {
  return valorTotal/valorUnitario;
}

function setResultadoFinal(precoMedioFinal) {
  setValue("resultado", precoMedioFinal.toFixed(2));
}

function setValue(id, value) {
  document.getElementById(id).innerHTML = value;
}