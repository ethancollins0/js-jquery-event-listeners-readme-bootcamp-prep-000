function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on('load', function() {
    document.getElementsByTag('img').className = 'tasty';
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
  $('#typing').on('submit', function() {
    alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){

  getIt()
  submitIt()
  pressIt()
});
