$(document).ready(function() {

  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  //TODO add your code below to attach event listeners to the buttons
  document.getElementById('clickList').innerHTML = "";
  $('#fadeDiv').on( 'click', function(){
    fadeCat();
  });
  $('#hideDiv').on( 'click', function(){
    hideCat();
  });
 $('#animateDiv').on('click', function() {
   animateCat();
 });

  $('#resetDiv').on('click', function() {
    resetCat();
  });
});

// nav bar function to fade when mouse enters button
function mouseEnterButton() {
  $(this).fadeTo('fast', 0.5);
  //console.log('enter');
}

// nav bar function to fade when mouse enters button
function mouseLeaveButton() {
  //console.log('leave');
  $(this).fadeTo('fast', 1);
}

// hideCat is a function to hide the cat image when that button is clicked
function hideCat() {
  //TODO your function code here
  // hide catImg
  $('#catImg').show();
  $('#catImg').hide();
  //cleanup all existing display
    document.getElementById('clickList').innerHTML = "";
    // append '<p>hide toggle</p>' to 'clickList'
    var $addPic = '<img class=\'emojiImg\' src=\'http://pix.iemoji.com/images/emoji/apple/ios-9/256/see-no-evil-monkey.png\'>';
  $('#clickList').append('<p >' + $addPic + 'HIDE ME!' + $addPic + '</p>');

}

// fadeCat is a function to fade cat in or out when that button is clicked
function fadeCat() {
  //TODO your function code here
  // toggle catImg fade
  $('#catImg').show();
  $('#catImg').fadeOut('slow');
  //cleanup all existing display
  document.getElementById('clickList').innerHTML = "";
  // append '<p>fade toggle</p>' to 'clickList'
  var $addPic = '<img class=\'emojiImg\' src= \'https://image.freepik.com/free-icon/crying-emoticon-rounded-square-face_318-58403.jpg\'> ';
  $('#clickList').append('<p>' + $addPic + 'FADE ME!' + $addPic + '</p>');

}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat() {
  //TODO your function code here
  // animate catImg
  $('#catImg').show();
  //cleanup all existing display
  document.getElementById('clickList').innerHTML = "";
  var $addPic = '<img class=\'emojiImg\' src= \'http://www.allsmileys.com/files/sweetim-nature/6860.gif\'> ';
  //intilize the width and height of the cat image
  var imgWidth= document.getElementById('catImg').clientWidth;
  var imgHeight = document.getElementById('catImg').clientHeight;
  //add 10px for each width and height
  $('#catImg').animate({ 'width': imgWidth + 10 ,'height': imgHeight + 10 });
  // append '<p>animate</p>' to 'clickList'
  $('#clickList').append('<p>' + $addPic + 'ANIMATE!</p>');
}

// PRO MODE
// resetCat is a function to reset the cat photo to it's original size
// when that button is clicked.
function resetCat() {
  // reset catImg
    $('#catImg').show();
    var $addPic = '<img class=\'emojiImg\' src= \'http://cdn.osxdaily.com/wp-content/uploads/2016/09/think-about-it-emoji-610x621.jpg\'> ';
    // append '<p>reset</p>' to 'clickList'
    //cleanup all existing display
     document.getElementById('clickList').innerHTML = "";
     $("#catImg").removeAttr("style");
      $('#clickList').append('<p>LET\'S RESET!' + $addPic + '</p>');
    }



//}
