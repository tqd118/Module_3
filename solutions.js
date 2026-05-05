// 1. Jokes you've been 'awaiting' for ... promise

function sayJoke(apiUrl, jokeId) {
  return fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      if (!data || !Array.isArray(data.jokes)) {
        throw new Error(`No jokes at url: ${apiUrl}`);
      }
    
      const joke = data.jokes.find(j => j.id === jokeId);
    
      if (!joke) {
        throw new Error(`No jokes found id: ${jokeId}`);
      }

      return {
        saySetup() { return joke.setup; },
        sayPunchLine() { return joke.punchLine; }
      };
    });
}

// 2. Promises Made and Broken: The Misadventures of Bob the Highly Paid Consultant

async function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  // Get the current user's shopping cart
  await OrderAPI.getShoppingCartAsync(user).then(function(cart) {
    shoppingCart = cart;
  });
  
  // Also look up the ZIP code from their profile
  await CustomerAPI.getProfileAsync(user).then(function(profile) {
    zipCode = profile.zipCode;
  });
  
  // Calculate the shipping fees
  shippingRate = calculateShipping(shoppingCart, zipCode);
  
  // Submit the order
  OrderAPI.placeOrderAsync(shoppingCart, shippingRate).then(function(success) {
    orderSuccessful = success;
  });
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}

// 3. Nuclear Missile Manager

function launchAll(launchMissile) {
  for(let i = 0; i < 5; i++) {
    setTimeout(() =>  {
      launchMissile(i);
    }, i * 1000);
  }
}

// 4. A Promise is a Promise

function promiseHelloWorld() {
  // replace this nonsense with your Promise
  return new Promise((res, rej) => res("Hello World!"));
}

// 5. This isn't what you think! The Misadventures of Bob the Highly Paid Consultant #2

ShoppingCart.prototype.addButtonClicked = function(item) {
  // Check if there's any of the item available
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function({item, quantity}) {
  // If the item was in stock, add one to our cart
  if (quantity > 0) {
    this.addToCartAsync(item, 1, (success) => this.addButtonClicked2(success));
  }
};

ShoppingCart.prototype.addButtonClicked2 = function(success) {
  // If it was added to the cart, then refresh the display
  if (success) {
    var self = this;
    this.updateCartDisplayAsync(function(result) {
      self.addButtonClicked3(result);
    });
  }
};

ShoppingCart.prototype.addButtonClicked3 = function(success) {
  // Log the success or failure of our updates
  this.showMessage(`${success? "Successfully" : "Unsuccessfully"} added item to cart`);
};

// 6. Well, that's just (proto)typical! The Misadventures of Bob the Highly Paid Consultant #3

// Constructor function for shopping carts
function Cart(user) {
  this.user = user;
  this.cart = [];
}

// Prototype for shopping carts
Cart.prototype = {
  add: function(item) {
    this.cart.push(item);
  },
  
  remove: function(item) {
    this.cart = this.cart.filter(i => i.id !== item.id);
  },
  
  clear: function() {
    this.cart = [];
  },
  
  subtotal: function() {
    return this.cart.reduce( (sum, item) => sum + item.quantity * item.value, 0);
  },
  
  toString: function() {
    return this.cart.map( item => `${item.name}: ${item.quantity}@ ${item.value} ea.`).join("\n");  
  }
};

// 7. Training JS #37: Unlock new weapon---RegExp Object

function countAnimals(animals,count){
  return count.map(e => animals.split(e).length-1)
}

// 8. Training JS #38: Regular Expression--"^","$", "." and test()

function findSimilarity(str,word){
  const similar = new RegExp(`\\b${word[0]}.{${word.length - 2}}${word[word.length - 1]}\\b`, "g")
  return str.match(similar)?.join(" ") || "";
}

// 9. Training JS #39: Regular Expression--"?", "*", "+" and "{}"

var regex=/^-?9\d*0{4,}$/

// 10. Training JS #40: Regular Expression--"|", "[]" and "()"

var regex = /https?:\/\/[a-z0-9.]+\.(com|net)/gi;

// 11. Training JS #41: Regular Expression--"\"

var regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;

// 12. Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )

var regex = /\B(?=(\d{3})+(?!\d))/g;
function addCommas(money,reg){
  return money.replace(reg,x=>x+",");
}

// 13. Find all javascript files

function findAllJavascriptFiles(folder, callback) {
  handleFolder(folder).then(result => callback(result));
}

async function handleFolder(folder) {
  const size = await new Promise(resolve => folder.size(resolve));
  let files = [];

  for (let i = 0; i < size; i++) {
    const file = await new Promise(resolve => folder.read(i, resolve));

    if (typeof file === "object") {
      const nested = await handleFolder(file);
      files.push(...nested);
    } else if (/\.js$/.test(file)) {
      files.push(file);
    }
  }

  return files;
}

// 14. Color Ghost

let Ghost = function() {
  const colors = ["white", "yellow", "purple", "red"];
  this.color = colors[Math.floor(Math.random() * 4)];
};

// 15. Refactored Greeting

class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet(yourName) {
    return `Hello ${yourName}, my name is ${this.name}`;
  }
}

