$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    var inputArray = userInput.split(" ");
    // var shortArray = []; //3 or more letters

    // inputArray.forEach(function(input){
    //   if(input.length >= 3){
    //     shortArray.push(input);
    //   }
    // });

  var shortArray = inputArray.filter(function(value){
        return value.length >= 3;
        //returns either true or false
        //if true, the current element is added to shortArray
        //if false, the current element is filtered from the array
    });

    var newString = shortArray.reverse().join(" ");

    $("#output1").append("This is your sentence in an array: " + inputArray);
    $("#output2").append("This is the same array with words 3 or more letters and reversed: " + shortArray);
    $("#output3").append("Now we've turned it back into a string: " + newString);
});
