$(document).ready(function() {

  // nav bar event listeners set up
  $('.navDiv').mouseenter(mouseEnterButton);
  $('.navDiv').mouseleave(mouseLeaveButton);

  //TODO add your code below to attach event listeners to the buttons
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
  $('#catImg').hide();
  // append '<p>hide toggle</p>' to 'clickList'
  if (!document.getElementById('clickList').innerText.includes("hide")) {
    $('#clickList').append('<p>hide toggle</p>');
  } else{
    $('#clickList').append('');
  }
}
// fadeCat is a function to fade cat in or out when that button is clicked
function fadeCat() {
  //TODO your function code here
  // toggle catImg fade
  $('#catImg').fadeOut('slow');
  // append '<p>fade toggle</p>' to 'clickList'
  if (!document.getElementById('clickList').innerText.includes("fade")) {
    $('#clickList').append('<p>fade toggle</p>');
  } else{
    $('#clickList').append('');
  }

}

// animateCat is a function to grow the cat's height and width by 10px when that button is clicked
function animateCat() {
  //TODO your function code here
  // animate catImg

  $('#catImg').animate({left: '160px'});
  //$("div").animate({left: '250px'});
    // append '<p>animate</p>' to 'clickList'
    if (!document.getElementById('clickList').innerText.includes("animate")){
      $('#clickList').append('<p>animate</p>');
    }else {
      $('#clickList').append('');
    }


}

// PRO MODE
// resetCat is a function to reset the cat photo to it's original size
// when that button is clicked.
function resetCat() {
  // reset catImg
    $('#catImg').show();
    console.log(document.getElementById('clickList').innerText.includes("animate"));
    // append '<p>reset</p>' to 'clickList'
    if (!document.getElementById('clickList').innerText.includes("reset")) {
      $('#clickList').append('<p>reset</p>');
    } else{
      //clear all the appendings after reset
      document.getElementById('clickList').innerHTML = "";
      if (document.getElementById('clickList').innerText.includes("animate"))
      {
        $('#catImg').animate({left: '-50px'});
      }
      //$('#catImg').style.position = "static";
    }

    }



//}
