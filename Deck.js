function Deck() {
    this.cards = [];
    for (let suit of ['hearts', 'clubs', 'spades', 'diamonds']) {
        for (let i = 2; i < 11; i++){
            const card = new Card(i.toString(), suit, `${i}-${suit}.png`);
            this.cards.push(card);
        };
        this.cards.push(new Card('A', suit, `A-${suit}.png`));
        this.cards.push(new Card('J', suit, `J-${suit}.png`));
        this.cards.push(new Card('Q', suit, `Q-${suit}.png`));
        this.cards.push(new Card('K', suit, `K-${suit}.png`));
    };
}
Deck.prototype.shuffle = function (cards) {
    for (let i = 0; i < this.cards.length; i++) {
        let shuffle = Math.floor(Math.random() * (this.cards.length));
        [this.cards[i], this.cards[shuffle]] = [this.cards[shuffle], this.cards[i]];
    };
}
Deck.prototype.draw = function () {
    return this.cards.pop();
}
