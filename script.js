var numeroSecreto = parseInt(Math.random() * 1001);
var chute;
var tentativas = 0;

iniciarJogo();

function iniciarJogo(chute) {
  while (chute !== numeroSecreto) {
    chute = prompt("Digite um numero entre 1 e 1000");
    tentativas++;

    if (chute === null) {
      alert("Você saiu do jogo");
      return;
    } else if (tentativas == 20) {
      alert("Você atingiu o maximo de tentativas, tente novamente");
      return;
    } else if (chute == numeroSecreto) {
      alert("Acertouuu!! o numero é: " + chute);
      numeroSecreto = parseInt(Math.random() * 1001);
      alert("Você acertou em " + tentativas + " tentativas!");
      return;
    } else if (chute > numeroSecreto) {
      alert("Errou... o numero secreto é menor que: " + chute);
    } else if (chute < numeroSecreto) {
      alert("Errou... o numero secreto é maior que: " + chute);
    }
  }
}

