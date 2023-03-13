//function doubleIt(arr){
//    let newArr = [];
//    arr.forEach(function(value){
//        newArr.push(value * 2);
//    });
//    return newArr;
//}

//function onlyEvens(arr){
//  let newArr = []
//  arr.forEach(function(value){
//    if (value % 2 === 0){
//      newArr.push(value)
//    }
//  });
//  return newArr;
//}

//function firstAndLast(arr){
//  let newArr = [];
//  arr.forEach(function(value){
//    newArr.push(value[0] + value[value.length/1 || value[value.length - //1]])
//  })
//  return newArr;
//}

//function addKeyValue(array,key,value){
//  array.forEach(function(value){
//    value[key] = value;
//    });
//    return array;
//}

//function countVowels(str) {
//  let count = 0;
//  const vowels = ['a', 'e', 'i', 'o', 'u'];
//  for (let i = 0; i < str.length; i++) {
//    if (vowels.includes(str[i].toLowerCase())) {
//      count++;
//    }}
//  return count;}

//function countVowels(str) {
 // let count = 0;
 // const vowels = ['a', 'e', 'i', 'o', 'u'];
// str.split('').forEach(char => {
 //   if (vowels.includes(char.toLowerCase())) {
 //     count++;
 //   }
 // });
// return count;
//}

//function doubleValuesWithMap(arr){
//    return arr.map(funtion(value){
//        return value * 2;
//    })
//}

//function valueTimesIndex(arr){
//    return arr.map(funtion(value,index) {
//        return value[key];
//    })
//}

//function extractFullName(arr){
//    return arr.map(value){
//        return value.first + '' + value.last
 //   });
//}

//function filterByValue(arr, key) {
//   return arr.filter(function(val) {
 //     return val[key] !== undefined || val[key] !== null;
  //  });
 // }

//function find(arr,search){
//    return arr.filter(function(value){
 //       return value === search;
//    })[0] //confused why this is needed in the function itself
//}

//function doubleOddNumbers(arr) {
//    return arr
//      .filter(function(val) {
 //       return val % 2 !== 0;
 //     })
 //     .map(function(val) {
 //       return val * 2;
 //     });
 //   }

 //function removeVowels(string) {
  //  const vowels = "aeiou";
  //  return string
  //    .toLowerCase()
  //    .split("")
  //    .filter(function(val) {
  //      return vowels.indexOf(val) === -1;
 //     })
 // }
  