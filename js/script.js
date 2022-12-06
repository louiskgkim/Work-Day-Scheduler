// Function to update the time on the webpage
function updateTime() {
  var today = moment();

  // Update the time in the header based on today's date
  $('#currentDay').text(today.format('dddd, MMMM Do YYYY, h:mm.ss'));

  // Color past, present and future time blocks
  var now = moment().format('dddd, MMMM Do YYYY, h:mm.ss');
      for (var i = 0; i < scheduleElArray.length; i++) {
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
var saveBtn = $('.save-btn');
var containerEl = $('.container');
var schedule9am = $('#9AM');
var schedule10am = $('#10AM');
var schedule11am = $('#11AM');
var schedule12pm = $('#12PM');
var schedule1pm = $('#1PM');
var schedule2pm = $('#2PM');
var schedule3pm = $('#3PM');
var schedule4pm = $('#4PM');
var schedule5pm = $('#5PM');

// Array for all time elements in the text area
var scheduleElArray = [
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
  // the values of the corresponding textarea elements.
function renderLastRegistered() {
  for (var el of scheduleElArray) {
    el.val(localStorage.getItem('time block ' + el.data('hour')));
  }
}

// added function for the 'clicks'
function handleFormSubmit(event) {
  event.preventDefault();

   var btnClicked = $(event.currentTarget);

  //  https://www.w3schools.com/jquery/traversing_siblings.asp 
  // regarding sibling method was found here
   var targetText = btnClicked.siblings('textarea');

   var targetTimeBlock = targetText.data('hour');

   localStorage.setItem('time block ' + targetTimeBlock, targetText.val());
}

saveBtn.on('click', handleFormSubmit);