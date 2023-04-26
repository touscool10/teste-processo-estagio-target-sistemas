
const computeSum = () => {

    const indice = 13;
    let soma = 0;
    let k = 0;   

    while (k < indice) {
        k = k + 1;
        soma = soma + k;   
    }

    console.log("Questão 1: Ao final do processamento, o valor da variável SOMA será :", soma);
    console.log("\n");

    return soma;
};

module.exports = computeSum;