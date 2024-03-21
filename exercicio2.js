let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoantes = ['b', 'c', 
                  'd',  'f', 
                  'g', 'h',  
                  'j', 'k', 'l', 
                  'm', 'n', 
                  'p', 'q', 'r', 
                  's', 't', 
                  'v', 'w', 'x', 
                  'y', 'z'];

let espaço = [" "];
                  
let texto = "O Rato roeu a roupa do rei de Roma";

texto = texto.toLowerCase()

let arrayLetras = texto.split("")

let arrayV = [];

let arrayC = [];

let arrayE = [];

for(i = 0; i < arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
    arrayV.push(arrayLetras[i])
} 
    if(consoantes.includes(arrayLetras[i])){
        arrayC.push(arrayLetras[i])
    }
}

for(i = 0; i < arrayLetras.length; i++){
    if(espaço.includes(arrayLetras[i])){
        arrayE.push(arrayLetras[i])
}
}


console.log("Texto original: " + texto)

console.log("O número de vogais é: " + arrayV.length)

console.log("As vogais encontradas são: " + arrayV.toString())

console.log("O número de consoantes é: " + arrayC.length)

console.log("As consoantes encontradas são: " + arrayC.toString())

console.log("Total de espaços encontrados: " + arrayE.length);