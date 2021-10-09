var total = document.getElementById("Total").textContent;
console.log(Math.floor(total));

document.getElementById("StartBtn").addEventListener("click", function() {
    var Her = Math.floor(Math.random() * 25) + 1;
    document.getElementById("Hiragana").src = `../../img/Hirag/H- Dakuon/${Her}.png`;
    document.getElementById("Hint").src = `../../img/Hirag/D-Dakuon Romaji/${Her}.png`;
    document.getElementById("Total").textContent = ++total;
    console.log(Her);
});

document.getElementById("RestartBtn").addEventListener("click", function() {
    // document.getElementById("Hiragana").src = `../../img/Hirag/Hiragana/0.png`;
    // document.getElementById("Total").textContent = 0;
    window.location.reload();
});