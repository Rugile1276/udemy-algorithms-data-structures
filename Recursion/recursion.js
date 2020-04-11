//POWER SOLUTION
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
//FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
//PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
//RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
//FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//REVERSE STRING
function reverse(str){
  if(str.length == 0) return '';
  return str[str.length -1].concat(reverse(str.slice(0,str.length-1)));
}


function isPalindrome(str){
  if(str.length == 1) return true;
  if (str.length == 2) return str[0] == str[1];
  if(str[0] !== str[str.length-1]) return false;
  isPalindrome(str.slice(1,-1));
}
console.log(isPalindrome('aaa'));
