// function grade(){
//    if(demo.value >= 70 && demo.value <=100){
//     showup.innerHTML = "A excellent";
//     }
//     else(showup.innerHTML = "fail");
// }


// let form1 = document.getElementById('form1');
// form1.addEventListener("submit" , function (e){
//     e.preventDefault();
//     if (score.value >= 70 && score.value <= 100){
//         result.innerHTML = "A excellent";
//     }else
//     if (score.value >= 60  && score.value <= 69){
//         result.innerHTML = "B very good";
//     }
//     if (score.value >= 50  && score.value <= 59){
//         result.innerHTML = "C average";
//     }
//     if (score.value >= 40  && score.value <= 49){
//         result.innerHTML = "D poor";
//     }
//     if (score.value >= 30  && score.value <= 39){
//         result.innerHTML = "E bad";
//     }
//     if (score.value <= 29  && score.value <= 1){
//         result.innerHTML = "F fail";
//     }
// })





/*  Array Methods    */

// push means to add value from the right
const nums =[2,3,4,5]
nums.push([5,6,7,8])
console.log(nums)
document.getElementById('practice').innerHTML = nums;

// pop means to remove value from the right
nums.pop()
console.log(nums)
document.getElementById('practice').innerHTML = nums;

// unshift means to add value from the left
const num =[7,9,2,5]
num.unshift([3,5,8])
console.log(num)
document.getElementById('practice').innerHTML = num;

// shift means to remove value from the left
const letters=["a","d","f","u","y"]
letters.shift()
console.log(letters)
document.getElementById('practice'). innerHTML = letters;

// every will check if a condition is met for every of the values
const users = [
    {
        name: "Temitope",
        age: 12,
        school: ""
    },
    {
        name: "Abdul",
        age: 22,
        school: "Lautech"
    },
    {
        name: "Oyin",
        age: 8,
        school: "Unilag"
    },
    {
        name: "Ali",
        age: 32,
        school: "Nsukka"
    }
]
 let all = users.every(pupil =>pupil.school)
 console.log(all)

//  some is used to check if some of the values are present

let student = users.some(pupil => pupil.school)
console.log (student);

// includes is used to check if a value is present in the available values

let check = users.includes(student => student.name);
console.log(check);

// filter is used to separate some set of values from the whole object or array

const group = [
    {
        name: "Temitope",
        age: 12,
        school: ""
    },
    {
        name: "Abdul",
        age: 22,
        school: "Lautech"
    },
    {
        name: "Oyin",
        age: 8,
        school: "Unilag"
    },
    {
        name: "Ali",
        age: 32,
        school: "Nsukka"
    }
]

let ass = group.filter((value)=>(value.age<=20));
console.log (ass)

// reduce is used to sum the total number of an object

const product = [
    {
        name:"shoe",
        price : 1200,
        quantity: 3
    },
    {
        name:"bags",
        price : 100,
        quantity: 13
    },
    {
        name:"cap",
        price : 200,
        quantity: 7
    },
    {
        name:"scarf",
        price : 600,
        quantity: 5
    }
]
 let total = product.reduce((sum, value)=>sum+ (value.price*value.quantity),0)
 console.log(total)
//  for each product
// let shoeprice = shoe.reduce((sum, each)=> sum + (each.price * each.quantity), 400)
// console.log(shoeprice)

// splice and slice: splice is used to add or remove value while slice is used to remove value 

const count =[34,56,45,60,89,100]
let arr= count.splice(2, 1,)
console.log(arr)
// let y = count.slice(0,3);
// console.log(y)

// concat is used to join values together

let xy = count.concat("ade", 45)
console.log(xy)

// Alhamdulillah Robill Alamein


 

