function Player() {
    this.playerCards = [];
    Object.defineProperty(this, 'playerScore', {
        get: function () {
            return this.playerCards.reduce((total, card) => total + card.score, 0);
        }
    });
}

Player.prototype.addCard = function (card) {
    this.playerCards.push(card);
};