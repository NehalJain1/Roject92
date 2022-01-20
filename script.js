function login() {
    player1_name = document.getElementById("P1_input").value;
    player2_name = document.getElementById("P2_input").value;
    localStorage.setItem("NP1",player1_name);
    localStorage.setItem("NP2",player2_name);
    window.location = "game_page.html";
}