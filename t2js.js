const quizData = [
{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyperlinks and Text Markup Language",
"High Text Machine Language"
],
answer:0
},
{
question:"Which language is used for styling web pages?",
options:["Python","Java","CSS","C++"],
answer:2
},
{
question:"Which language runs inside the browser?",
options:["Java","Python","JavaScript","C"],
answer:2
},
{
question:"What does CSS stand for?",
options:[
"Computer Style Sheets",
"Creative Style Sheets",
"Cascading Style Sheets",
"Colorful Style Sheets"
],
answer:2
},
{
question:"Which company developed JavaScript?",
options:["Microsoft","Google","Netscape","Apple"],
answer:2
}
];

let currentQuestion=0;
let score=0;
let selectedAnswer=null;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");

function loadQuestion(){

selectedAnswer=null;

question.innerText=`${currentQuestion+1}. ${quizData[currentQuestion].question}`;

answers.innerHTML="";

quizData[currentQuestion].options.forEach((option,index)=>{

const btn=document.createElement("button");
btn.innerText=option;
btn.classList.add("option");

btn.onclick=()=>{
selectedAnswer=index;

document.querySelectorAll(".option").forEach(b=>b.classList.remove("selected"));
btn.classList.add("selected");
};

answers.appendChild(btn);

});

}

nextBtn.onclick=()=>{

if(selectedAnswer===null){
alert("Please select an answer!");
return;
}

if(selectedAnswer===quizData[currentQuestion].answer){
score++;
}

currentQuestion++;

if(currentQuestion<quizData.length){
loadQuestion();
}
else{
showResult();
}

};

function showResult(){

document.getElementById("quiz").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

document.getElementById("score").innerHTML=
`You scored <strong>${score}</strong> out of <strong>${quizData.length}</strong><br><br>
Percentage: <strong>${((score/quizData.length)*100).toFixed(0)}%</strong>`;

}

loadQuestion();