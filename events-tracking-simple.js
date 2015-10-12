//DRUPAL/ANYTHING events tracking with piwik and google analytics.
(function($, Drupal, window, document, undefined) {
$.fn.randomise = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};
  $(document).ready(function() {
  $('.homepage-content article').randomise();
  var pos = 0;
  $('.homepage-content article').each(function() {
    var h3content = $(this).find('h3').text();
    $(this).find('a.btn').attr('data-position', pos);
    $(this).find('a.btn').attr('data-title', h3content);
    pos += 1;
  });
  
$('.homepage-content article a.btn').click(function() {
  event.preventDefault();
  var linkUrl = $(this).attr('href');
  //set timeout incase something breaks..
  setTimeout(clickLink, 1000);
  var formSubmitted = false;
  function clickLink() {
    if (!formSubmitted) {
      formSubmitted = true;
      window.location = linkUrl;   
    }
  }
  _paq.push(['trackEvent', 'homepage-products', $(this).attr('data-title'), $(this).attr('data-position')]);
  ga('send', 'event', 'homepage-products', $(this).attr('data-title'), $(this).attr('data-position'), {
    hitCallback: clickLink
  });
})

  }); // end of doc ready
})(jQuery, Drupal, this, this.document);
