function studentScore(){
    alert("Excellent")
}

var question1=document.theForm.q1.value;
var question2=document.theForm.q2.value;
var question3=document.theForm.q3.value;
var question4=document.theForm.q4.value;
var question5=document.theForm.q5.value;
var question6=document.theForm.q6.value;
var question7=document.theForm.q7.value;
var question8=document.theForm.q8.value;
var question9=document.theForm.q9.value;
var question10=document.theForm.q10.value;
var result= 0;


var displaytheForm=document.getElementById("displaytheForm")
var display=document.getElementById("display")
display.style.display="visible"


if(question1=="A"){result++}
if(question2=="A"){result++}
if(question3=="A"){result++}
if(question4=="A"){result++}
if(question5=="A"){result++}
if(question6=="A"){result++}
if(question7=="A"){result++}
if(question8=="A"){result++}
if(question9=="A"){result++}
if(question10=="A"){result++}


if(question1=="" || question2=="" || question3=="" || question4=="" || question5=="" || question6=="" || question7=="" || question8=="" || question9=="" || question10==""){
    alert("Answer All")
}