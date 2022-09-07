let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//slice
//positive index means start left end, negative index means offset from right end. In both cases, traversal is from left to right.
//end index element is excluded - slice(2,4) will return elements at indices 2 and 3. Index 4 is excluded.
//No end index means travsering till the end of the array from the provided start index.
var slicedArray = originalArray.slice(-2);
//console.log(slicedArray); //[9,10]

//filter
//value is the element
//index is the index of the element.
//arr is a copy of the original array.
//returns all the elements of the array that satisfy the given predicate.
let filteredArray = originalArray.filter((value, index, arr) => {
  return value % 2 == 0;
});
//console.log(filteredArray); //[2,4,6,8,10]

//map
//value is the element.
//index is the index of the element.
//arr is a copy of the original array.
//returns exactly what we return (and not the elements from the original array that satisfy the condition).
let mappedArray = originalArray.map((value, index, arr) => {
  return value + 1;
});
//console.log(mappedArray); //[2,3,4,5,6,7,8,9,10,11]

//find
//value is the element.
//index is the index of the element.
//arr is a copy of the original array.
//Returns the first occurence of the array that satisfies the condition.
let foundArrayElement = originalArray.find((value, index, arr) => {
  return value > 3;
});
//console.log(foundArrayElement); //4

//foreach
//value is the element.
//index is the index of the element.
//arr is a copy of the original array.
//simple foreach loop. Does not return anything.
originalArray.forEach((value, index, arr) => {
  // console.log(value);
}); //[1,2,3,4,5,6,7,8,9,10]

//some
//value is the element.
//index is the index of the element.
//arr is a copy of the original array.
//checks if any of the elements in the array satisfy the condition and returns true else false.
let someArrayFlag = originalArray.some((value, index, arr) => {
  return value > 5;
});
//console.log(someArrayFlag); //true

//every
//value is the element.
//index is the index of the element.
//arr is a copy of the original array.
//checks if all of the elements in the array satisfy the condition and returns true else false.
let everyArrayFlag = originalArray.every((value, index, arr) => {
  return value > 5;
});
//console.log(everyArrayFlag); //false

//reduce
//prevTotal is initialised to 0. At every index, it holds the aggregate returned value up till the current index.
//value is the element.
//index is the index of the element.
//arr is a copy of the original array.
let reducedArrayTotal = originalArray.reduce((prevTotal, value, index, arr) => {
  return value + prevTotal;
});
//console.log(reducedArrayTotal); //55

//includes
//first parameter is the search element.
//second parameter is the start index from where search is to begin.
let includedArrayElementFlag = originalArray.includes(2, 1);
//console.log(includedArrayElementFlag); //true

//splice
//only Array method that affects/modifies the original array.
//first parameter is the start index from where deletion is to begin.
//second parameter is the number of elements to be deleted.
//after the second parameter, the next parameters are the values(as many as we want) to be inserted in the place of the deleted items.
let splicedArray = originalArray.splice(1, 7, 11, 12);
//console.log(splicedArray); //[2,3,4,5,6,7,8]
//console.log(originalArray); //[1,11,12,9,10]
