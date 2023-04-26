// Escreva um programa que inverta os caracteres de um string.


const revertString = (string) => {
    let stringRevertedSplit = [];
    let result = "";

    for (let index = string.length - 1; index >= 0; index--) {
        stringRevertedSplit.push(string[index]);
    }

    for (let index = 0; index < stringRevertedSplit.length; index++) {
        result+= stringRevertedSplit[index];
    }

    console.log(`Questão 5: String invertido é ${result}`);
    console.log("\n");

    return result
};

const auxFunction = () => {  

};

module.exports = {
    revertString,
};