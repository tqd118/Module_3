// 1. Sum of Multiples

function sumMul(n,m){
  let result = 0;
  
  for (let i = n; i < m; i += n) {
    result += i;
  }
  
  if (result > 0) {
    return result;
  }
  return "INVALID";
}

// 2. Even or Odd

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 3. Odds-Index

function oddBall(arr){  
  return arr.includes(arr.indexOf("odd"));
}

// 4. Is n divisible by x and y?

function isDivisible(n, x, y) {
  return (n % x === 0) && (n % y === 0);
}

// 5. Convert a Boolean to a String

function booleanToString(b){
  return b.toString();
}

// 6. Basic Mathematical Operations

function basicOp(operation, value1, value2){
  switch(operation) {
    case '+':
    return value1 + value2;
    
    case '-':
    return value1 - value2;
    
    case '*':
    return value1 * value2;
    
    case '/':
    return value1 / value2;
  }
}

// 7. Training JS #7: if..else and ternary operator

function saleHotdogs(n){
  if (n < 5) {
    return 100 * n;
  } else if (n < 10) {
    return 95 * n;
  } else {
    return 90 * n;
  }
}

// 8. Count the divisors of a number

function getDivisorsCnt(n){
  let result = 0;  
  
  for (let i = 0; i <= n ** 0.5; i++) {
    if (n % i === 0) {
      result += (i**2 === n ? 1 : 2);
    }
  }
  
  return result;
}

// 9. Century From Year

function century(year) {
  return Math.ceil(year / 100);
}

// 10. Simple multiplication

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

// 11. Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  return bool ? "Yes" : "No";
}

// 12. Persistent Bugger.

function persistence(num) {
  let result = 0;
  
  while (true) {
    if (num / 10 < 1) {
      return result;
    }
    
    num = num.toString()
             .split('')
             .reduce((acc, x) => acc * x, 1);
    result++;
  }
}

// 13. Grasshopper - Summation

var summation = function (num) {
  if (num === 1) {
    return 1;
  }
  
  return num + summation(num - 1);
}

// 14. If you can't sleep, just count sheep!!

var countSheep = function (num){
  let result = Array(num + 1);
  for (let i = 0; i < num; i++) {
    result[i] = `${i + 1} sheep`
  }
  return result.join("...")
}

// 15. Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse(val){
  return val ? "true" : "false";
}

// 16. Training JS #8: Conditional statement--switch

function howManydays(month){
  let days;
  switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
      
    case 2:
      return 28
  }
  return days;
}

// 17. Training JS #9: loop statement --while and do..while

function padIt(str,n){
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      str = `*${str}`;
    } else {
      str = `${str}*`
    }
    i++;
  }
  
  return str;
}

// 18. Training JS #10: loop statement --for

function pickIt(arr){
  let odd = [], even = [];
  
  for (let i of arr) {
    if (i % 2 === 0) {
      even.push(i)
    } else {
      odd.push(i);
    }
  }
  
  
  return [odd, even];
}

// 19. Training JS #11: loop statement --break,continue

function grabDoll(dolls){
  var bag=[];
  
  for (let i of dolls) {
    if (bag.length === 3) {
      break;
    }
    if (i === "Hello Kitty" || i === "Barbie doll") {
      bag.push(i);
    } else {
      continue;
    }
  }
  
  return bag;
}

// 20. Training JS #2: Basic data types--Number

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2(){
  let a = v3, //set number value to a
      b = v1; //set number value to b
  return a - b;
}

function equal3(){
  let a = v1, //set number value to a
      b = v5; //set number value to b
  return a * b;
}

function equal4(){
  let a = v4, //set number value to a
      b = v5; //set number value to b
  return a / b;
}

function equal5(){
  let a = v6, //set number value to a
      b = v3; //set number value to b
  return a % b;
}

// 21. Training JS #14: Methods of Number object--toString() and toLocaleString()

