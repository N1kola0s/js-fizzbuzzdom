let numb = document.getElementById("numbers");

for (let i=1; i<=100; i++){
console.log(i);

if(i % 15 == 0){

    let mult_fifteen = `<div class="numb  bg_red">fizzbuzz</div>`

    numb.insertAdjacentHTML(`beforeend`, mult_fifteen); 

}

else if (i % 3 == 0) {

    let mult_three = `<div class="numb bg_green">fizz</div>`;

    numb.insertAdjacentHTML(`beforeend`, mult_three); 

} 

else if (i % 5 == 0){

    let mult_five = `<div class="numb bg_yellow">buzz</div>`;

    numb.insertAdjacentHTML(`beforeend`, mult_five); 
    
}

else {
    let list = `<div class="numb">${i}</div>`;
    numb.insertAdjacentHTML(`beforeend`, list);

}

}

/* const myList = document.getElementById("my_list");


for (let i=1; i<=100; i++){

console.log(i);

const myListItem = document.createElement("li");
myListItem.innerHTML ="ciao";
myList.appendChild(myListItem); */