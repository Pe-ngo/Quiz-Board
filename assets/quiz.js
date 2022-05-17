function studentScore(){
    //  alert("Excellent")

    var question1=document.theForm.q1.value;
    var question2=document.theForm.q2.value;
    var question3=document.theForm.q3.value;
    var question4=document.theForm.q4.value;
    var question5=document.theForm.q5.value;
    var result= 0;


    if(question1=="A"){result++}
    if(question2=="C"){result++}
    if(question3=="C"){result++}
    if(question4=="B"){result++}
    if(question5=="C"){result++}


    var finalScore=result*20;
    if (finalScore>=80){
        displaytheForm.innerHTML="Your score" + finalScore + "%"
    }

    else if(finalScore>=50 && finalScore<80){
        displaytheForm.innerHTML="Your score" + finalScore + "%" 
    }

    else if(finalScore<50){
        displaytheForm.innerHTML="Your score" + finalScore + "%"
    }

}

function tutorComments(){
    
    var displayComments=document.getElementById("checkComments")
    if (finalScore>=80){
        displayComments.innerHTML="Excellently passed"
    }
    
    else if(finalScore>=50 && finalScore<80){
        displayComments.innerHTML="Fairly passed"
    }
    
    else if(finalScore<50){
        displayComments.innerHTML="Scored poorly" + " " + "Retake test"
    }
}