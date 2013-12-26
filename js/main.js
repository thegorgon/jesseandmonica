$('section').waitForImages({
  finished: function() {
    console.log("Loaded Images");
    $('section').fadeIn();
  },
  waitForAll: true
});
