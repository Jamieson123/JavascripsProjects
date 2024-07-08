document.getElementById('submitHand').addEventListener('click', getUserHand);

function getUserHand() {
    const card1 = document.getElementById('card1').value.toUpperCase();
    const card2 = document.getElementById('card2').value.toUpperCase();

    if (isValidCard(card1) && isValidCard(card2)) {
        getPokerHand([card1, card2]);
    } else {
        alert('Please enter valid card values.');
    }
}

function isValidCard(card) {
    const validSuits = ['H', 'D', 'C', 'S'];
    const validRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (card.length >= 2 && card.length <= 3) {
        const rank = card.slice(0, -1);
        const suit = card.slice(-1);
        return validRanks.includes(rank) && validSuits.includes(suit);
    }
    return false;
}

async function  getPokerHand(hand) {
    try {
        const Hand = pokersolver.Hand;
        const solvedHand = Hand.solve(hand);

        const winProbability = calculateWinningProbability(solvedHand);
        const action = suggestAction(winProbability);

        displayCards(hand);
        document.getElementById('hand').innerText = `${solvedHand.name}, ${solvedHand.descr}`;
        document.getElementById('action').innerText = action;
        document.getElementById('win-probability').innerText = `${winProbability.toFixed(2)}%`;
    } catch (error) {
        console.error('Error fetching the poker hand:', error);
    }
}

function displayCards(hand) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = ''; // Clear previous cards

    hand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('grid-item');
        const rank = card.slice(0, -1);
        const suit = card.slice(-1);

        const suitClass = getSuitClass(suit);
        cardElement.innerHTML = `
            <div class="top-left">${rank}<br><div class="${suitClass}">${getSuitIcon(suit)}</div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="${suitClass}">${getSuitIcon(suit)}</div>
            <div></div>
            <div></div>
            <div></div>
            <div class="bottom-right">${rank}<br><div class="${suitClass}">${getSuitIcon(suit)}</div></div>
        `;
        cardsContainer.appendChild(cardElement);
    });
}

function getSuitIcon(suit) {
    switch (suit) {
        case 'H': return '♥';
        case 'D': return '♦';
        case 'C': return '♣';
        case 'S': return '♠';
        default: return '';
    }
}

function getSuitClass(suit) {
    switch (suit) {
        case 'H': return 'heart';
        case 'D': return 'diamond';
        case 'C': return 'club';
        case 'S': return 'spade';
        default: return '';
    }
}

function suggestAction(winProbability) {
    if (winProbability > 70) {
        return 'Raise';
    } else if (winProbability > 30) {
        return 'Call';
    } else {
        return 'Fold';
    }
}

function calculateWinningProbability(solvedHand) {
    // This function should ideally integrate a proper poker probability algorithm
    // For now, let's mock the win probability based on hand strength
    const handStrength = {
        'Royal Flush': 99,
        'Straight Flush': 95,
        'Four of a Kind': 85,
        'Full House': 75,
        'Flush': 65,
        'Straight': 55,
        'Three of a Kind': 45,
        'Two Pair': 35,
        'Pair': 25,
        'High Card': 15
    };

    return handStrength[solvedHand.name] || Math.random() * 100;
}
