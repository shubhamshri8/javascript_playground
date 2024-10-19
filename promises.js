// console.log("Hello! We are starting with promises")

// // How to Produce a Promise

// let myPromise = new Promise(function(resolve, reject){
//     const a = 4;
//     const b = 4;

//     setTimeout(()=>{
//         if(a===b){
//             resolve('The values are equal')
//         }
//         else{
//             reject('The valus are not equal')
//         }
//     },2000)
// })

// // Pending State
// console.log(myPromise);


// //Fulfilled

// myPromise.then(function(result){
//     console.log(result);
// })


// // Rejected
// myPromise.catch(function(failedResult){
//     console.log(failedResult)
// })


// Coffe Shop

// function placeOrder(drink){
//     return new Promise (function(resolve, reject){
//         if(drink==='coffee'){
//             resolve('Order for Coffee received')
//         }
//         else{
//             reject('Other orders Rejected')
//         }
//     } )
// }

// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log('Order is being Processed')

//         resolve(`${order} is Served`)
//     })
// }

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder)
// }).catch(function(error){
//     console.log(error)
// })

// Chaining of Promises


// Async Await - Syntactical Sugar for Promise

// keywords

// async function serveOrder() {
//     try {
//         let orderPlaced = await placeOrder('tea')
//     console.log(orderPlaced);
//     let processedOrder = await processOrder(orderPlaced)
//     console.log(processedOrder);
//     } catch (error){
//         console.log(error)
//     }
    
// }

// serveOrder()



//--------------


//file read


const fs = require('fs')

// console.log('Before')
// fs.readFile("./file1.txt", function(err, data){
//     if(err){
//         console.log("there is error",err)
//     }
//     else{
//         console.log('File content is -->',data.toString())
//     }
// })

// console.log("after")

//----------Alternate way

console.log("Before")
const promise = fs.promises.readFile('./file1.txt');

promise.then(function(data){
    console.log('data-->', data.toString())
})

promise.catch(function(err){
    console.log("eroorrr->>",err)
})


console.log('After')

