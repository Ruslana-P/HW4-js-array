console.log('------------- #5')
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    function() { console.log("Вы согласились."); }, // нужно обновить данное место
    function() { console.log("Вы отменили выполнение."); } // нужно обновить данное место
);

console.log('------------- #6')
let string = 'my-short-string';
let arr6 = string.split('-');
console.log(arr6);

console.log('------------- #7')
let arr7 = ['JavaScript', '2015'];
let string7 =  arr7.join(' ');
console.log(string7);

console.log('------------- #8')
let users = [
    {id:1, name:"Vic", age:21},
    {id:2, name:"Petya", age:30},
    {id:3, name:"Jon", age:5}
];

let selectedUsers = users.filter(function (item) { return item.age<20});

console.log(selectedUsers);

console.log('------------- #9')
let users9 = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];

let names = [];
users9.forEach( function (element) {
    names.push(element.name); }
);

console.log(names);


// users9.forEach((element) => {names.push(element.name)} );
//console.log(names);

console.log('------------- #10')
let array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterRangeInPlace(arr, a, b){
    arr.splice(0, a);
    arr.splice (b-1, arr.length+1-b );
    console.log(arr);
}

filterRangeInPlace(array10, 2, 6)

console.log('------------- #11')
let result11
function preobrazowanie(a,b){
    result11 = a.split(b);
}

let string11 = 'String for exersice 11';
preobrazowanie(string11, ' ')
console.log(result11);   //в завданні не вказано, що массив повинен виводитись в консоль, лише повертатись. Цей рядок для того щоб перевірити , що фунція працює


console.log('------------- #12')

function slArray(arr, startIndex, endIndex){
    result12 = arr.slice (startIndex, endIndex);
    return result12;
}

let array12 = [5, 3, 8, 1]
let range = slArray (array12, 1, 4)
console.log (range);
console.log (array12);


console.log('------------- #13')
function sumWithSpreadOp(...args) {
    let sum = 0;
    for (let arg of args) { sum += arg; }
    return sum;
}

console.log(sumWithSpreadOp(1, 2, 3, 4));



