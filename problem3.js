// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

 
// // a function to check if a number is prime 
// function isPrime(num){
//     if (num <= 1) return false;
//     for(let i = 2; i <= num / 2; i++) {
//         if(num % i == 0) {
//            return false;
//         }
//     }
//      // no divisor found, therfore it's a prime number
//     return true;
// }

// function largestPrimeFactor(number){

//     let factors = [];

//     for(let i = 2; i <= number/2; i++){
//       //check if number is factor
//       if(number % i == 0){
//          // check if the factor is also a prime number
//          if(isPrime(i) === true)
//          {
//          // push the value into the array
//          factors.push(i);
//          }
//       }
//      }

//      let max=1;
//    // iterate the vector to find largest prime factor
//    for(let i = 0; i < factors.length(); i++){
//       if(factors[i] > max){
//          max = factors[i];
//       }

//       console.log(factors)
//    }
// }





// largestPrimeFactor(600851475143)


var number = 600851475143, prime_number = 2;

function find_next_prime_number() {
    var can_divide = false;
    var n = 2;
    if (prime_number === 2) {
        prime_number++;
    } else {
        prime_number += 2;
    }
    while (n < prime_number) {
        if (prime_number % n === 0) {
            can_divide = true;
        }
        n++;
    }
    if (can_divide) {
        find_next_prime_number();
    }
}

while (number > 1) {
    if (number % prime_number === 0) {
        number /= prime_number;
    } else {
        find_next_prime_number();
    }
}
console.log(prime_number);