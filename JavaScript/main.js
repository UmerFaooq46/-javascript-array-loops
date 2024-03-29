// //=================question 01================================
// var Arr = [[0, 1, 2, 3]];

// for (let i = 0; i < Arr.length; i++) {
//     document.write(Arr[i].join(" ") + " ");
// }
// //=====================question 02==============================
//     var matrix = [
//     [10, 12],
//     [21, 10]
// ];
// document.write("<br>");
// for (let i = 0; i < matrix.length; i++) {
//     document.write(matrix[i].join(" ") + "<br>");
// // }
// // //================qustion 03===================================
// // for (var i = 1; i <= 10; i++) {
// //     document.write(i + "<br>");
// // }
// var userName= prompt("Enter a number for multipication table:") ||6;
// for( var i =1; i<= 10; i++){
//     document.write(userName + "x" +  i +  userName * i + "<br>")
// }
//========================question 04====================================

// var tableNumber = parseInt(prompt("Enter the table number:"));
// var tableLength = parseInt(prompt("Enter the length of the table:"));

// document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");
// document.write("<table border='1'>");

// for (var i = 1; i <= tableLength; i++) {
//     document.write("<tr>");
//     document.write("<td>" + tableNumber + " x " + i + " = </td>");
//     document.write("<td>" + (tableNumber * i) + "</td>");
//     document.write("</tr>");
// }

// document.write("</table>");

//========================question 05====================================

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// document.write("<h2>Items of the Array</h2>");
// document.write("<ul>");

// for (var i = 0; i < fruits.length; i++) {
//     document.write("<li>" + fruits[i] + "</li>");
// }

// document.write("</ul>");

//========================question 06====================================

// document.write("<h2>a. Counting: </h2>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h2>b. Reverse counting: </h2>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<h2>c. Even: </h2>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h2>d. Odd: </h2>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h2>e. Series: </h2>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

// //========================question 07====================================

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to umer fahad bakery! What item are you searching for?");


// userInput = userInput.toLowerCase();

// var found = false;

// for (var i = 0; i < A.length; i++) {
//     var currentItem = A[i].toLowerCase();

//     if (currentItem === userInput) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert("Yes, we have " + userInput + " in umer fahad bakery!");
// } else {
//     alert("Sorry, we don't have " + userInput + " in  umer fahad bakery.");
// }
// //========================question 08====================================
// var A = [24, 53, 78, 91, 12];
// var largestNumber = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i];
//     }
// }
// document.write("The largest number in the array is: " + largestNumber);

// //========================question 09====================================
//  var b = [24, 53, 78, 91, 12];
// var smallNumber = b[0];

// for (var i = 1; i < b.length; i++) {
//     if (b[i] > smallNumber) {
//         smallNumber = b[i];
//     }
// }
// document.write("The small number in the array is: " + smallNumber);
// // //========================question 10====================================
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i);
//     }
// }
