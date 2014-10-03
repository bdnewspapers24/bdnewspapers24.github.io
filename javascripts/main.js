var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(document).ready(function(){
/*  $("section h1, section h2").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("current");
  });*/
    
  sectionHeight();
  
  $('img').load(sectionHeight);
  
  //sticky nav(menu)
  
/*          $(function() {
            var offset = $("nav").offset();
            var topPadding = -40;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $("nav").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top - topPadding
                    }, 300);
                } else {
                    $("nav").stop().animate({
                        marginTop: 0
                    }, 0);
                };
            });
        });*/
		
/*  var top = $('nav').offset().top;
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top)
      $('nav').addClass('fixed');
    else
      $('nav').removeClass('fixed');
  });*/

});
//sticky nav(menu) END


fixScale = function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }
};