(function() {
  var reveal = function() {
    $('#loader').fadeOut();
    $('#container').fadeIn();
  };
  $('body').waitForImages({
    finished: reveal,
    waitForAll: true
  });
}());

