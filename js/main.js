$('.slide').waitForImages({
  finished: function() {
    console.log("Loaded Images");
    $('.slide').fadeIn();
  },
  waitForAll: true
});
