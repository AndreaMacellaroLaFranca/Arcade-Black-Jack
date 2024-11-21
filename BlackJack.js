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
    let player, dealer, deck; //il mio "amico" mi ha detto che le variabili devono essere inizializzate a livello globale fuori dagli eventi listener, e nei vari
    //event listener poi gli assegno agli oggetti stessi; cosi facendo in teoria, ora player1, dealer 1 e deck saranno sempre visti!!!
    var pScore = document.createElement("p");
    var dScore = document.createElement("p");
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    
    btnStart.addEventListener("click", function () {
        setTimeout(() => {
            btnStand.disabled = false;
        }, 4000);
        setTimeout(() => {
            btnHit.disabled = false;
        }, 4000);
        setTimeout(() => {
            btnRestart.disabled = false;
        }, 4000);
        
        setTimeout(() => {
            btnStop.disabled = false;
        }, 4000);

        player = new Player();  
        dealer = new Dealer();  
        deck = new Deck();      
        deck.shuffle();

        let card1 = deck.draw();
        img1 = document.createElement("img");
        img1.src = `images/${card1.image}`;

        let card2 = deck.draw();
        img2 = document.createElement("img");
        img2.src = `images/${card2.image}`;

        let card3 = deck.draw();
        img3 = document.createElement("img");
        img3.src = `images/${card3.image}`;

       
        img4 = document.createElement("img");
        img4.src = `images/Deck-Back.png`;

        setTimeout(() => 
            playerCards.appendChild(img1), 500); 
        setTimeout(() => 
            dealerCards.appendChild(img2), 1500); 
        setTimeout(() => 
            playerCards.appendChild(img3), 2800); 
        setTimeout(() => 
            dealerCards.appendChild(img4), 3600);

        btnStart.disabled = true;
        setTimeout(() => 
            btnRestart.disabled = false, 3700);
        setTimeout(() => 
            btnStop.disabled = false, 3700);

        setTimeout(() => {
            dealer.addCard(card2);
            dScore.textContent = dealer.dealerScore;
            dealerScore.appendChild(dScore);
        }, 3800);
        setTimeout(() => {
            player.addCard(card1);
            player.addCard(card3);
            const pScore = document.createElement("p");
            pScore.textContent = player.playerScore;
            playerScore.appendChild(pScore);
        }, 3800);
    });
    btnRestart.addEventListener("click", function () {
        btnRestart.disabled = true;
        btnStand.disabled = true;
        btnStop.disabled = true;
        btnHit.disabled = true;
        setTimeout(() => {
            btnRestart.disabled = false;
        }, 3800);
       
        setTimeout(() => {
            btnStop.disabled = false;
        }, 3800);
        setTimeout(() => {
            btnHit.disabled = false;
        }, 3800);
        setTimeout(() => {
            btnStand.disabled = false;
        }, 3800);
        player.playerCards = [];
        dealer.dealerCards = [];
        playerCards.innerHTML = ""; 
        dealerCards.innerHTML = ""; 
        dealerScore.innerHTML = "";
        playerScore.innerHTML = "";
        deck = new Deck();      
        deck.shuffle();
        let card1 = deck.draw();
        let img1 = document.createElement("img");
        img1.src = `images/${card1.image}`;
        let card2 = deck.draw();
        let img2 = document.createElement("img");
        img2.src = `images/${card2.image}`;
        let card3 = deck.draw();
        let img3 = document.createElement("img");
        img3.src = `images/${card3.image}`;
        img4 = document.createElement("img");
        img4.src = `images/Deck-Back.png`;
        setTimeout(() => 
            playerCards.appendChild(img1), 500); 
        setTimeout(() => 
            dealerCards.appendChild(img2), 1500); 
        setTimeout(() => 
            playerCards.appendChild(img3), 2800); 
        setTimeout(() => 
            dealerCards.appendChild(img4), 3600);
        setTimeout(() => 
            btnRestart.disabled = false, 3700);
        setTimeout(() => 
            btnStop.disabled = false, 3700);
        setTimeout(() => {
            dealer.addCard(card2);
            dScore.textContent = dealer.dealerScore;
            dealerScore.appendChild(dScore);
        }, 3800);
        setTimeout(() => {
            player.addCard(card1);
            player.addCard(card3);
            const pScore = document.createElement("p");
            pScore.textContent = player.playerScore;
            playerScore.appendChild(pScore);
        }, 3800);
        btnStart.disabled = true;
        btnRestart.disabled = true;
    });

    btnHit.addEventListener("click", function () {
        if(player.playerScore<21){
        let card = deck.draw();
        player.addCard(card);
        let img = document.createElement("img");
        img.src = `images/${card.image}`;
        playerCards.appendChild(img);
        pScore.textContent = player.playerScore;
        playerScore.innerHTML = "";
        playerScore.appendChild(pScore);
        }
        if(player.playerScore==21){
            btnHit.disabled = true;
            btnStand.disabled = true;
            pScore.textContent = `Hai fatto ${player.playerScore}! Hai vinto!...forse! `;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dealerCards.removeChild(img4);
            btnHit.disabled = true;
            btnStand.disabled = true;
            let card4 = deck.draw();
            dealer.addCard(card4);
            img4.src = `images/${card4.image}`;
            dealerCards.appendChild(img4);
            dScore.textContent = dealer.dealerScore;
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
            setTimeout(() => {
                while (dealer.dealerScore<16) {
                    let card = deck.draw();
                    dealer.addCard(card);
                    let img = document.createElement("img");
                    img.src = `images/${card.image}`;
                    dealerCards.appendChild(img);
                    dScore.textContent = dealer.dealerScore;
                    dealerScore.innerHTML = "";
                    dealerScore.appendChild(dScore);
                }   
            }, 1000);
        }
        if(player.playerScore>21){
            btnHit.disabled = true;
            btnStand.disabled = true;
            pScore.textContent = `Hai sballato! Il tuo punteggio ${player.playerScore} e spera che il dealer sballi a sua volta!`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dealerCards.removeChild(img4);
            let card4 = deck.draw();
            dealer.addCard(card4);
            img4.src = `images/${card4.image}`;
            dealerCards.appendChild(img4);
            dScore.textContent = dealer.dealerScore;
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
            setTimeout(() => {
                while (dealer.dealerScore<16) {
                    let card = deck.draw();
                    dealer.addCard(card);
                    let img = document.createElement("img");
                    img.src = `images/${card.image}`;
                    dealerCards.appendChild(img);
                    dScore.textContent = dealer.dealerScore;
                    dealerScore.innerHTML = "";
                    dealerScore.appendChild(dScore);
                }
            }, 1000);
            setTimeout(() => {
                if(dealer.dealerScore<21 ){
                    pScore.textContent = `Hai perso! Il tuo punteggio ${player.playerScore}`;
                    playerScore.innerHTML = "";
                    playerScore.appendChild(pScore);
                    dScore.textContent = `Ho vinto! Il mio punteggio ${dealer.dealerScore}`;
                    dealerScore.innerHTML = "";
                    dealerScore.appendChild(dScore);
                }else if (dealer.dealerScore>21){
                    pScore.textContent = `Hai pareggiato! Il tuo punteggio ${player.playerScore}`;
                    playerScore.innerHTML = "";
                    playerScore.appendChild(pScore);
                    dScore.textContent = `Abbiamo pareggiato! Il mio punteggio ${dealer.dealerScore}`;
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
        dScore.textContent = dealer.dealerScore;
        dealerScore.innerHTML = "";
        dealerScore.appendChild(dScore);
        setTimeout(() => {
            while (dealer.dealerScore<16) {
                let card = deck.draw();
                dealer.addCard(card);
                let img = document.createElement("img");
                img.src = `images/${card.image}`;
                dealerCards.appendChild(img);
                dScore.textContent = dealer.dealerScore;
                dealerScore.innerHTML = "";
                dealerScore.appendChild(dScore);
            }
        }, 1000);
        setTimeout(() => {
        if(player.playerScore>dealer.dealerScore && player.playerScore<=21){
            pScore.textContent = `Hai vinto! Il tuo punteggio ${player.playerScore}`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dScore.textContent = `Ho perso! Il mio punteggio ${dealer.dealerScore}`;
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
        }else if(player.playerScore<dealer.dealerScore){
            pScore.textContent = `Hai perso! Il tuo punteggio ${player.playerScore}`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dScore.textContent = `Ho vinto! Il mio punteggio ${dealer.dealerScore}`;
            dealerScore.innerHTML = "";
            dealerScore.appendChild(dScore);
        }else{
            pScore.textContent = `Hai pareggiato! Il tuo punteggio ${player.playerScore}`;
            playerScore.innerHTML = "";
            playerScore.appendChild(pScore);
            dScore.textContent = `Abbiamo pareggiato! Il mio punteggio ${dealer.dealerScore}`;
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
