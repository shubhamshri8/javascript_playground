// let sum = function(x,y){
//     console.log(x+y)
// }

// sum(2,3)


// let sumCurried = function(x){
//     return function(y){
//         console.log(x+y)
//     }
// }

// sumCurried(2)(3)

function sum(a){
    return function(b){
        if(b !== undefined){
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(2)(3)(6)())