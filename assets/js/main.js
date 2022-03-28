let numb = document.getElementById("numbers");

for (let i=1; i<=100; i++){
console.log(i);

let list = `<div class="numbers">${i}</div>`;

let three = i / 3 % 0;
let five = i / 5 % 0;
let fifteen = i / 15 % 0;

let mult_three = `<div class="numbers bg_green">fizz</div>`;

let mult_five = `<div class="numbers bg_yellow">buzz</div>`;

let mult_fifteen = `<div class="numbers bg_red">fizzbuzz</div>`

if(i = three){

    numb.insertAdjacentHTML(`beforeend`, mult_three); 
    
    
}

else if (i = five) {

    numb.insertAdjacentHTML(`beforeend`, mult_five); 

} 

else if (i = fifteen){

    numb.insertAdjacentHTML(`beforeend`, mult_fifteen); 

    

}

else {

    numb.insertAdjacentHTML(`beforeend`, list);
      
}

}

/* const myList = document.getElementById("my_list");


for (let i=1; i<=100; i++){

console.log(i);

const myListItem = document.createElement("li");
myListItem.innerHTML ="ciao";
myList.appendChild(myListItem); */