function start() {
    const btnStart = document.getElementById("start");
    const btnRestart = document.getElementById("restart");
    const btnHit = document.getElementById("hit");
    const btnStand = document.getElementById("stand");
    const btnStop = document.getElementById("tableFlip");
    const dealerCards = document.getElementById("dealerCards");
    const playerCards = document.getElementById("playerCards");
    const dealerScore = document.getElementById("dealerScore");
    const playerScore = document.getElementById("playerScore");
    let player, dealer, deck;
    var pScore = document.createElement("p");
    var dScore = document.createElement("p");
    var img1 = document.createElement("img1");
    var img2 = document.createElement("img2");
    var img3 = document.createElement("img3");
    var img4 = document.createElement("img4");
    
    btnStart.addEventListener("click", function () {
        btnStart.disabled = true;
        delayBtn(btnHit, btnStop, btnStand, btnRestart);

        player = new Player();  
        dealer = new Dealer();  
        deck = new Deck();      
        deck.shuffle();

        let card1 = deck.draw();
        img1 = document.createElement("img"); //PLAYER
        img1.src = `images/${card1.image}`;
        setTimeout(() => 
            playerCards.appendChild(img1), 1000); 
        let card2 = deck.draw();
        img2 = document.createElement("img"); //DEALER
        img2.src = `images/${card2.image}`;
        setTimeout(() => 
            dealerCards.appendChild(img2), 2000); 
        let card3 = deck.draw();
        img3 = document.createElement("img"); //PLAYER
        img3.src = `images/${card3.image}`;
        setTimeout(() => 
            playerCards.appendChild(img3), 3000); 
        img4 = document.createElement("img"); //DEALER BACK
        img4.src = `images/Deck-Back.png`;
        setTimeout(() => 
            dealerCards.appendChild(img4), 4000);

        setTimeout(() => {
            dealer.addCard(card2);
            dScore.textContent = dealer.totalScoreWithAce();
            dealerScore.appendChild(dScore);
        }, 4000);
        setTimeout(() => {
            player.addCard(card1);
            player.addCard(card3);
            const pScore = document.createElement("p");
            pScore.textContent = player.totalScoreWithAce();
            playerScore.appendChild(pScore);
        }, 4000);

    });

    btnRestart.addEventListener("click", function () {
        deactivateBtn(btnHit, btnStop, btnStand, btnRestart);
        delayBtn(btnHit, btnStop, btnStand, btnRestart);
        
        player.playerCards = [];
        dealer.dealerCards = [];
        playerCards.innerHTML = ""; 
        dealerCards.innerHTML = ""; 
        dealerScore.innerHTML = "";
        playerScore.innerHTML = "";

        deck = new Deck();      
        deck.shuffle();

        let card1 = deck.draw();
        img1 = document.createElement("img"); //PLAYER
        img1.src = `images/${card1.image}`;
        setTimeout(() => 
            playerCards.appendChild(img1), 1000); 
        let card2 = deck.draw();
        img2 = document.createElement("img"); //DEALER
        img2.src = `images/${card2.image}`;
        setTimeout(() => 
            dealerCards.appendChild(img2), 2000); 
        let card3 = deck.draw();
        img3 = document.createElement("img"); //PLAYER
        img3.src = `images/${card3.image}`;
        setTimeout(() => 
            playerCards.appendChild(img3), 3000); 
        img4 = document.createElement("img"); //DEALER BACK
        img4.src = `images/Deck-Back.png`;
        setTimeout(() => 
            dealerCards.appendChild(img4), 4000);

        setTimeout(() => {
            dealer.addCard(card2);
            dScore.textContent = dealer.totalScoreWithAce();
            dealerScore.appendChild(dScore);
        }, 4000);
        setTimeout(() => {
            player.addCard(card1);
            player.addCard(card3);
            const pScore = document.createElement("p");
            pScore.textContent = player.totalScoreWithAce();
            playerScore.appendChild(pScore);
        }, 4000);
    });
        
    //IF 21 DI PRIMA MANO HAI VINTO BRAVO SCEMO E BTNHIT DISABLED (BLACKJACK)

    btnHit.addEventListener("click", function () {
        if(player.totalScoreWithAce()<21){
        let card = deck.draw();
        player.addCard(card);
        let img = document.createElement("img");
        img.src = `images/${card.image}`;
        playerCards.appendChild(img);
        pScore.textContent = player.totalScoreWithAce();
        playerScore.innerHTML = "";
        playerScore.appendChild(pScore);
        }
        if(player.totalScoreWithAce()==21){
            btnHit.disabled = true;
            btnStand.disabled = true;
            pScore.textContent = `Hai fatto ${player.totalScoreWithAce()}! Hai vinto!...forse! `;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dealerCards.removeChild(img4);
            let card4 = deck.draw();
            dealer.addCard(card4);
            img4.src = `images/${card4.image}`;
            dealerCards.appendChild(img4);
            dScore.textContent = dealer.totalScoreWithAce();
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
            setTimeout(() => {
                while (dealer.totalScoreWithAce()<16) {
                    let card = deck.draw();
                    dealer.addCard(card);
                    let img = document.createElement("img");
                    img.src = `images/${card.image}`;
                    dealerCards.appendChild(img);
                    dScore.textContent = dealer.totalScoreWithAce();
                    dealerScore.innerHTML = "";
                    dealerScore.appendChild(dScore);
                }   
            }, 1000);
        }
        if(player.totalScoreWithAce()>21){
            btnHit.disabled = true;
            btnStand.disabled = true;
            pScore.textContent = `Hai sballato! Il tuo punteggio ${player.totalScoreWithAce()} e spera che il dealer sballi a sua volta!`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dealerCards.removeChild(img4);
            let card4 = deck.draw();
            dealer.addCard(card4);
            img4.src = `images/${card4.image}`;
            dealerCards.appendChild(img4);
            dScore.textContent = dealer.totalScoreWithAce();
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
            setTimeout(() => {
                while (dealer.totalScoreWithAce()<16) {
                    let card = deck.draw();
                    dealer.addCard(card);
                    let img = document.createElement("img");
                    img.src = `images/${card.image}`;
                    dealerCards.appendChild(img);
                    dScore.textContent = dealer.totalScoreWithAce();
                    dealerScore.innerHTML = "";
                    dealerScore.appendChild(dScore);
                }
            }, 1000);
            setTimeout(() => {
                if(dealer.totalScoreWithAce()<21 ){
                    pScore.textContent = `Hai perso! Il tuo punteggio ${player.totalScoreWithAce()}`;
                    playerScore.innerHTML = "";
                    playerScore.appendChild(pScore);
                    dScore.textContent = `Ho vinto! Il mio punteggio ${dealer.totalScoreWithAce()}`;
                    dealerScore.innerHTML = "";
                    dealerScore.appendChild(dScore);
                }else if (dealer.totalScoreWithAce()>21){
                    pScore.textContent = `Hai pareggiato! Il tuo punteggio ${player.totalScoreWithAce()}`;
                    playerScore.innerHTML = "";
                    playerScore.appendChild(pScore);
                    dScore.textContent = `Abbiamo pareggiato! Il mio punteggio ${dealer.totalScoreWithAce()}`;
                    dealerScore.innerHTML = "";
                    dealerScore.appendChild(dScore);
            }}, 1100);
        }
        });

    btnStand.addEventListener("click", function(){
        dealerCards.removeChild(img4);
        btnHit.disabled = true;
        btnStand.disabled = true;
        let card4 = deck.draw();
        dealer.addCard(card4);
        img4.src = `images/${card4.image}`;
        dealerCards.appendChild(img4);
        dScore.textContent = dealer.totalScoreWithAce();
        dealerScore.innerHTML = "";
        dealerScore.appendChild(dScore);
        setTimeout(() => {
            while (dealer.totalScoreWithAce()<16) {
                let card = deck.draw();
                dealer.addCard(card);
                let img = document.createElement("img");
                img.src = `images/${card.image}`;
                dealerCards.appendChild(img);
                dScore.textContent = dealer.totalScoreWithAce();
                dealerScore.innerHTML = "";
                dealerScore.appendChild(dScore);
            }
        }, 1000);
        setTimeout(() => {
        if(player.totalScoreWithAce()>dealer.totalScoreWithAce() && player.totalScoreWithAce()<=21){
            pScore.textContent = `Hai vinto! Il tuo punteggio ${player.totalScoreWithAce()}`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dScore.textContent = `Ho perso! Il mio punteggio ${dealer.totalScoreWithAce()}`;
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
        }else if(player.totalScoreWithAce()<dealer.totalScoreWithAce() && dealer.totalScoreWithAce()<=21){
            pScore.textContent = `Hai perso! Il tuo punteggio ${player.totalScoreWithAce()}`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dScore.textContent = `Ho vinto! Il mio punteggio ${dealer.totalScoreWithAce()}`;
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
        }else{
            pScore.textContent = `Hai pareggiato! Il tuo punteggio ${player.totalScoreWithAce()}`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dScore.textContent = `Abbiamo pareggiato! Il mio punteggio ${dealer.totalScoreWithAce()}`;
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
        }}, 1100);
    });
    
    btnStop.addEventListener("click", function () {
        player.playerCards = [];
        dealer.dealerCards = [];
        playerCards.innerHTML = ""; 
        dealerCards.innerHTML = ""; 
        dealerScore.innerHTML = "";
        playerScore.innerHTML = "";
        btnStart.disabled = false;
        btnRestart.disabled = true;
        btnStand.disabled = true;
        btnStop.disabled = true;
        btnHit.disabled = true;
    });
}

document.addEventListener("DOMContentLoaded", start);
