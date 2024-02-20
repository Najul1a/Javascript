//Operadores logicos 
var manha = true;
var sono = true;

console.log("---------------------------------")
console.log("Manhã:" ,manha, "| Estou com sono?", sono);

console.log("Operadores AND (E):", manha && sono);
console.log("Operadores or (OU)", manha || sono);
console.log("---------------------------------")
sono = false
console.log("Operadores AND (E):", manha && sono);
console.log("Operadores or (OU)", manha || sono);
console.log("---------------------------------")
manha = false
console.log("Operadores AND (E):", manha && sono);
console.log("Operadores or (OU)", manha || sono);