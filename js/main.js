$('section').waitForImages({
  finished: function() {
    console.log("Loaded Images");
    $('.loader').fadeOut();
    $('section').fadeIn();
  },
  waitForAll: true
});
