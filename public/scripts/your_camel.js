$(document).ready(
  function() {
  	//FAQ Popup
	  $("#faq_trigger").click(function () {
	      $("#faq_pop").show();

	      $('body').css('overflow', 'hidden');
	      $("#faq_trigger").addClass('active');
	      $('body').css('overflow', 'hidden');

	      $("#terms_pop").hide();
	      $("#terms_trigger").removeClass('active');
	      $('body').css('overflow', 'visible');

	      if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
					window.scrollTo(0, 0);
				}
	  });
	  $("#exit_faq").click(function () {
	      $("#faq_pop").hide();
	      $("#faq_trigger").removeClass('active');
	      $('body').css('overflow', 'visible');
	  });
	  //Terms Popup
	  $("#terms_trigger").click(function () {
	      $("#terms_pop").show();

	      $('body').css('overflow', 'hidden');
	      $("#terms_trigger").addClass('active');
	      $('body').css('overflow', 'hidden');

	      $("#faq_pop").hide();
	      $("#faq_trigger").removeClass('active');
	      $('body').css('overflow', 'visible');

	      if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
					window.scrollTo(0, 0);
				}
	  });
	  $("#exit_terms").click(function () {
	      $("#terms_pop").hide();
	      $("#terms_trigger").removeClass('active');
	      $('body').css('overflow', 'visible');
	  });
});


var hero = $('.hero_box')
, footerHeight = $('.footer').height()
, background = $('.background')
, Start = 0, End = footerHeight;

if( /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){
	var $copyright = $("#copyright").detach();
	$copyright.appendTo(".footer");

} else{
$(window).bind('scroll', function(){

	var offset = $(document).scrollTop()
	, zdex = -1,	opacity = 0, blur = 0.001, moz_opacity;

	  if( offset <= Start ){
	 			zdex = -1;
        opacity = 0;
        blur = 0.001;
    }else if( offset <= End ){
    		zdex = 1;
        opacity = -1 + offset / (End/2);
        blur =  14*(offset / End);
    } else{
    		zdex = 1;
        opacity = 1;
        blur = 14;
    }

  hero.css('opacity', opacity);
  hero.css('z-index', zdex);
  background.css({'-webkit-filter': 'blur('+blur+'px)'});
  background.css('opacity', moz_opacity);
})
};


var isFirefox = typeof InstallTrigger !== 'undefined';
 if (isFirefox == true) {
	 	$(window).bind('scroll', function(){

		var offset = $(document).scrollTop()
		,	 moz_opacity = 1, moz_hero = 0;

		  if( offset <= Start ){
	        moz_opacity = 1;
	        moz_hero = 0
	    }else if( offset <= End ){
	        moz_opacity = 1 - offset / (End/2);
	        moz_hero = -.8 + offset / (End/2);
	    } else{
	        moz_opacity = 0
	        moz_hero = 1
	    }

	  hero.css('opacity', moz_hero);
	  background.css('opacity', moz_opacity);
	})
};

//Show Hero Box After Initial Scroll
$(window).ready(function(){
    $(this).one('scroll', function(){
        var hero = $('.hero_box');
        hero.css("display", 'inline-block');
    });
});


$('.arrow').click(function(){

  var WH = $(window).height();
  var SH = $('body')[0].scrollHeight;
  $('html, body').stop().animate({scrollTop: SH-WH}, 200);

});
