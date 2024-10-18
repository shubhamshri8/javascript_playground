// console.log(this)

// let obj = {
//     name: 'Shubham',
//     age: 27,
//     knowThis: function(){
//         console.log(this.name);
//     }
// }

// obj.knowThis()

// let newThis = obj.knowThis;
// console.log('------------')
// newThis();

const cap = {
    name: "Steve",
    sayHi: function() {
        console.log('53', this.name)
        inner =()=>{
            console.log('55', this.name)
        }
        inner();
    }
}

const cap2 = {
    name: 'Shubham'
}

let cap2sayHi = cap.sayHi.bind(cap2);
// cap.sayHi();

// cap2sayHi();

cap.sayHi.call(cap2)