function colorOf(r,g,b){
  let red = r.toString(16).length < 2 ? `0${r.toString(16)}` : r.toString(16);
  let green = g.toString(16).length < 2 ? `0${g.toString(16)}` : g.toString(16);
  let blue = b.toString(16).length < 2 ? `0${b.toString(16)}` : b.toString(16);
  
  return `#${red}${green}${blue}`
}

// 22. Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr,n){
  let result = 0;
  let array = arr.map(num => num.toFixed(2));
  
  array.forEach((num) => {
    if (num < n) {
      result++;
    }
  })
  
  return result;
}

// 23. Training JS #32: methods of Math---round() ceil() and floor()

function roundIt(n){
  const [int, frac] = n.toString().split(".");
  
  if (int.length > frac.length) {
    return Math.floor(n);
  } else if (int.length < frac.length) {
    return Math.ceil(n);
  } else {
    return Math.round(n);
  }
  
}

// 24. Training JS #33: methods of Math---max() min() and abs()

function maxMin(arr1,arr2){
  let diffs = [];
  
  arr1.forEach((num, i) => {
    diffs.push(Math.abs(num - arr2[i]));
  })
  
  return [diffs.reduce((a, b) => Math.max(a, b)), diffs.reduce((a, b) => Math.min(a, b))]
  
}

// 25. Training JS #34: methods of Math---pow() sqrt() and cbrt()

function cutCube(volume,n){
  const cubesSize = Math.cbrt(volume / n);
  return Number.isInteger(cubesSize) && Number.isInteger(Math.cbrt(n))
}

// 26. Training JS #36: methods of Math---kata author's lover:random()

function rndCode(){
  const uppercase = "ABCDEFGHIJKLM";
  const symbols = "~!@#$%^&*";
  
  let code = "";
  
  code += getRandomChar(uppercase);
  code += getRandomChar(uppercase);
  code += getRandomInt();
  code += getRandomInt();
  code += getRandomInt();
  code += getRandomInt();
  code += getRandomChar(symbols);
  code += getRandomChar(symbols);
  
  return code;
}

function getRandomChar(chars) {
  return chars[Math.floor(chars.length * Math.random())]
}

function getRandomInt() {
  return Math.floor(10 * Math.random());
}

// 27. Training JS #16: Methods of String object--slice(), substring() and substr()

function cutIt(arr){
  const shortestString = arr.reduce((a, b) => a.length > b.length ? b : a);
  
  return arr.map(str => str.slice(0, shortestString.length));
}

// 28. Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str,c){
  const firstIndex = str.indexOf(c);
  const lastIndex = str.lastIndexOf(c);
  
  if (firstIndex === -1) {
    return -1;
  }
  return lastIndex - firstIndex;
}

// 29. Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(string, separator) {
  const words = string.split(" ");
  return (
    words.map(word => word.split("").join(separator))
  ).join(" ");
}

// 30. Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str){
  return str.toUpperCase().replace(/\w\b/g, char => char.toLowerCase())
}

// 31. Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

function topSecret(str){
  let result = "";

  for (let ch of str) {
    const code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      let x = code - 3;
      if (x < 65) {
        x += 26;
      }
      result += String.fromCharCode(x);
    } else if (code >= 97 && code <= 122) {
      let x = code - 3;
      if (x < 97) {
        x += 26;
      }
      result += String.fromCharCode(x);
    } else {
      result += ch;
    }
  }

  return result;
}
//question1: The top secret file number is...
answer1="3472";
//question2: Super agent's name is...
answer2="RmK";
//question3: He stole the treasure is...
answer3="Marie's husband";

// 32. Training JS #21: Methods of String object--trim() and the string template

function fiveLine(s){
  let resultArray = [];
  
  for (let i = 0; i < 5; i++) {
    resultArray.push(Array(i + 1).fill(s.trim())
                                 .join(""));
  }
  
  return resultArray.join('\n')
}

// 33. Training JS #3: Basic data types--String

