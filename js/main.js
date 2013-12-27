(function() {
  var reveal = function() {
    $('#loader').fadeOut(250);
    setTimeout(function() {
      $('#container').fadeIn();
    }, 100);
  };
  $('body').waitForImages({
    finished: reveal,
    waitForAll: true
  });
}());

