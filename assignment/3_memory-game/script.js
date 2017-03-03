console.log('Test Sourced');

var onReady = function() {
  console.log('doc ready');

  //TODO Add your code below to attach your event listeners to functions:
  $('.cardImg').fadeOut('slow');
  revealHide();
  singleClickFunc();

};

// on document ready run the onReady function
$(document).ready(onReady);
// revealHide function hides and shows all cards
function revealHide() {

  //TODO add your code here to get the desired functionality
  $('#revealHide').click(function() {
    //Show and Hide Value dynamically
    if ($('.cardImg').is(':hidden') === true ){
      $('.cardImg').show();
      //$('#revealHide').text('HIDE');
    }else {
      $('.cardImg').hide();
      //$('#revealHide').text('SHOW');
    }
  });

}

// singleClickFunc function hides and shows an indivdual card
function singleClickFunc() {
    //TODO add your code here to get the desired functionality
  $('.fruitBoard div').click(function() {
    $(this).children("img").fadeToggle();

  });

}
