//  обьединяет все компоненты
// let Ctrl = {
//     Create: function(){}
// }
let mainCalendar = document.querySelector('.calendar');
let calendar = document.querySelector('.calendar').children[1];
let icon = calendar.querySelector('.icon-down');
let calendarMain = mainCalendar.querySelector('.main');

icon.addEventListener('click', function(e){
    e.preventDefault();
    console.log('fsdf');
    
    calendarMain.classList.toggle('calendar-toggle');
});
