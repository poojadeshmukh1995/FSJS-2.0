// let fruits = ['Banana','Mango','Apple','Orange','Grapes'];

// console.log(fruits);//[ 'Banana', 'Mango', 'Apple', 'Orange', 'Grapes' ]
// console.log(fruits[fruits.length-1]); // Grapes

// fruits[1] = 'pineapple'
// console.log(fruits); //[ 'Banana', 'pineapple', 'Apple', 'Orange', 'Grapes' ]

//push()

// let numbers = [1,2,3,4,5]
// numbers.push(6); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(numbers)
// let count = numbers.push('7');
// console.log(count) // 6

//unshift()

// let numbers = [1,2,3,4,5]
// numbers.unshift(0); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(numbers)
// let count= numbers.unshift(0);
// console.log(count)// 7

// pop()

// let numbers = [1,2,3,4,5]
// // numbers.pop()
// console.log(numbers)
// console.log(numbers.pop())

//shift()

// let numbers = [1,2,3,4,5]
// console.log(numbers.shift())

// slice

// let fruits = ['Banana','Mango','Apple','Orange','Grapes'];
// let fruits2 = fruits.slice( )
// console.log(fruits2)
// fruits2[1] = 'pineapple';
// console.log(fruits2)
// console.log(fruits)
// fruits2.push('bbb')
// console.log(fruits2)
// console.log(fruits)

//splice()

// let fruits = ['Banana','Mango','Apple','Orange','Grapes'];
// fruits.splice(2,0,'pineapple');
// console.log(fruits)


// let fruits = ['Banana','Mango','Apple','Orange','Grapes'];
// let removedele = fruits.splice(2,2);
// console.log(fruits)
// console.log(removedele)

// //fill()
// let fruits = ['Banana','Mango','Apple','Orange','Grapes'];
// let newarr = fruits.fill('*')
// console.log(fruits)
// console.log(newarr)

// let cities = ['Pune','Mumbai','Nagpur','Amravati'];
// let states = ['Maharashtra','MP','UP','AndhraPradesh'];
// let merge = cities.concat(states);
// console.log(merge)

//reverse()

// let cities = ['Pune','Mumbai','Nagpur','Amravati'];
// let reversearr = cities.reverse();
// console.log(reversearr)
// console.log(cities)
// console.log(cities[0])

//sort()
let cities = ['Pune','Mumbai','Nagpur','Amravati'];
console.log(cities.sort())
console.log(cities)


const myObj = {
    name:'Pooja',
    age:28,
    color:'White'
}

for(const obj in myObj){
    console.log(myObj[obj])
}

for(const city in cities){
    console.log(cities[city])
}