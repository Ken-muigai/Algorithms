//RECURSION AND MEMOIZATION

const fib = (n, memo={}) => {
    if(n in memo){
     return memo[n];
   }
   if(n <= 2){
     return 1
   }
  
   memo[n]= fib(n - 1, memo) + fib(n - 2, memo);
   return memo[n];
  }
  
  console.log(fib(33));
  console.log(fib(500));
  
  // The time complexity of the above algorithm is immensely huge
  // We need to improve the function
  // For this augmentation, we will use memoization
  // memoization is the process of storing results from a method call in a data structure for later reference therefore saving on time and space complexity.
  
  
  
  function reverse(string) {
    // Base case
    if (string.length < 2) return string;
    // Recursive case
    // console.log(string.slice(1, string.length) + string[0]);
    return reverse(string.slice(1, string.length)) + string[0];
  }
  
  console.log(reverse("KenJoel"));