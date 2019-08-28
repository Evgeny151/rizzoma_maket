let guests = document.querySelector(".guests");
let icon_Down = guests.querySelector(".icon-down");
let guests_counter = document.querySelector(".guests-counter");
let button_minus = document.querySelectorAll(".minus");
let button_plus = document.querySelectorAll(".plus");

let apply = guests_counter.querySelector(".apply");
let clear = guests_counter.querySelector(".clear");

//  взрослые
let grown_count = document.querySelector(".grown");
let grown_button_count = grown_count.querySelector(".button-count");

//  дети
let child_count = document.querySelector(".child");
let child_button_count = child_count.querySelector(".button-count");

//  младенцы
let baby_count = document.querySelector(".baby");
let baby_button_count = baby_count.querySelector(".button-count");

let countGrown = 0;
let countChild = 0;
let countBaby = 0;

icon_Down.onclick = function() {
    guests_counter.classList.remove('guests-dropdown-none');
    guests_counter.classList.toggle('guests-dropdown-block');
}

//  сколько взрослых/детей/младенцев
document.addEventListener('click', function(e){
    e.preventDefault();

    if (grown_count.contains(e.target) && e.target.innerText === '+') {
        countGrown++;
        grown_button_count.querySelector(".count").innerText = countGrown;

    } else if (child_count.contains(e.target) && e.target.innerText === '+') {
        countChild++
        child_button_count.querySelector(".count").innerText = countChild;
        
    } else if (baby_count.contains(e.target) && e.target.innerText === '+') {
        countBaby++
        baby_button_count.querySelector(".count").innerText = countBaby; 
    }

    if (grown_count.contains(e.target) && e.target.innerText === '-') {
        countGrown--;

        if (countGrown < 0) {
            countGrown = 0;
        }

        grown_button_count.querySelector(".count").innerText = countGrown;

    } else if (child_count.contains(e.target) && e.target.innerText === '-') {
        countChild--;

        if (countChild < 0) {
            countChild = 0;
        }

        child_button_count.querySelector(".count").innerText = countChild;
        
    } else if (baby_count.contains(e.target) && e.target.innerText === '-') {
        countBaby--;

        if (countBaby < 0) {
            countBaby = 0;
        }
        
        baby_button_count.querySelector(".count").innerText = countBaby; 
    } 
});

//  применить 
apply.addEventListener('click', function(e){
    e.preventDefault();

    // младенцев не считаем
    let sumGuests = countGrown + countChild;
    document.querySelector(".guests").querySelector('input').value = sumGuests + " гостей";

    guests_counter.classList.add('guests-dropdown-none');
});

//  очистить
clear.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(".guests").querySelector('input').value = "";
});