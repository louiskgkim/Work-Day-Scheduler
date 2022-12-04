// Function to update the time on the webpage
function updateTime() {
  let today = moment();

  // Update the time in the header based on today's date
  $('#currentDay').text(today.format('dddd, MMMM Do YYYY, h:mm.ss'));

  // Color past, present and future time blocks
  let now = moment().format('kk');
      for (let i = 0; i < scheduleElArray.length; i++) {
          scheduleElArray[i].removeClass('future past present');
          if (now > scheduleElArray[i].data('hour')) {
              scheduleElArray[i].addClass('past');
          } else if (now === scheduleElArray[i].attr('data-hour')) {
              scheduleElArray[i].addClass('present');
          } else {
              scheduleElArray[i].addClass('future');
          }}
}

// Elements for the text area
let saveBttn = $('.save-icon');
let containerEl = $('.container');
let schedule9am = $('#9AM');
let schedule10am = $('#10AM');
let schedule11am = $('#11AM');
let schedule12pm = $('#12PM');
let schedule1pm = $('#1PM');
let schedule2pm = $('#2PM');
let schedule3pm = $('#3PM');
let schedule4pm = $('#4PM');
let schedule5pm = $('#5PM');

// Array for all time elements in the text area
let scheduleElArray = [
    schedule9am,
    schedule10am,
    schedule11am,
    schedule12pm,
    schedule1pm,
    schedule2pm,
    schedule3pm,
    schedule4pm,
    schedule5pm,
];

renderLastRegistered();
updateTime();
setInterval(updateTime, 1000);

// TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

function renderLastRegistered() {
  for (let el of scheduleElArray) {
    el.val(localStorage.getItem('time block ' + el.data('hour')));
  }
}

// add function to save schedule in local storage
// add function for the 'clicks'

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.