let arr = [3,4,7,7,36,3,67,7566,3];

let mappedArr = arr.map((a)=> a*2);

let filteredArr = arr.filter((a)=> a%2===0);

let reducedArr = arr.reduce((acc, curr)=>{
    if(curr%2===0){
        acc.push(curr)
    }
    return acc
}, [])


console.log(mappedArr)
console.log(filteredArr)
console.log(reducedArr)

console.log(arr.find((a)=> a>30))
console.log(arr.findIndex((a)=> a>30))
console.log(arr.some((a)=> a>30))
console.log(arr.every((a)=> a>0))