var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Sort the numbers in descending order (10, 9, 8, 7, etc).
var sortedNums = integers.sort(function(first, second) {
	return second - first;
}) //[29, 25, 21, 20, 18, 13, 12, 11, 8, 7, 6, 3, 2, 1]
console.log("Reverse Array", sortedNums);

//Remove any integers greater than 19.
var filteredNums = integers.filter(function(item) {
	return item > 19;
}) //[29, 25, 21, 20]
console.log("Filtered greater than 19", filteredNums);

//Multiply each remaining number by 1.5 and then subtract 1.
var changeNums = integers.map(function(num) {
	return num * 1.5 - 1;
}) //[42.5, 36.5, 30.5, 29, 26, 18.5, 17, 15.5, 11, 9.5, 8, 3.5, 2, 0.5]
console.log("Multiply and Subtract", changeNums);

//Then output (either in the DOM or the console) the sum of all the resulting numbers.
var sum = integers.reduce(function(a, b) {
	return a + b;
})
console.log("Reduce", sum);