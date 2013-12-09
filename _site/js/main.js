$('.slide').waitForImages({
  finished: function() {
    console.log("Loaded Images");
    $('.loader').fadeOut();
    $('.slide').fadeIn();
  },
  waitForAll: true
});
