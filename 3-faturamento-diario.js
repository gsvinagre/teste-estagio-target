const faturamentoDiario = [1200, 1300, 1150, 1500, 1450, 0, 0, 1600, 1700, 1650, 0, 1800, 1900, 2000, 1750, 0, 0, 1850, 1950, 2050, 0, 2100, 2200, 0, 0, 2250, 2300, 2400, 2450, 2500];

function calcularEstatisticas(faturamento) {
    let menor = Number.MAX_VALUE;
    let maior = Number.MIN_VALUE;
    let soma = 0;
    let diasComFaturamento = 0;

    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > 0) { // Ignorando dias sem faturamento
            if (faturamento[i] < menor) menor = faturamento[i];
            if (faturamento[i] > maior) maior = faturamento[i];
            soma += faturamento[i];
            diasComFaturamento++;
        }
    }

    const media = soma / diasComFaturamento;
    let diasAcimaDaMedia = 0;

    for (let i = 0; i < faturamento.length; i++) {
        if (faturamento[i] > media) diasAcimaDaMedia++;
    }

    return {
        menor,
        maior,
        diasAcimaDaMedia
    };
}

const estatisticas = calcularEstatisticas(faturamentoDiario);

console.log(`Menor valor de faturamento: ${estatisticas.menor}`);
console.log(`Maior valor de faturamento: ${estatisticas.maior}`);
console.log(`Número de dias com faturamento acima da média: ${estatisticas.diasAcimaDaMedia}`);
