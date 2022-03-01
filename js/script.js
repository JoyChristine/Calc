// var add = function(number1,number2){
//     return number1 + number2;
// };
// var number1 = parseInt(prompt("Enter a number1: "));
// var number2 = parseInt(prompt("Enter a number2: "));
// var result = add(number1, number2);
// alert(result);

// BMI
// var weight = prompt("What's your weight? ");
// var height = prompt("Whats your height in Meters? ");

// var formula = (weight,height) => {
//     return weight / (height * height);
// }
// var bmi = (weight, height) => {
//     var calc = formula (weight, height);
//     if (calc <= 18) {
//         return "you are thin";
             
//     }else if(calc > 18 && calc <= 25 ){
//         return "normal";

//     }else if ( calc >25 && calc <=30){
//         return "overweight";

//     }else if (calc > 30) {
//         return "obese";
//     }
   
// };

// alert (bmi (weight,height));


// right triangle
// var l1 = parseInt(prompt("Enter a number1: "));
// var l2 = parseInt(prompt("Enter a number2: "));
// var l3 = parseInt(prompt("Enter a number3: "));

// const isRight = (a,b,c) => {
//     const case1 = (a*a) === (b*b) + (c*c);
//     const case2 = (b*b) === (a*a) + (c*c);
//     const case3 = (c*c) === (b*b) + (a*a);
//     return case1 || case2 || case3;
// };

// alert(isRight(l1,l2,l3));

// var l1 = parseInt(prompt("Enter a number1: "));
// var l2 = parseInt(prompt("Enter a number2: "));
// var l3 = parseInt(prompt("Enter a number3: "));
//  var scalene = (a,b,c) => {

//     const case1 = (a!=b) && (a!=c) && (b!=c) ;
//     const case2 = (a===b) && (b===c) ;
    
    
//     return case1 || case2;
// //     if(a === b && b === c) return no;
// //     else if (a === b || a === c || b === c) return scal;
// //     else(console.log (number));
// //  
// }
//  alert(scalene(l1,l2,l3));


var a = parseInt(prompt("Enter a number1: "));
var b = parseInt(prompt("Enter a number2: "));
var c = parseInt(prompt("Enter a number3: "));
function getTriangleType(a,b,c) {
    if(a === b && b === c){
        alert ("equi");
    }
    if (a === b && b!=c && a!=c) {
        alert("isosceles");
    }
    if (a!=b && b!= c && a!=c){
        alert("scalene");
    }
};
 alert(getTriangleType(a,b,c));
// function getTriangleType(a,b,c) {
// 	return (a === b && b === c) && 'equilateral' ||
// 		(a === b || a === c || b === c) && 'isosceles' ||
// 		'scalene';
// }

// // if (sideA == sideB && sideB == sideC) {
//     alert("Equalateral");
//     }
//     if (sideA == sideB && != sideC) {
//     alert("Isosceles");
//     }
//     if (sideA != sideB == sideC) {
//     alert("Isosceles");
//     }
//     if (sideA != sideB != sideC != sideA) {
//     alert("Scalene!");
//     }

// alert(getTriangleType(a,b,c));