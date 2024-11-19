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

    btnStart.addEventListener("click", function () {
        
        let deck = new Deck();
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

        let card4 = deck.draw();
        let img4 = document.createElement("img");
        img4.src = `images/${card4.image}`;

        setTimeout(() => {
            playerCards.appendChild(img1); 
        }, 500); 

        setTimeout(() => {
            dealerCards.appendChild(img2); 
        }, 1500); 

        setTimeout(() => {
            playerCards.appendChild(img3); 
        }, 2800); 

        setTimeout(() => {
            dealerCards.appendChild(img4); 
        }, 3600);

        btnStart.disabled = true;

        setTimeout(() => {
            btnRestart.disabled = false;
        }, 3700)
        
        setTimeout(() => {
            btnStop.disabled = false;
        }, 3700)
        
        setTimeout(() => {
            let totalDealerScore = card2.score + card4.score;
            const dScore = document.createElement("p");
            dScore.id = ("dScore");
            dScore.textContent = totalDealerScore;
            dealerScore.appendChild(dScore);
        }, 3800)
        
        setTimeout(() => {
            let totalPlayerscore = card1.score + card3.score;
            const pScore = document.createElement("p");
            pScore.id = ("pScore");
            pScore.textContent = totalPlayerscore;
            playerScore.appendChild(pScore);
        }, 3800)

    });

    btnRestart.addEventListener("click", function () {

        btnStop.disabled = true;

        setTimeout(() => {
            btnStop.disabled = false;
        }, 3700)
        
        playerCards.innerHTML = ""; 
        dealerCards.innerHTML = ""; 

        let totalDealerScore = 0;
        let totalPlayerscore = 0;
        dealerScore.innerHTML = "";
        playerScore.innerHTML = "";
        
        
        let deck = new Deck();
        deck.shuffle();
         
        const card1 = deck.draw();
        const img1 = document.createElement("img");
        img1.src = `images/${card1.image}`;

        const card2 = deck.draw();
        const img2 = document.createElement("img");
        img2.src = `images/${card2.image}`;

        const card3 = deck.draw();
        const img3 = document.createElement("img");
        img3.src = `images/${card3.image}`;

        const card4 = deck.draw();
        const img4 = document.createElement("img");
        img4.src = `images/${card4.image}`;

        setTimeout(() => {
            playerCards.appendChild(img1); 
        }, 500); 

        setTimeout(() => {
            dealerCards.appendChild(img2); 
        }, 1500); 

        setTimeout(() => {
            playerCards.appendChild(img3);
        }, 2800); 

        setTimeout(() => {
            dealerCards.appendChild(img4); 
        }, 3600); 

        setTimeout(() => {
            totalDealerScore = card2.score + card4.score;
            const dScore = document.createElement("p");
            dScore.id = ("dScore");
            dScore.textContent = totalDealerScore;
            dealerScore.appendChild(dScore);
        }, 3800)

        setTimeout(() => {
            totalPlayerscore = card1.score + card3.score;
            const pScore = document.createElement("p");
            pScore.id = ("pScore");
            pScore.textContent = totalPlayerscore;
            playerScore.appendChild(pScore);
        }, 3800)

        btnStart.disabled = true;
        btnRestart.disabled = false;
    });
    
    btnStop.addEventListener("click", function () {

        let totalDealerScore = 0;
        let totalPlayerscore = 0;
        dealerScore.innerHTML = "";
        playerScore.innerHTML = "";

        playerCards.innerHTML = "";
        dealerCards.innerHTML = ""; 
        btnStart.disabled = false;
        btnRestart.disabled = true;
    });

};

document.addEventListener("DOMContentLoaded", start);