// 16. Building blocks

class Block{

  constructor([width, length, height]){
    this.width = width;
    this.length = length;
    this.height = height;
  }
  
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getHeight() {
    return this.height;
  }
  
  getVolume() {
    return this.width * this.length * this.height;
  }
  
  getSurfaceArea() {
    return (this.width * this.height + this.width * this.length + this.height * this.length) * 2;
  }
  
}

// 17. Basic subclasses - Adam and Eve

class God{
/**
 * @returns Human[]
 */
  static create(){
    return [new Man(), new Woman()]
  }
}

class Human {}
class Man extends Human {}
class Woman extends Human {}

// 18. FIXME: Get Full Name

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    let fullName = ""
    if (this.firstName) fullName += this.firstName; 
    if (this.firstName && this.lastName) fullName += " ";
    if (this.lastName) fullName += this.lastName; 
    return fullName;
  }
  
}

// 19. Who's Online?

const whosOnline = (friends) => {
  const online = friends.filter(f => f.status === "online" && f.lastActivity <= 10)
                   .map(f => f.username);
  const offline = friends.filter(f => f.status === "offline")
                    .map(f => f.username);
  const away = friends.filter(f => f.status === "online" && f.lastActivity > 10)
                 .map(f => f.username);
  
  let result = {};
  
  if (online.length) result.online = online;
  if (offline.length) result.offline = offline;
  if (away.length) result.away = away;
  
  return result;
}

// 20. Split The Bill

function splitTheBill(x) {
  const entries = Object.entries(x);
  const average = entries.reduce((a, b) => a + b[1], 0) / entries.length;

  const bill = entries.map(e => {
    return [e[0], correctNum(e[1] - average)]
  });
  
  return Object.fromEntries(bill);
}

function correctNum(num) {
  if (Number.isInteger(num)) {
    return num;
  }
  
  return Number(num.toFixed(2));
}

// 21. The Enigma Machine - Part 1: The Plugboard

class Plugboard {
  constructor(wires) {
    if (wires) {
      if (wires.length > 21) {
        throw new Error("Wires list is to long");
      }
    
      this.letterPairs = wires.match(/[A-Z]/g);
      
      if (this.letterPairs.length % 2 !== 0) {
        throw new Error("Not enought letters to make pairs");
      }
      
      if (wires !== Array.from(new Set(wires.split(""))).join("")) {
        throw new Error("Wires are mapped more then once");
      }
    } else {
      this.letterPairs = null;
    }
  }
  
  process(wire) {
    if (!this.letterPairs) {
      return wire;
    }
    
    const wireIndex = this.letterPairs.indexOf(wire);

    if (wireIndex % 2 === 0) {
      return this.letterPairs[wireIndex + 1];
    } else if (wireIndex != -1) {
      return this.letterPairs[wireIndex - 1];
    }
    
    return wire;
  }
}

// 22. "this" is a problem

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {...this, name: this.firstName + ' ' + this.lastName};
}

// 23. Ninja vs Samurai: Strike

let Warrior = function(name){
  this.name = name;  
  this.health = 100;
  
  this.strike = function(enemy, swings) {
   enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }
}

// 24. simple class

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  
  toString() {
    return `${this.name} is a ${this.type}`
  }
}

// 25. SantaClausable Interface

