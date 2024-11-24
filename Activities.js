function delayBtn(btnHit, btnStop, btnStand, btnRestart){
    setTimeout(() => {
        btnHit.disabled = false;
        btnStop.disabled = false;
        btnStand.disabled = false;
        btnRestart.disabled = false;
    }, 4000);
}
function deactivateBtn(btnHit, btnStop, btnStand, btnRestart){
    btnHit.disabled = true;
    btnStop.disabled = true;
    btnStand.disabled = true;
    btnRestart.disabled = true;
}

