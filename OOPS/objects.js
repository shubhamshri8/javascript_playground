function createPerson(name, age, uid){
    this. name = name,
    this.age = age,
    this.uid = uid
}


let person1 = new createPerson('Shubham', 27, 12345);

console.log(person1.name)
console.log(person1.age)
console.log(person1.uid)

let person2 = {
    name: 'Rahul',
    age: 30
}

console.log('-----------')
console.log(person2.name)
console.log(person2.age)