(function() {
  $('#loader').waitForImages({
    finished: function() {
      $('#loader').show();
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

