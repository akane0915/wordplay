$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();

    var inputArray = userInput.split(" ");

    console.log(inputArray);




  });
});
