$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();

    var inputArray = userInput.split(" ");

    console.log(inputArray);

    var shortArray = [];

    inputArray.forEach(function(input){
      if(input.length >= 3){
        shortArray.push(input);
      }
    });

  //   inputArray.map(function(word) {
  //     if(word.length >= 3){
  //       return word;
  //     } else {
  //     return;
  //   }
  // });

    console.log(shortArray);

  });
});
