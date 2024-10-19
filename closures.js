// function getFirstName(firstName){
//     console.log("Returning getLAstname")
//     return function getLastName(lastName){
//         console.log('Hi' + firstName + " " + lastName);
//     }
// }


// console.log("Before")
// let getLastName= getFirstName('Shubham')
// console.log("Between")
// getLastName('Shrivastava')
// console.log("After")


function outer(){
    let count = 0;
    function innerfuntion(){
        count++;
        return count
    }
    return innerfuntion;
}

let inner = outer();
console.log(inner())
console.log(inner())
console.log(inner())


//--------------------

function createCounter(init, delta){
    // let count = 0;
    function count(){
        init += delta;
        return init
    }
    return count;
}

let c1 = createCounter(10,5);
let c2 = createCounter(5,2);

console.log(c1())
console.log(c2());
console.log(c1())
console.log(c2());