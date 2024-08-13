// 1. Deposit some money 
// 2. Determine number of lines to bet on 
// 3. Collect bet amount 
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again 

const prompt = require("prompt-sync")();

const ROWS = 3;
const CALLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,

}
   
const SYMBOL_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
}



const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
    } else {
        return numberDepositAmount;
    }
}
};
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const NumberOfLines = parseFloat(lines);
    
        if (isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return NumberOfLines;
        }
    }

}
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const NumberBet = parseFloat(bet);
    
        if (isNaN(NumberBet) || NumberBet <= 0 || NumberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return NumberBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    for ( const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbol.push(symbol);
        }
    }

};


let balance = deposit();
const NumberOfLines = getNumberOfLines();
const bet = getBet(balance, NumberOfLines);
