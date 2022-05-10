$(document).ready(function(){

     
     $(".top-bar-wrap > .top-bar >.nav-box>ul>li").hover(function(){

       let num = $(this).index()
   
       
       if( $(this).hasClass("active") ){
        $(".top-bar-wrap > .top-bar >.nav-box>ul>li").removeClass("active")
        $(".nav-2-wrap").removeClass("active")
        $(".nav-2-wrap > .nav-2-box > .top > .content").removeClass("active")
         
       } else{
        $(this).addClass("active")
       $(this).siblings().removeClass("active")
       $(".nav-2-wrap").addClass("active")
       $(".nav-2-wrap > .nav-2-box > .top > .content").eq(num).addClass("active")
       $(".nav-2-wrap > .nav-2-box > .top > .content").eq(num).siblings().removeClass("active")
       }
   
     });
     $(".nav-2-wrap > .nav-2-box > .top").click(function(){
       $(".top-bar-wrap > .top-bar >.nav-box>ul>li").removeClass("active")
       $(".nav-2-wrap").removeClass("active")
       $(".nav-2-wrap > .nav-2-box > .top > .content").removeClass("active")
     });

     $(".slider").slick({
      dots: true ,
      arrows: false ,
      customPaging: function(slide , i){
        let slide_num = $(slide.$slides[i]).attr("data-dots-txt")
        console.log( slide_num ) 
        return slide_num
      } ,

    
    
    });
    
    $(".slider02").slick({

      dots: true ,
      arrows: false ,

    });
    


   // 끝
   })