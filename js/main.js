(function() {
  var reveal = function() {
    $('#container').fadeIn(250);
  };
  $('body').waitForImages({
    finished: reveal,
    waitForAll: true
  });
}());

