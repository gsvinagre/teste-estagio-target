function inverterString(str) {
    let strInvertida = "";

    // Itera pela string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }

    return strInvertida;
}

// Exemplo de uso
const stringOriginal = "Gustavo de Sousa Vinagre";
const stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
