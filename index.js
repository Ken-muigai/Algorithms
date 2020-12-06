//RECURSION AND MEMOIZATION IN FIBONACCI

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
  
  
 
  //REVERSE A STRING
  function reverse(string) {
    // Base case
    if (string.length < 2) return string;
    // Recursive case
    // console.log(string.slice(1, string.length) + string[0]);
    return reverse(string.slice(1, string.length)) + string[0];
  }
  
  console.log(reverse("KenJoel"));


  //GO THROUGH AN ARRAY AND PRINT ALL ELEMENTS USING RECURSION
  var array = [2,4,44,5,68,9,0,1];
  
  var allOutPrint = (y) => {
    // for(let i = 0; i < y.length; i++){
    //     console.log(y[i]);
    // }   
    if(y.length > 0){
        console.log(y[0])
        allOutPrint(y.slice(1))
    }else{
        console.log("Done printing out");
    }
    
  }

allOutPrint(array);

