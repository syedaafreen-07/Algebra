const evenOdd = document.querySelector('.res-eo')
const res_even_odd = document.querySelector('.evenodd')

evenOdd.addEventListener('click',()=>{
    let num = prompt("Enter the Number");
    if(num%2===0){
        res_even_odd.innerHTML = `The Number ${num} is Even`;
    }
    else{
        res_even_odd.innerHTML = `The Number ${num} is Odd`;
    }
})
const add = document.querySelector('.res-add')
const res_addtion = document.querySelector('.add')

add.addEventListener('click',()=>{
    let n = Number(prompt("Enter 1st the Number"));
    let m = Number(prompt("Enter 2st the Number"));
    let o=n + m;
    res_addtion.innerHTML = `The sum of ${n} and ${m} is ${o}`;
})
const sub = document.querySelector('.res-sub')
const res_subtraction = document.querySelector('.sub')

sub.addEventListener('click',()=>{
    let n = Number(prompt("Enter 1st the Number"));
    let m = Number(prompt("Enter 2st the Number"));
    let o=n - m;
    res_subtraction.innerHTML = `The difference of ${n} and ${m} is ${o}`;
})
const mul = document.querySelector('.res-mul')
const res_multiplication = document.querySelector('.mul')

mul.addEventListener('click',()=>{
    let n = Number(prompt("Enter 1st the Number"));
    let m = Number(prompt("Enter 2st the Number"));
    let o=n * m;
    res_multiplication.innerHTML = `The product of ${n} and ${m} is ${o}`;
})
const div = document.querySelector('.res-div')
const res_division = document.querySelector('.div')

div.addEventListener('click',()=>{
    let n = Number(prompt("Enter 1st the Number"));
    let m = Number(prompt("Enter 2st the Number"));
    let o=n / m;
    res_division.innerHTML = `The division of ${n} and ${m} is ${o}`;
})
const fact = document.querySelector('.res-fact')
const res_factorial = document.querySelector('.fact')

fact.addEventListener('click',()=>{
    let n=Number(prompt("Enter the Number"));
    let fac=1;
    for(let i=n;i>0;i--)
        {
            fac=fac*i
        }
    res_factorial.innerHTML = `The factorial of the number ${n} is ${fac}`;
})