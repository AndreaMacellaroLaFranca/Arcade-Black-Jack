function Player() {
    this.playerCards = [];
    this.hasAce = false;
    //  Object.defineProperty(this, 'playerScore', {
    //      get: function () {
    //          return this.playerCards.reduce((total, card) => total + card.score, 0);
    //      }
    // });
}
Player.prototype.addCard = function (card) {
    this.playerCards.push(card);
}
Player.prototype.totalScoreWithAce = function(){
    let totalScore = 0;
        for(let card of this.playerCards) {
            totalScore += card.score;
            if(card.name === "A") this.hasAce = true;
        }
        if(this.hasAce && (totalScore+10)<=21){
            totalScore+=10;
        }
    return totalScore;
}
