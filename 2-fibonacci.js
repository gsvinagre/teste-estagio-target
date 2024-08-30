function pertenceAFibonacci(numero) {
    if (numero < 0) return false;

    let a = 0;
    let b = 1;

    while (a <= numero) {
        if (a === numero) return true;
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false;
}


const numero = 57; // Defina o número aqui

if (pertenceAFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
