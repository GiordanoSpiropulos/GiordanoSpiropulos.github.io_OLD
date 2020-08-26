 

$(document).ready(function(){
    $(".inicio").fadeIn(4000);

    var $target = $('.anime'),
    animationClass = 'anime-start',
    offset = $(window).height() * 3/4;

    function inView(){
        var documentTop= $(document).scrollTop();

        $target.each(function(){
            var itemTop = $(this).offset().top;
            if(documentTop > itemTop-offset){
                $(this).addClass(animationClass);
            }else{
                $(this).removeClass(animationClass);
            }
        });
    }
    
  
    inView();

    $(document).scroll(function(){
        inView();
    });




    //Animação para os itens da NavBar
    $(".nav-link").hover(function(){       
         $(this).stop().animate({color:'white'},200); 
            $(this).children().stop().animate({color:'#72bcd4'},200);
            

    },function(){    
        $(this).stop().animate({color:'#C0C0C0'},200);
            $(this).children().stop().animate({color:'#C0C0C0'},200);
         
    });

    //Animação para as redes sociais
    $("#social-media>div>a").hover(function(){
        $(this).stop().animate({color:'white',backgroundColor:"#72bcd4"});
        
            
    },function(){
        $(this).stop().animate({color:'#C0C0C0',backgroundColor:"#2b3547"});
    });
   

    $("#curriculo").fadeIn(4000);
    $('#curriculo').on('click', function() {
        $('#overlay')
          .css({backgroundImage: `url(${this.src})`})
          .addClass('open')
          .one('click', function() { $(this).removeClass('open'); });
      });

      $("#sidebarcollapse").on('click',function(){
        $("#sidebar").toggleClass('active');
        $("#sidebar").toggleClass("in");
      });
      

      
  


});


