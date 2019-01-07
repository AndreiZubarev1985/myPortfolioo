'use strict';


/*console.log(a);

let person = {
    name: "John",
    age: 25,
    isMarried: false
}
console.log(person.age);

let arr = ['andrei', 'boris', 'helen'];
console.log(arr[0]);

// alert('Hello world');
// let answer = confirm('Are you ready?');
// console.log(answer);

// let answer = prompt('How old are you?', ' ');
// console.log(typeof(arr));

let incr = 10;
let decr = 10;


console.log(incr++, decr--);

let isChecked = true;
let isClose = false;
console.log(isChecked && isClose);
console.log(isChecked || isClose);
*/
// ES 6
/*
let name =  'Ivan';
let age = 30;
let mail = 'ex@mail.ru';

document.write(`User ${name} ${age} years ${mail}`);

function makeArray() {
    var items = [];

    for(let i = 0; i < 10; i++) {
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }
    return items;
} 

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();
*/
// arrow functions

let fun = () => {
    console.log(this);
};
fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDoudble(number, basis = 2) {
    // basis = basis || 2; ES5
    console.log(number*basis);
}

calcOrDoudble(3, 5);
calcOrDoudble(6);