P1_name = localStorage.getItem("NP1");
P2_name = localStorage.getItem("NP2");
p1_score = 0;
p2_score = 0;

document.getElementById("P1_name").innerHTML = P1_name;
document.getElementById("P2_name").innerHTML = P2_name;

document.getElementById("Score_P1_name").innerHTML = " : " +p1_score;
document.getElementById("Score_P2_name").innerHTML = " : " +p2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + P1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + P2_name;

function send() {
   No1 = document.getElementById("N1").value;
   No2 = document.getElementById("N2").value;
   operation = "x";
   operation = document.getElementById("Symbol_input").value;

if(operation == "x"){
   correct_ans = parseInt(No1) * parseInt(No2);
} 
   else if(operation == "+"){
      correct_ans = parseInt(No1) + parseInt(No2); 
   }
   else if(operation == "-"){
      correct_ans = parseInt(No1) - parseInt(No2); 
   }
   else{
      correct_ans = parseInt(No1) / parseInt(No2); 
   }

   question = '<h4>'+ No1 + document.getElementById("Symbol_input").value + No2 + '</h4>' ;
   ans_box = '<br> Answer : <input type="text" id="input_check_box">' ;
   check_btn = '<br><br> <button class="btn btn-danger" id="check_btn" onclick="check()">Check</button>' ;
   Row = question + ans_box + check_btn ;

   document.getElementById("output").innerHTML = Row ;
   document.getElementById("No1").value = "";
   document.getElementById("No2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
   input_ans = document.getElementById("input_check_box").value;

   if(input_ans == correct_ans){

   if(answer_turn == "player1"){
      p1_score = p1_score + 1;
      document.getElementById("Score_P1_name").innerHTML = " : " +p1_score; 
   }
   if(answer_turn == "player2"){
      p2_score = p2_score + 1;
      document.getElementById("Score_P2_name").innerHTML = " : " +p2_score; 
   }
}

if(question_turn == "player1"){
   question_turn = "player2";
   document.getElementById("question_turn").innerHTML = "Question Turn - " + P2_name;
}
else {
   question_turn = "player1";
   document.getElementById("question_turn").innerHTML = "Question Turn - " + P1_name;
}
if(answer_turn == "player1"){
   answer_turn = "player2";
   document.getElementById("answer_turn").innerHTML = "Answer Turn - " + P2_name;
}
else {
   answer_turn = "player1";
   document.getElementById("answer_turn").innerHTML = "Answer Turn - " + P1_name;
}
document.getElementById("output").innerHTML = "";
}