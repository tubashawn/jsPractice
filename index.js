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

  //constructor creation and invocation

function Dog(name, color) {

  this.name = name,

  this.color = color,

  this.numLegs = 4 //this would better fit as a prototype property VVVV   to use less memory

}

 

//Dog.prototype.numLegs = 4;

let terrier = new Dog("Luna", "dapple");

 

 

//add prototype props, checks for own/prototype props

function Dog(name) {

  this.name = name;

}

 

Dog.prototype.numLegs = 4;

 

//for multiple prototype properties, just define the prototype like a normal object

Dog.prototype = {

  constructor : Dog, //when doing this, the constructor proprty must manually be entered. Otherwise, there is no more constructor property

  numLegs : 4,

  eat : function() {

    console.log("nom nom nom");

  },

  describe : function() {

    console.log("I am called " + this.name);

  }

};

 

let beagle = new Dog("Snoopy");

 

let ownProps = [];

let prototypeProps = [];

 

// Add your code below this line

 

for (let property in beagle) {

  if(beagle.hasOwnProperty(property)) {

    ownProps.push(property)

  } else {

    prototypeProps.push(property)

  }

}

 

//use instanceof to compare to defined constructor. Use constructor to compare unknown constructors. VVVV

 

function Dog(name) {

  this.name = name;

}

 

function joinDogFraternity(candidate) {

  if (candidate.constructor === Dog) {

    return true;

  } else {

    return false;

  }

}

 

//another way to check if object is part of prototype/constructor

Dog.prototype.isPrototypeOf(beagle);

 

//When creating an object off a prototype, use //Object.create(obj.prototype);

let beagle = Object.create(Animal.prototype); // Change this line

 

//Or if creating a subtype prototype so additional sub inheritances can be set up

Dog.prototype = Object.create(Animal.prototype);

 

//The constructor property does need to be manually reset in this instance

Dog.prototype.constructor = Dog;

 

//Here it is all together, with additional properties being added individually

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {

    console.log("Woof!");

}

 

//mixins allow you to add shared properties in unrelated objects

let bird = {

  name: "Donald",

  numLegs: 2

};

 

let boat = {

  name: "Warrior",

  type: "race-boat"

};

 

let glideMixin = function(obj) {

    obj.glide = function() {

        console.log("I'm gliding!");//both console.log and return create weird data, look into this.

    }

}

 

glideMixin(bird);

glideMixin(boat);

 

console.log(bird.glide);

console.log(boat.glide);

 

// closures allow object properties to be private (immutable) by setting a variable with the value instead of the property:key pair. A newproperty is then created that can access the variable.

function Bird() {

  let weight = 15;

  this.getWeight = function() {

    return weight;

  }

}

 

bird.getWeight(); //returns 15

 

//IIFE imediately invoked function expression - not sure on why

//wrap an anonymous function is parentheses, follow it with the //invocation (); the function will immediately happen.

(function () {

  console.log("I don't understand IIFE's");

})();

 

//A module using IIFE, I understand the objective, not the process

 

let funModule = (function() {

  return {

    isCuteMixin: function(obj) {

      obj.isCute = function() {

        return true;

      };

    },

    singMixin: function(obj) {

      obj.sing = function() {

        console.log("Singing to an awesome tune");

      };

    }

  }

})();