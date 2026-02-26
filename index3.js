//  variable`s name
let interviewList=[];
let rejectedList=[];
let currentStatus= 'all';
// filter banner section
let filter = document.getElementById('filter-section');
//  count variable
let totalCards = document.getElementById('totalCards')
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
// toggleing btn section
let total= document.getElementById('total');
let interviewCountBtn= document.getElementById('interviewCountBtn');
let rejectedCountBtn= document.getElementById('rejectedCountBtn');

// all card section
let allCards =document.getElementById('allCards');

let mainContainer=document.getElementById('main');
let totalJobs= document.getElementById('totalJobs');

// interview and rejected buttons
let btn1 = document.getElementById('btn1');
let btn12 = document.getElementById('btn2');
// emty 
let emty =document.getElementById('emty');

// delete section

document.addEventListener('click', function (event) {
  let target = event.target;
  if (target.classList.contains('fa-trash')) {
    let card = target.closest('ul');
    card.remove();

    }
      calculated();
});

// emty section

document.addEventListener('click', function (event) {
  let target = event.target;
  if (target.classList.contains('btn1')) {
    let card = target.closest('emty');
   }
   card.remove();

  if(target.classList.contains('btn2')) {
  let card2 = target.closest('emty');
}
card2.remove();
})
  
function calculated(){
   totalCards.innerText= allCards.children.length;
   totalJobs.innerText= allCards.children.length + ' Jobs';
   interviewCount.innerText= interviewList.length;
    rejectedCount.innerText= rejectedList.length;
  
}
 calculated();


// button color section

function togglestyle(id){
total.classList.remove('bg-blue-600' ,'text-white');
interviewCountBtn.classList.remove('bg-blue-600' ,'text-white');
rejectedCountBtn.classList.remove('bg-blue-600' ,'text-white');

total.classList.add('bg-black' ,'text-white');
interviewCountBtn.classList.add('bg-black' ,'text-white')
rejectedCountBtn.classList.add('bg-black' ,'text-white');

let selected= document.getElementById(id);
currentStatus = id;
// 
selected.classList.remove('bg-black');
selected.classList.add('bg-blue-600', 'text-white');


// toggle section

  if(id == 'interviewCountBtn'){
    allCards.classList.add('hidden');
    filter.classList.remove('hidden');

  } else if(id == 'total'){
    allCards.classList.remove('hidden'); 
    filter.classList.add('hidden'); 
    //  this line of emty
  emty.classList.add('hidden')

  } else if(id == 'rejectedCountBtn'){
    allCards.classList.add('hidden');
    filter.classList.remove('hidden');
  //  
 rended();
}
}


mainContainer.addEventListener('click',function(event){
if(event.target.classList.contains('green')){
  let parentNode = event.target.parentNode.parentNode;
    let mobile =parentNode.querySelector('.mobile').innerText;
     let react =parentNode.querySelector('.react').innerText;
   let salery  =parentNode.querySelector('.salery').innerText;
 let pharagargh =parentNode.querySelector('.pharagargh').innerText;
 
let cardInfo ={mobile,
  react,
  salery,
  pharagargh,
}

let exist =interviewList.find(item=> item.mobile === cardInfo.mobile);
parentNode.querySelector('.outBtn').innerHTML=` <button class="green  btn btn-success btn-outline">INTERVIEW</button>`;
if(!exist){
  interviewList.push(cardInfo);
 
}

  rejectedList= rejectedList.filter(item=> item.mobile !== cardInfo.mobile);
  
  console.log( rejectedList);
render();
calculated();


} else if(event.target.classList.contains('red')){
  let parentNode = event.target.parentNode.parentNode;
    let mobile =parentNode.querySelector('.mobile').innerText;
     let react =parentNode.querySelector('.react').innerText;
   let salery  =parentNode.querySelector('.salery').innerText;
 let pharagargh =parentNode.querySelector('.pharagargh').innerText;

 
let cardInfo={mobile,
  react,
  salery,
  pharagargh,
}


let exists =rejectedList.find(item=> item.mobile === cardInfo.mobile);

parentNode.querySelector('.outBtn').innerHTML=`<button class="red btn btn-error btn-outline ml-2">REJECTED</button>`;
if(!exists){

 let fil= rejectedList.push(cardInfo);

}


interviewList=interviewList.filter(item=> item.mobile !== cardInfo.mobile);
console.log(rejectedList);
render();
calculated();
}

});

function render(){
filter.innerHTML='';

for (let data of  interviewList){
  // console.log(data)
  let div =document.createElement('div');

  div.className='bg-black py-4 border shadow-md border-gray-600 rounded-2xl  flex justify-around mx-20 sm:pl-10'
  div.innerHTML=`
  
         <ul class="bg-black py-4 border shadow-md border-gray-600 rounded-2xl  flex justify-around mx-20 sm:pl-10 ">
  
  <li class="space-y-4 pr-20">
      <div class="mobile text-white text-3xl font-bold">${data.mobile}</div>
      <div class="react font-semibold opacity-60  text-white">${data.react}</div>
  
    <p class="salery text-white opacity-60">${data.salery}</p>

      <div class="pharagargh font-semibold opacity-80 
       text-white">${data.pharagargh}</div>
    
   <button class="green  btn btn-success btn-outline">INTERVIEW</button>
<button class="red  btn btn-error btn-outline ml-2">REJECTED</button>
</li>
    <button id="delete-btn" class="fa-solid fa-trash btn btn-gosht border border-gray-500 bg-black p-4 text-white sm:mr-6" ></button>
</ul>
  `;
   filter.appendChild(div);
 
}
}


function rended(){
filter.innerHTML='';
console.log(rejectedList);

for (let rejected of rejectedList){
  console.log(rejected)
  let div =document.createElement('div');


  div.className='bg-black py-4 border shadow-md border-gray-600 rounded-2xl  flex justify-around mx-20 sm:pl-10'
  div.innerHTML=`
  
         <ul class="bg-black py-4 border shadow-md border-gray-600 rounded-2xl  flex justify-around mx-20 sm:pl-10 ">
  
  <li class="space-y-4 pr-20">
      <div class="mobile text-white text-3xl font-bold">${rejected.mobile}</div>
      <div class="react font-semibold opacity-60  text-white">${rejected.react}</div>
  
    <p class="salery text-white opacity-60">${rejected.salery}</p>

      <div class="pharagargh font-semibold opacity-80 
       text-white">${rejected.pharagargh}</div>
    
   <button class="green  btn btn-success btn-outline">INTERVIEW</button>
<button class="red  btn btn-error btn-outline ml-2">REJECTED</button>
</li>
    <button id="delete-btn" class="fa-solid fa-trash btn btn-gosht border border-gray-500 bg-black p-4 text-white sm:mr-6" ></button>
</ul>
  `;
   filter.appendChild(div);
}
}