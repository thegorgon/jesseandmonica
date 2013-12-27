$('body').waitForImages({
  finished: function() {
    console.log("Loaded Images");
    $('body').fadeIn();
  },
  waitForAll: true
});
