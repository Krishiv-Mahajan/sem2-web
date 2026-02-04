let grand=document.querySelector('.grand');
let parent=document.querySelector('.parent');
let child=document.querySelector('.child');
let div=document.querySelector('.logss');

grand.addEventListener('click',()=>{
    let li=document.createElement('li');
    li.innerText='grand -> bubbling';
    div.appendChild(li);
});
    
parent.addEventListener('click',()=>{
    let li=document.createElement('li');
    li.innerText='parent -> bubbling';
    div.appendChild(li);
});
child.addEventListener('click',()=>{
    let li=document.createElement('li');
    li.innerText='child -> bubbling';
    div.appendChild(li);
});


grand.addEventListener('click',()=>{
    let li=document.createElement('li');
    li.innerText='grand -> capturing';
    div.appendChild(li);
},true);
parent.addEventListener('click',()=>{
    let li=document.createElement('li');
    li.innerText='parent -> capturing';
    div.appendChild(li);
},true);
child.addEventListener('click',()=>{
    let li=document.createElement('li');
    li.innerText='child -> capturing';
    div.appendChild(li);
},true);


let clear=document.querySelector('#clear');
clear.addEventListener('click',()=>{
    div.innerHTML='';
});
