function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keypress', function(key) {
    if (key.which == 71) {
      alert('You pressed G')
    }
  });
}

function submitIt() {
  $('input:submit').on('click', function() {
    alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){

getIt()
//frameIt()
pressIt()
submitIt()

});
