While & For loops, Recursion || Material
/*****************************  1  ***********************/
 Using a for loop THEN a while loop
 Write a JavaScript function that will iterate from 0 to n. For each iteration,
 it will check if the current number is odd or even, and display a message on the screen.
 iterateAndLog(3); =>
 Sample Output :
 "0 is even"
 "1 is odd"
 "2 is even"
 

function iterateAndLogWithFor(n) {

  for (var i = 0; i <n ; i++) {
    if (i%2===0) {
      console.log (i + ' is even')
    }
    else  console.log (i + ' is odd')
  }

}



 function iterateAndLogWithWhile(n) {

  var i=0 
     while (i <n) {
         if (i%2===0) {
      console.log (i + ' is even')
    }
    else  {console.log (i + ' is odd')
  } 
      i++

}}
 
/*****************************  2  ***********************/
 Using a for loop THEN a while loop THEN recursion
 Write a JavaScript function that will iterate from n to 0. For each iteration,
 it will check if the current number is odd or even, and display a message to the screen.
 iterateAndLog(3); =>
 Sample Output :
 "2 is even"
 "1 is odd"
 "0 is even"
 
function reverseIterateAndLogWithFor(n) {

  for (var i = n-1; i >= 0 ; i--) {
    if (i%2===0) {
      console.log (i + ' is even')
    }
    else  {console.log (i + ' is odd')
  }

}}



function reverseIterateAndLogWithWhile(n) {

  var i=n-1
     while (i >=0) {
         if (i%2===0) {
      console.log (i + ' is even')
    }
    else  {console.log (i + ' is odd')
  } 
      i--

}}


function reverseIterateAndLogRecursively(n) {
if (n===0) {
    return 
    }
    
  if (n%2 === 0) { console.log (n , "is even")
  }
  else   { console.log (n , "is odd")
    }

reverseIterateAndLogRecursively(n-1) 

}
 
/*****************************  3  ***********************/
 Using a for loop THEN a while loop
 Write a function that:
 Loop through the numbers 1 to n
 If the number is divisible by 3, print "Julia"
 If the number is divisible by 5, print "James"
 If the number is divisible by 3 and 5, print "JuliaJames"
 If the number is not divisible by 3 or 5, print the number
 
function weirdDivisionWithFor(n) {

    var name;
  for (var i = 1 ; i <= n; i++) {
    if (i%3===0) {
      name ="Julia"
    }
      else if (i%5===0) {
       name ="James"
      }
        else if (i%3===0 && i%5===0 ) {
          name ="JuliaJames"
        }
          else {name = n}

      
  } return name

}


function weirdDivisionWithWhile(n) {

    var name;
    var i=0 
    while (i<=n) {
        if (i%3===0) {
      name ="Julia"
    }
      else if (i%5===0) {
       name ="James"
      }
        else if (i%3===0 && i%5===0 ) {
          name ="JuliaJames"
        }
          else {name = n}

      i++
  } return name
        
    }
  
 

 now recursively do the same function but looping from n to 1 instead of 1 to n
 

function inverseWeirdDivisionRecursively(n) {

if (n===1) {
    return 
    }
    
   if (n%3===0) {
      return "Julia"
    }
      else if (n%5===0) {
       return "James"
      }
        else if (n%3===0 && i%5===0 ) {
          return "JuliaJames"
        }
          else {return  n}

inverseWeirdDivisionRecursively(n-1) 

}


 

/*****************************  4  ***********************/
 Using a for loop THEN a while loop THEN Recursively
 Write a function called laugh() that takes one parameter,
 num that represents the number of "ha"s to return.
 laugh(6); => "hahahahahaha" 
 

function laughWithFor(number) {

var string =''
  for (var i = 0; i < number  ; i++) {
    string = string + 'ha'
}
return string
}


function laughWithWhile(number) {
    
var string =''
var i =0
    while (i< number) {
        string = string + 'ha'
        i++
    }

return string
}


function laughRecursively(number) {

 if (number === 0) {
  return ''
 }

return 'ha' + laughRecursively(number-1)
}
 

/*****************************  5  ***********************/
 Using a for loop THEN a while loop
 Create a function that calculates the sum of a number as follows:
 factorial(3); => 3+2+1 = 6
 factorial(5); => 5+4+3+2+1 = 15

function sumWithWhile(number) {

var result=0

var i = 1
 
 while (i <= number) {
  result = result + i
  i++
 }
  return result
}



function sumWithFor(number) {

  var result=0

  for (var i = 1; i <= number; i++) {
 
 result = result + i 
    
  } 
  return result 

}
/*****************************  6  ***********************/
 Using recursion
 Create a function that calculates the factorial of a number
 factorial(3); => 3*2*1 = 6
 factorial(5); => 5*4*3*2*1 = 120
