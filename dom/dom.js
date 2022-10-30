// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild) 
// siblings
// const ultags = document.body.children[0];
// const litage = ultags.children[0];
// console.log(litage)
tableTag=document.body.children[1];
console.log(tableTag.tBodies[0].rows[0].style="background-color: red")
console.log(tableTag.tBodies[0].rows[4].style="background-color: yellow")
console.log(tableTag.tBodies[0].rows[3].style="background-color: green")
console.log(tableTag.tBodies[0].rows[2].style="background-color: pink")
console.log(tableTag.tBodies[0].rows[1].style="background-color: purple")
//Search Element By ID
const ultag = document.getElementById('element');
ultag.style.backgroundColor = "blue"
//Search Element By Class
litem = document.body.getElementsByClassName("litem")
console.log(litem)
//Search Element By quree selectors just one element
const num1 = document.querySelector('.litem')
console.log(num1)
//Search Element By quree selectors All element
const num2 = document.querySelectorAll('.litem')
console.log(num2)
//Search Element By quree selectors just one element
const num3 = document.querySelectorAll('ul> li:nth-child(1)')
console.log(num3[0])

const button = document.getElementById('btn');
const list = document.getElementById('list');
// button.style= "background-color:cream";
button.style= 'color: red';
list.children[0].style= "background-color:red";
list.children[1].style= "background-color:yellow";
list.children[2].style= "background-color:blue";
list.children[3].style= "background-color:green";

// list.style.display = ("none");
// // button.addEventListener('click', (Event) =>{ 
// //     if(list.style.display== 'none'){
// //         list.style.display== 'block'
// //     } else {
// //         list.style.display== 'none'
// //     }
// // }) 

const num3 = document.getElementsByClassName('li')
console.log(num3[0])
// const num11 = document.getElementsByClassName('dropdown-content');
// console.log(num11.children[0]);
// // .style= "background-color:red";
// num11.children[1].style= "background-color:yellow";
// num11.children[2].style= "background-color:blue";
// num11.children[3].style= "background-color:green";
// console.log(num11);




































