// var add = function(number1,number2){
//     return number1 + number2;
// };
// var number1 = parseInt(prompt("Enter a number1: "));
// var number2 = parseInt(prompt("Enter a number2: "));
// var result = add(number1, number2);
// alert(result);

// BMI
var weight = prompt("What's your weight? ");
var height = prompt("Whats your height in Meters? ");

var formula = (weight,height) => {
    return weight / (height * height);
}
var bmi = (weight, height) => {
    var calc = formula (weight, height);
    if (calc <= 18) {
        return "you are thin";
             
    }else if(calc > 18 && calc <= 25 ){
        return "normal";

    }else if ( calc >25 && calc <=30){
        return "overweight";

    }else if (calc > 30) {
        return "obese";
    }
   
};

alert (bmi (weight,height));