function factorialRecursively(number) {

  if (number ===0) {
    return 0
  }

  return number+ factorialRecursively(number-1)

}
 

/*****************************  7  ***********************/
 Using a for loop THEN a while loop
 Write a JavaScript program to get the integers in range (x, y)
 and store then in an array
 Example:
 range(3,9); => [3, 4, 5, 6, 7, 8]
 

function rangeFor(min, max) {

var array = []
var x =0

 for (var i = min ; i < max ; i++) {
   array [x]=i
   x++
 }
return array
}



function rangeWhile(min, max) {

var array =[]
var i = min
var x=0

while (i<max){
  array[x] = i
  x++
  i++
}
return array
}
 

/*****************************  8  ***********************/
 Using a for loop THEN a while loop THEN recursion
 Write a function that takes a string and returns the same string reversed
 reverse('abc'); => 'cba'
 reverse('erf4') => '4fre'
 

function reverseWithWhile(str) {

 

}



function reverseWithFor(str) {

var array = str.split("")

for (var i = array.length-1; i <=0 ; i--) {
  return array [i]
}

}



function reverseRecursively(str) {

  // TODO: your work here

}
 

/*****************************  9  ***********************/
 Using a for loop OR a while loop
 You are given an integer. Return the sum of its digits.
 Example:
 addDigits(29); => 11
 addDigits(90); => 9
 addDigits(1231635132132); => 33
 

function addDigits(num) {

  // TODO: your work goes here

}
 

/*****************************  10  ***********************/
 RECURSIVELY
 Write a JavaScript program to get the first n Fibonacci numbers
 That is, fib(0) is 1, fib(1) is 1, fib(2) is 2, fib(3) is 3, fib(4) is 5, etc.
  Notice that each fibonacci number can be computed by adding the previous two fibonacci numbers,
  with the exception of the first two: fib(0) and fib(1). More succinctly,
  fib(0) is 1
  fib(1) is 1
  fib(n) is fib(n - 1) + fib(n - 2)
  Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
 

function fibRecursive(number) {

  // TODO: your work goes here

}
 
/*****************************  11  ***********************/
 Write a function that returns the first digit in a string using a for/while loop
 (digits may be anywhere in the string)
 firstDigit('sdsa3dsad020a2'); => 3
 firstDigit('tdhs020a2'); => 0
 

function firstDigit(str) {

  // TODO: your work goes here

}
 
/*****************************  12  ***********************/
 Write a function remove that accepts an array and an element, and returns an
 array with all ocurrences of element removed.
 remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
 

function remove(array, element) {

  // TODO: your work goes here
  
}
 

/*****************************  13  ***********************/
 Write a function called average that takes an array of numbers as
 a parameter and returns the average of those numbers.
 

function average(arrOfNumbers) {

  // TODO: your work goes here

}
 
/*****************************  14  ***********************/
 Write a function that returns the maximum number in an array of numbers
 findMax([1, 6, 8, 20, 6, -1, 9]); => 20
 findMax([1, 6, 9, 0]); => 9
 

function findMax(str) {

  // TODO: your work goes here

}
 

/*****************************  15  ***********************/
 Check if all digits of the given integer are even
 the function should return only true if all the digits are even
 evenDigitsOnly("1253"); => false
 evenDigitsOnly("62680"); => true
 evenDigitsOnly("62680"); => true
 NOTE: YOUR FUNCTION TAKES A STRING REPRESENTATION OF A NUMBER AND NOT THE NUMBER ITSELF
 note that in the example, we called evenDigitsOnly("62680"), not evenDigitsOnly(62680)
 

function evenDigitsOnly(input) {

  // TODO: your work goes here
  
}
 

/*****************************  16  ***********************/
Create a function that checks if a string is a palindrome (google it)
palindrome('aaba'); => false
palindrome('kayak'); => true
palindrome('2002'); => true
 

function palindrome(str) {

  // TODO: your work goes here

}
 

/*****************************  17  ***********************/
Write a function that return the first duplicate element in a given array of numbers
Example:
firstDuplicate([2, 1, 6, 5, 1, 3, 0]); => 1
firstDuplicate([2, 1, 2, 5, 1, 3, 0]); => 2
firstDuplicate([2, 1, 6, 5, 8, 3, 0]); => "No duplicates"
 

function firstDuplicate(array) {

  // TODO: your work goes here
  
}
 

/*****************************  18  ***********************/
Theater seats often display a row and seat number to help theatergoers find their seats.
If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for
loop to print out all of the different seat combinations in the theater.
 

function findCombinations() {

  // TODO: your work goes here

}