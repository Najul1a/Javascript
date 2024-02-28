// Atividade01
function idade(ano1) {
  return 2024 - ano1;
}
console.log(`${idade(2007)}`);

console.log("--------------------------------------");
//Atividade2
function combustivel(litros, km) {
  return litros * km;
}
console.log(
  `Ele pode viajar com 40 litros de combustivel : ${combustivel(40, 12)} kms`
);

console.log("---------------------atividade02---------------------");

function votar(idade) {
    if (idade >= 16 && idade < 18)
      console.log(`você pode votar ,mas não é obrigado`);
    else if (idade >= 16) console.log(`Você pode votar`);
    else console.log(`você não pode votar`);
}

votar(10);

function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`Você não pode votar`);
      break;
    case idade >= 16 && idade < 18:
      console.log(`Você pode votar mais não é obrigatorio`);
      break;
    default:
      console.log(`você pode votar`);
      break;
  }
}
votacao(18);
