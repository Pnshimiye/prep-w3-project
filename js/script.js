
var answerQuestionOne;
var answerQuestionTwo;
var answerQuestionThree;
var answerQuestionFour;
var answerQuestionFive;

 var markOne;
 var markTwo;
 var markThree;
 var markFour;
//  var markFive;

 var totalResult;


$(document).ready(function(){
  $("input[type='button']").click(function(event){
      answerQuestionOne = $("input[name='qtn0']:checked").val();
      answerQuestionTwo = $("input[name='qtn1']:checked").val();
      answerQuestionThree = $("input[name='qtn2']:checked").val();
      answerQuestionFour = $("input[name='qtn3']:checked").val();
      // answerQuestionFive = $("input[name='qtn4']:checked").val();

    
      if(answerQuestionOne === "right"){
        markOne=2;
      }
      else{
        markOne=0;
      }


      if(answerQuestionTwo === "right"){
        markTwo=2;
      }
      else{
        markTwo=0;
      }


      if(answerQuestionThree === "right"){
        markThree=2;
      }
      else{
        markThree=0;
      }



      if(answerQuestionFour === "right"){
        markFour=2;
      }
      else{
        markFour=0;
      }
      // if(answerQuestionFive === "right"){
      //   markFive=2;
      // }
      // else{
      //   markFive=0;
      // }

      // totalResult=markOne+markTwo+markThree+markFour+markFive
      
      $("#output").text("Your score is "+totalResult+" out of 10");


 });
});
