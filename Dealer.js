function Dealer() {
    this.dealerCards = []; // Array che conterrà le carte del dealer.

    Object.defineProperty(this, 'dealerScore', { 
        // Il metodo Object.defineProperty ci permette di creare una proprietà in maniera più dettagliata.
        // Praticamente usiamo una funzione per assegnargli un parametro this, che si chiamerà dealerScore in questo caso.
        get: function() { 
            // Il getter ci permette di ricavare il valore di dealerScore tramite una funzione.
            // In poche parole, ogni volta che richiamo il parametro 'dealerScore' e voglio sapere il suo valore,
            // verrà eseguita la funzione, e il suo valore sarà calcolato dinamicamente.
            return this.dealerCards.reduce((total, card) => total + card.score, 0); 
            // semplice: prende le carte presenti in dealerCards e, tramite una lambda,
            // fa la somma del valore delle carte, che sarà poi il valore restituito come dealerScore.
        }
    });
}

Dealer.prototype.addCard = function(card) {
    this.dealerCards.push(card); 
};
