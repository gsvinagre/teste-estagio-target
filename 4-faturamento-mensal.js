const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

function calcularPercentuais(faturamento) {
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentuais = {};

    for (let estado in faturamento) {
        percentuais[estado] = (faturamento[estado] / total * 100).toFixed(2);
    }

    return percentuais;
}

const percentuais = calcularPercentuais(faturamentoPorEstado);

for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