function isSantaClausable(obj) {
  const methodsList = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
  return methodsList.every((methodName) => typeof obj[methodName] === 'function');
}

// 26. Fun with ES6 Classes #1 - People, people, people

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName || "John";
    this.lastName = lastName || "Doe";
    this.age = age || 0;
    this.gender = gender || "Male";
  }
  
  sayFullName() {
    return this.firstName + " " + this.lastName;
  }
  
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

// 27. Fun with ES6 Classes #2 - Animals and Inheritance

// Get Coding :)

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// 28. Fun with ES6 Classes #3 - Cuboids, Cubes and Getters

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  get surfaceArea() {
    const {length, width, height} = this;
    return (length * width + length * height + width * height) * 2;
  }
  
  get volume() {
    const {length, width, height} = this;
    return length * width * height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}

// 29. Fun with ES6 Classes #4 - Cubes and Setters

class Cube {
  constructor(length) {
    this.length = length;
  }
  
  get surfaceArea() {
    return this.length ** 2 * 6;
  }
  
  set surfaceArea(area) {
    this.length = Math.sqrt(area / 6)
  }
  
  get volume() {
    return this.length ** 3;
  }
  
  set volume(volume) {
    this.length = Math.cbrt(volume);
  }
}

// 30. SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}

// 31. Fun with ES6 Classes #6 - Fake Files (Basic)

class File {
  #fullName = "";
  
  constructor(fullName, content) {
    this.#fullName = fullName;
    this.content = content;
  }
  
  get fullName() {
    return this.#fullName;
  }

  get filename() {
    return this.#fullName.split(".")
                         .slice(0, -1)
                         .join(".");
  }
  
  get extension() {
    return this.#fullName.split(".").at(-1);
  }

  getContents() {
    return this.content;
  }

  write(content) {
    if (this.content) {
      this.content += `\n${content}`;
    } else {
      this.content = content;
    }
  }

  #readerHelper() {
    let currentLine = 0;
    let currentChar = 0;
    
    const gets = () => {
      return this.content.split("\n")[currentLine++];
    }
    
    const getc = () => {
      return this.content[currentChar++];
    }
    
    return [gets, getc];
  }
  
  gets = this.#readerHelper()[0];
  getc = this.#readerHelper()[1];
}

// 32. PaginationHelper

class PaginationHelper {
 constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
 }
  
 itemCount() {
   return this.collection.length;
 }
  
 pageCount() {
   return Math.ceil(this.collection.length / this.itemsPerPage);
 }
  
 pageItemCount(pageIndex) {
    if (pageIndex >= this.pageCount() || pageIndex < 0 || !this.itemCount()) {
      return -1;
    }
    if (pageIndex === 0) {
      return Math.min(this.collection.length, this.itemsPerPage);
    }
    
    return Math.min(this.itemCount() - (this.itemsPerPage * pageIndex), this.itemsPerPage);
  }
  
 pageIndex(itemIndex) {
    if (itemIndex >= this.itemCount() || itemIndex < 0 || !this.itemCount()) {
      return -1;
    }
    
    const page = Math.ceil((itemIndex + 1) / this.itemsPerPage);
    
    return page ? page - 1 : 0;
 }
}

// 33. Array#reduce

Array.prototype.reduce = function(process, initial) {
  let acc = initial || this[0];
  let startIndex = initial ? 0 : 1;
  
  for (let i = startIndex; i < this.length; i++) {
    acc = process(acc, this[i], i, this);
  }
  return acc;
}

// 34. Calculating with objects

Num.prototype[Symbol.toPrimitive] = function(hint) {
  return +this.num;
}

// 35. Calculating with Functions

function zero(func) {
  if (func) {
    return Math.floor(eval(0 + func));
  }
  return 0;
}
function one(func) {
  if (func) {
    return Math.floor(eval(1 + func));
  }
  return 1;
}
function two(func) {
  if (func) {
    return Math.floor(eval(2 + func));
  }
  return 2;
}
function three(func) {
  if (func) {
    return Math.floor(eval(3 + func));
  }
  return 3;
}
function four(func) {
  if (func) {
    return Math.floor(eval(4 + func));
  }
  return 4;
}
function five(func) {
  if (func) {
    return Math.floor(eval(5 + func));
  }
  return 5;
}
function six(func) {
  if (func) {
    return Math.floor(eval(6 + func));
  }
  return 6;
}
function seven(func) {
  if (func) {
    return Math.floor(eval(7 + func));
  }
  return 7;
}
function eight(func) {
  if (func) {
    return Math.floor(eval(8 + func));
  }
  return 8;
}
function nine(func) {
  if (func) {
    return Math.floor(eval(9 + func));
  }
  return 9;
}