a1="A", a2="a", b1="B", b2="b",
c1="C", c2="c", d1="D", d2="d",
e1="E", e2="e", n1="N", n2="n"

function Dad(){
  //select some variable to combine "Dad"
  return d1+a2+d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1+e2+e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2+a2+n2+a2+n2+a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}

// 34. Training JS #5: Basic data types--Object

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// 35. Training Time

function shuffleIt(arr, ...args){
  let result = arr;
  args.forEach(pair => {
    [result[pair[0]], result[pair[1]]] = [result[pair[1]], result[pair[0]]];
  })
  return result;
}

// 36. Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()

function infiniteLoop(arr,d,n){
  if (d === "left") {
    for (let i = 0; i < n; i++) {
      arr[0].push(arr[1].shift());
      arr[1].push(arr[2].shift());
      arr[2].push(arr[0].shift());
    }
  } else {
    for (let i = 0; i < n; i++) {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  
  return arr;
}

// 37. Training JS #24: methods of arrayObject---splice() and slice()

function threeInOne(arr){
  let result = [];
  
  for (let i = 0; i < arr.length; i += 3) {
    result.push(
      arr.slice(i, i + 3)
         .reduce((a, b) => a + b, 0)
    )
  }
  
  return result;
}

// 38. Training JS #25: methods of arrayObject---reverse() and sort()

function sortIt(arr){
  let hashMap = {};
  
  arr.forEach(e => hashMap[e] ? hashMap[e]++ : hashMap[e] = 1)
  
  return Object.entries(hashMap).sort((a, b) => b[0] - a[0])      
                                .sort((a, b) => a[1] - b[1])
                                .flatMap(pair => Array(pair[1]).fill(+pair[0]))
}

// 39. Training JS #26: methods of arrayObject---map()

function isolateIt(arr){
  return arr.map(str => {
    if (str.length % 2 === 0) {
      return `${str.slice(0, str.length / 2)}|${str.slice(str.length / 2)}`
    } else {
      return `${str.slice(0, str.length / 2)}|${str.slice((str.length / 2) + 1)}`
    }
  })
}

// 40. Training JS #27: methods of arrayObject---filter()

function countGrade(scores){
  const grades = {
    "S": scores.filter(x => x === 100).length,
    "A": scores.filter(x => x < 100 && x >= 90).length,
    "B": scores.filter(x => x < 90 && x >= 80).length,
    "C": scores.filter(x => x < 80 && x >= 60).length,
    "D": scores.filter(x => x < 60 && x >= 0).length,
    "X": scores.filter(x => x === -1).length
  };
  
  return grades;
}

// 41. Training JS #28: methods of arrayObject---every() and some()

function mirrorImage(arr){
  let result = [-1, -1];

  arr.some((num, i) => {
    const next = arr[i + 1];
    if (next === undefined) {
      return false
    }

    const reversed = String(num).split('').reverse().join('');
    if (reversed === String(next)) {
      result = [num, next];
      return true;
    }
    
    return false;
  });

  return result;
}

// 42. Training JS #29: methods of arrayObject---concat() and join()

function bigToSmall(arr){
  return arr.flat()
            .sort((a, b) => b - a)
            .join(">")
}

// 43. Training JS #30: methods of arrayObject---reduce() and reduceRight()

function tailAndHead(arr){
  let sums = arr.map((e, i) => {
    if (arr[i + 1] === undefined) {
      return;
    }
    const str = String(e);
    const nextStr = String(arr[i + 1])
    return +str[str.length - 1] + +nextStr[0];
  })
  
  return sums.filter(elem => elem)
             .reduce((a, b) => a * b, 1);
}

// 44. Training JS #31: methods of arrayObject---isArray() indexOf() and toString()

function blackAndWhite(arr){
  let result = "fake";
  
  if (Array.isArray(arr)) {
    if (arr.includes(5) && arr.includes(13)) {
      result = "black";
    } else {
      result = "white"
    }
  }
  
  return `It's a ${result} array`
}

// 45. Strings, strings, strings (Easy)

Number.prototype.toString = function() {
  return `${this.valueOf()}`;
};

Boolean.prototype.toString = function() {
  return this.valueOf() ? "true" : "false";
};

Array.prototype.toString = function() {
  return "[" + this.map(x => String(x))
                   .join(",") + "]";
};

// 46. Count strings in objects

function strCount(obj){
  if (Array.isArray(obj)) {
    let count = 0;
    obj.forEach(elem => {
      if (Array.isArray(elem) || typeof elem === "object" && elem !== null) {
        count += strCount(elem)
      } else if (typeof(elem) === "string") {
        count++
      }
    })
    
    return count;
  }
  
  return strCount(Object.values(obj))
}

// 47. Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  return list.filter(dev => dev.continent === "Europe" && dev.language === "JavaScript").length;
}

// 48. Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

function findSenior(list) {
  return list.sort((a, b) => b.age - a.age)
             .filter((dev, i, arr) => dev.age === arr[0].age);
}

// 49. Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

function askForMissingDetails(list) {
  return list.filter(dev => Object.values(dev).some(prop => prop === null))
             .map(dev => {
                return {
                  ...dev,
                  question: `Hi, could you please provide your ${ findNullProp(dev) }.`
                }
              })
}

function findNullProp(dev) {
  return Object.entries(dev).find(pair => pair[1] === null)[0]
}

// 50. Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

function isAgeDiverse(list) {
  const decades = list.map(dev => Math.floor(dev.age / 10))
                      .sort((a, b) => a - b);
  
  console.log(decades)
  for (let i = 1; i < 10; i++) {
    if (!decades.includes(i)) {
      return false;
    }
  }
  
  return decades.pop() >= 10;
}

// 51. Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

function countLanguages(list) {
  let result = {};
  list.forEach(({language}) => result[language] ? result[language] += 1 : result[language] = 1);
  
  return result;
}

// 52. Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

function isSameLanguage(list) {
  let languages = new Set(list.map(dev => dev.language))
  
  return languages.size === 1 ? true : false;
}

// 53. Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

function findAdmin(list, lang) {
  return list.filter(({language, githubAdmin}) => language === lang && githubAdmin === "yes");
}

// 54. Invalid Input - Error Handling #1

function getCount(words) {
  try {
    words = words.toLowerCase();
    return {
      vowels: Array.from(words.matchAll(/[aeiou]/g)).length, 
      consonants: Array.from(words.matchAll(/[bcdfghjklmnpqrstvwxyz]/g)).length
    };
  } catch (e) {
    return {"vowels": 0, "consonants": 0};
  }
}

// 55. Error Throwing - Error Handling #2

function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg !== "string") {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }
  
  return !msg.match(/<[^>]*>/g);
}

// 56. Throw from list - Error Handling #3

function validate(username, password) {
  username = username.trim();
  password = password.trim();
  
  const usernameInvalidCharacters = /[(){}\[\]\|;:'"\/\?.,<>~\-=\+*&\^%$@!]/;
  const passwordInvalidCharacters = /[^a-zA-Z0-9;:?.,<>~*^%$ @!_]/;
  
  if (username.length > 12) throw ERRORS.usernameTooLong(username);
  if (username.length < 1) throw ERRORS.usernameTooShort(username);
  if (usernameInvalidCharacters.test(username)) throw ERRORS.usernameInvalidCharacters(username);
  
  if (password.length > 24) throw ERRORS.passwordTooLong(password);
  if (password.length < 8) throw ERRORS.passwordTooShort(password);
  if (passwordInvalidCharacters.test(password)) throw ERRORS.passwordInvalidCharacters(password);
  if (!/[A-Z]/.test(password)) throw ERRORS.passwordNoCapital(password);
  if (!/[0-9]/.test(password)) throw ERRORS.passwordNoNumber(password);
  if (password.includes(username)) throw ERRORS.passwordContainsUsername(password);
  
  return true;
}

