(function() {
  $('#loader').waitForImages({
    finished: function() {
      $('#loader').fadeIn(10);
    },
    waitForAll: true
  });
  var reveal = function() {
    $('#loader').fadeOut(250);
    $('#container').fadeIn(250);
  };
  $('body').waitForImages({
    finished: reveal,
    waitForAll: true
  });
}());

