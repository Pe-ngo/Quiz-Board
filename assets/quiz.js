function studentScore(){

    var question1=document.theForm.Q1.value;
    var question2=document.theForm.Q2.value;
    var question3=document.theForm.Q3.value;
    var question4=document.theForm.Q4.value;
    var question5=document.theForm.Q5.value;
    var result= 0;


    if(question1=="A"){result++}
    if(question2=="C"){result++}
    if(question3=="C"){result++}
    if(question4=="B"){result++}
    if(question5=="C"){result++}


    var finalScore=result*20;
    if (finalScore>=80){
        displayForm.innerHTML= "Student Score" + " " + finalScore + "%" + " " + "Excellently passed"
    }

    else if(finalScore>=50 && finalScore<80){
        displayForm.innerHTML= "Student Score" + " " + finalScore + "%" + " " + "Fairly passed"
    }

    else if(finalScore<50){
        displayForm.innerHTML= "Student Score" + " " + finalScore + "%" + " " + "Scored poorly" + " " + "retake test"
    }

}
