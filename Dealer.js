function Dealer() {
    this.dealerCards = [];
    this.hasAce = false;

    Object.defineProperty(this, 'dealerScore', { 
        get: function() {
            return this.dealerCards.reduce((total, card) => total + card.score, 0); 
        }
    });
}
Dealer.prototype.addCard = function(card) {
    this.dealerCards.push(card); 
}
Dealer.prototype.totalScoreWithAce = function(){
    let totalScore = 0;
        for(let card of this.dealerCards) {
            totalScore += card.score;
            if(card.name === "A") this.hasAce = true;
        }
        if(this.hasAce && (totalScore+10)<=21){
            totalScore+=10;
        }
    return totalScore;
    }