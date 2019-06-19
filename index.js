//string repeater

function repeatStringNumTimes(str, num) {

  let repeat = "";

  for (let i = 0; i < num; i++) {

    repeat = repeat + str;

  }

  return repeat;

}

 

repeatStringNumTimes("abc", 3);

 

//string repeater w recursion

function repeatStringWithRecursion(str, num) {

  if (num === 0) { return "" }

  return str + repeatStringWihRecursion(str, num - 1);

}

 

// es6 repeater

function es6repeater(str, num) {

  return num > 0 ? str.repeat(num) : '';

}

 

//string truncator

function truncateString(str, num) {

 

  if (str.length > num) {

    return str.slice(0, num) + "...";

  }

  return str;

}

 

truncateString("A-tisket a-tasket A green and yellow basket", 8);

 

//ternary truncator

 

function truncateString(str, num) {

  return str.length > num ? str.slice(0, num) + "..." : str;

}

 

//number returner

function findElement(arr, func) {

 

  for (let i = 0; i < arr.length; i++) {

    let num = arr[i];

    if(func(num)) {

      return num;

    }

  }

}

 

findElement([1, 2, 3, 4], num => num % 2 === 0);

 

//boolean tester

function booWho(bool) {

  return typeof bool === "boolean";

}

 

booWho(null);

 

//Uppercase first letters function - ES6, regex

function titleCase(str) {

  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());

}

 

titleCase("I'm a little tea pot");

 

//array splicer - original arrays remain intact

function frankenSplice(arr1, arr2, n) {

  let sliced2 = arr2.slice(0);

  sliced2.splice(n , 0, ...arr1);

  return sliced2;

}

 

//boolean remover - removes booleans from arrays

function bouncer(arr) {

  return arr.filter(Boolean);

}

 

bouncer([7, "ate", "", false, 9]);

 

 

//sorter, with insertion

function getIndexToIns(arr, num) {

  arr.sort(function(a, b) {

    return a - b;

  });

 

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] >= num)

      return i;

  } return arr.length;

}

 

 

getIndexToIns([40, 60], 50);

//Array separator

function chunkArrayInGroups(arr, size) {

    let chunkedArray = [];
  
    for (let i = 0; i < arr.length; i += size) {
  
      chunkedArray.push(arr.slice(i, i + size))
  
    }
  
    return chunkedArray;
  
  }
  
   
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);