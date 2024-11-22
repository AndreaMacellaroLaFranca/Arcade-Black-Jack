function Dealer() {
    this.dealerCards = [];

    Object.defineProperty(this, 'dealerScore', { 
        get: function() {
            return this.dealerCards.reduce((total, card) => total + card.score, 0); 
        }
    });
}
Dealer.prototype.addCard = function(card) {
    this.dealerCards.push(card); 
}