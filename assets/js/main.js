let numb = document.getElementById("numbers");

for (let i=1; i<=100; i++){
console.log(i);

if(i % 15 == 0){

    //stampo fizzbuzz in multipli di 15

    let mult_fifteen = `<div class="col numb bg_red"><strong>fizzbuzz</strong></div>`

    numb.insertAdjacentHTML(`beforeend`, mult_fifteen); 

}

else if (i % 3 == 0) {

    //stampo fizz in multipli di 3

    let mult_three = `<div class="col numb bg_green"><strong>fizz</strong></div>`;

    numb.insertAdjacentHTML(`beforeend`, mult_three); 

} 

else if (i % 5 == 0){

    //stampo buzz in multipli di 5

    let mult_five = `<div class="col numb bg_yellow"><strong>buzz</strong></div>`;

    numb.insertAdjacentHTML(`beforeend`, mult_five); 
    
}

else {

    let list = `<div class="col numb"><strong>${i}</strong></div>`;
    numb.insertAdjacentHTML(`beforeend`, list);

}

}
