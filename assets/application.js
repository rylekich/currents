$(document).ready(function() {
      

      // flickity init
      $('.main-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: 3000,
        selectedAttraction: 0.01,
        // prevNextButtons: false,
        pageDots: false,
        percentPosition: false,
        resize: false,
        setGallerySize: false,
        wrapAround: true

        // imagesLoaded: true
      });

      $('.prod-carousel').flickity({
        cellAlign: 'left',
        contain: true,
        // prevNextButtons: false,
        selectedAttraction: 0.01,
        pageDots: false,
        percentPosition: false,
        resize: false
      });


      //index publisher collapse function + change arrow direction + scrolltop
        $("div.publisher-collection").hide();

        $('div.publisher-name').click(function(){
          var id = $(this).data('id');

          $('div.publisher-collection[data-id="'+id+'"]').toggle(); 
          $(this).toggleClass("open");

          $('html, body').animate({
          scrollTop: $(this).offset().top}, 750);

        });
     

});