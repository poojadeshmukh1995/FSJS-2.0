// const obj1 = {
//     name:'Pooja',
//     job:'Developer',
//     getName: function() {
//        return name;
//     },
//     getJob: () => {
//         return job;
//     }

// }
// let name = 'Pooja1'
// let job = 'Soft Dev'
// console.log(obj1.getName())
// console.log(obj1.getJob())


// obj = {
//     color:'red'
// }
// // const obj2 = new Object({age:27});
// const obj2 = Object({age:27});
// //const obj2 = new Object(obj);
// // obj2['name'] = 'pooja';
// // obj2.name = 'poojad'
//  console.log(Object.getPrototypeOf(obj2))
//  console.log(obj2)


// Constructor
// const obj2  = new Object(undefined)
// const obj3  = new Object()
// const obj4  = new Object(null)

// // output {}
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)

//Object.assign()

// const obj1 = {
//     book1:'red',
//     book2:'black'

// }

// const obj2 = {
//     book2:'white',
//     pen1:'red',
//     pen2:'black'
// }

// const obj3 = Object.assign(obj2,obj1,{book3:'pink'});
// console.log(obj3);
// console.log(obj1);


//Object.create()


// const obj1 = {
//         book1:'red',
//         book2:'black'

//     }

//     const obj2 = Object.create(obj1);
//     console.log(Object.getPrototypeOf(obj2))
//     console.log(obj2.book1)
//     console.log(Object.keys(Object.getPrototypeOf(obj2)));
//     console.log(Object.values(obj1));

myName = "pooja    ";
String.prototype.trueLength = function () {
    console.log(this.trim().length);

}
// name.trueLength()
    // console.log(this.val)
    //The Secret Life of Objects” in eloquent javascript book

const obj1 = {
    a:'1',
    b:'2'
}

const obj2 = {
    c:'3',
    d:'4'
}

const numbers = [1,2,3,4]

// obj1.__proto__ = obj2;
Object.setPrototypeOf(obj2,obj1);
Object.prototype.pooja = this.name;
let abc = 'abc'
console.log(obj1.pooja)

