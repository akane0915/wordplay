$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    var inputArray = userInput.split(" ");
    var shortArray = []; //3 or more letters

    inputArray.forEach(function(input){
      if(input.length >= 3){
        shortArray.push(input);
      }
    });

    var newString = shortArray.reverse().join(" ");
    $("#output").text(newString);
  });
});