function plus(num) {
  return `+ ${num}`;
}
function minus(num) {
  return `- ${num}`;
}
function times(num) {
  return `* ${num}`;
}
function dividedBy(num) {
  return `/ ${num}`;
}

// 36. A Chain adding function

function add(x) {
  function inner(y) {
    return add(x + y);
  }

  inner.valueOf = function() {
    return x;
  };

  return inner;
}

// 37. Wrapped Function

// extend the Function object to include a wrap instance method
Object.defineProperty(
    Function.prototype,
    'wrap',
    {value:
        function wrap(wrappedFunc, ...args) {
            const original = this;
            return function(...args) {
              return wrappedFunc(original, ...args);
            };
        }
    }
);

// 38. Concatenating functions

Function.prototype.pipe = function (nextFunc) {
  return (arg) => {
    const result = this(arg);
    return nextFunc(result);
  }
}

// 39. Function Cache

function cache(func) {
  const store = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (!store.has(key)) {
      store.set(key, func(...args));
    }

    return store.get(key);
  };
}

// 40. Pipelining and composing functions

function pipeline(seed, ...args) {
  let result = seed;
  args.forEach(f => {
    result = f(result);
  })
  
  return result;
};

function compose(...funcs) {
  return (...args) => {
    let result = funcs.at(-1)(...args);
    for (let i = funcs.length - 2; i >= 0; i--) {
      result = funcs[i](result);
    }
    return result;
  }
};

// 41. How new Works

// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.
var myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);

// 42. Cylon Evolution

function Cylon(model){
  Cylon.prototype.model = model;
  Cylon.prototype.attack = function() {
    return "Destroy all humans!";
  }
}

function HumanSkin(model){
  Object.setPrototypeOf(this, new Cylon(model));
  
  this.infiltrate = function() {
    return "Infiltrate the colonies";
  }
}

// 43. Replicate `new`

function nouveau (Constructor, ...args) {
  const object = {};
  object.__proto__ = Constructor.prototype;
  
  const result = Constructor.apply(object, args);
  
  if (typeof result === "object" && result !== null || typeof result === "function") {
    return result;
  } else {
    return object;
  }
}

// 44. Write JavaScript's 'call' function using apply.

Function.prototype.call = function(context, ...args) {
  return this.apply(context, args)
}

// 45. Anonymous Returns.

name = 'The Window';

let alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return () => {
            return this.name;
        };
    }
};

// 46. Power .bind()

Function.prototype.bind = function (rootContext) {
    return (childContext = rootContext) => this.call(childContext, childContext);
};

// 47. Basics - Generators #1

function* generator() {
  let counter = 1;
  while (true) {
    let num = yield counter;
    if (num > 0) {
      counter = num;
    } else {
      counter++;
    }
  }
}

// 48. Multiplication - Generators #2

function* generator(a) {
  i = 1;
  while (true) {
    yield `${a} x ${i} = ${a * i}`;
    i++;
  }
}

// 49. Generating Generators - Generators #3

function* generator(a, b) {
    for (let i = a - 1; i < b; i++) {
      
      const tableGen = function* () {
        for (let j = 1; j < 11; j++) {
          yield `${i + 1} x ${j} = ${(i + 1) * j}`;
        }
      };
      
      yield tableGen();
    }
}

// 50. Mr. Freeze

Object.freeze(MrFreeze);

// 51. Deep Freeze

Object.deepFreeze = function deepFreeze(object) {
  Object.values(object).forEach(prop => {
    if (typeof prop === "object") Object.deepFreeze(prop);
  })
  Object.freeze(object);
}

// 52. Defining getters and setters on an existing class

Object.defineProperty(Person.prototype, 'name', {
  get() {
    return this.getName();
  },
  set(name) {
    const parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
});