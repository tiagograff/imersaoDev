var numeroSecreto = parseInt(Math.random()*11);

while(chute != numeroSecreto){
  var chute = prompt('digite um número entre 1 e 10');
  if (chute == numeroSecreto){
alert('você acertou!');
}else if(numeroSecreto > chute){
  alert('errou! este número é maior');
}else if(numeroSecreto < chute){
  alert('errou! este número é menor');
}
}