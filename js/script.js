//  STEP 1: Initialize variables
// I have 9 variables
// var1= answer for q1
// var2= answer for q2
// var3= answer for q3
// var4= answer for q4
// r1= marks for q1
// r2= marks for q2 
// r3= marks for q3
// r4= marks for q4
// R=total result


var answerQuestionOne;
var answerQuestionTwo;
var answerQuestionThree;
var answerQuestionFour;

 var markOne;
 var markTwo;
 var markThree;
 var markFour;

 var totalResult;













// // STEP 2: 
// get value selected for q1.2.3.4
// store the value in var1.2,3,4


$(document).ready(function(){
  $("input[type='button']").click(function(event){
      answerQuestionOne = $("input[name='qtn0']:checked").val();
      answerQuestionTwo = $("input[name='qtn1']:checked").val();
      answerQuestionThree = $("input[name='qtn2']:checked").val();
      answerQuestionFour = $("input[name='qtn3']:checked").val();
    
      if(answerQuestionOne === "right"){
        markOne=2.5;
      }
      else{
        markOne=0;
      }


      if(answerQuestionTwo === "right"){
        markTwo=2.5;
      }
      else{
        markTwo=0;
      }


      if(answerQuestionThree === "right"){
        markThree=2.5;
      }
      else{
        markThree=0;
      }



      if(answerQuestionFour === "right"){
        markFour=2.5;
      }
      else{
        markFour=0;
      }

      totalResult=markOne+markTwo+markThree+markFour
      
      $("#output").text("Your score is "+totalResult+" out of 10");


      // alert(answerQuestionOne);



  });
});

// // STEP 6:
// test if var1=right 
//  if true r1=2.5
//  else r1=0




//  // STEP 7:
// test if var2=right 
// if true r2=2.5
// else r2=0


// // STEP 8:
// test if var3=right 
//  if true r3=2.5
//  else r3=0



//  // STEP 9:
// test if var4=right 
// if true r4=2.5
// else r4=0


// STEP 10:
// R=r1+r2+r3+r4
// output your score is R 
