// Escreva um programa que inverta os caracteres de um string.


const revertString = (number) => {
    let sequence = computeFibonacciSequenceUpToNumber(number);

    if (sequence.includes(number)) {
        console.log(`Questão 2: O número ${number}  pertence à sequência de Fibonacci.`);
        console.log("\n");
        return  `O número ${number}  pertence à sequência de Fibonacci.`
    }

    console.log(`Questão 2: O número ${number}  NÃO pertence à sequência de Fibonacci.`);
    console.log("\n");
    return  `O número ${number}  NÃO pertence à sequência de Fibonacci.`
};

const computeFibonacciSequenceUpToNumber = (number) => {
    let sequence = [0,1];

    if (sequence.every(s => s >= number)) {
        return sequence;
    } 

    let nextNumber = -1 ;

    while(nextNumber < number){
        nextNumber  = sequence[sequence.length - 1] + sequence[sequence.length - 2];
       
        sequence  = [...sequence, nextNumber];
    }
    
    return sequence;


};

module.exports = {
    belongsToFibonacciSequence,
};