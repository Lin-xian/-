require(["require.config"],function(){
  require(["jquery","header","footer"],function($){
    
   
    // 轮播1
 class lunbo1{
  constructor(){
      this.init();
  }
  init(){
      $("#btn11").on("click",function(){
        $("#ul1").css("transform","translateX(0)")
       
      })
      $("#btn12").on("click",function(){
          $("#ul1").css("transform","translateX(-1280px)")
         
      })
      $(document).ready(function () {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            slidesPerView : 3,
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              
               }
            
          })        
        })
    
    
  }

}

new lunbo1;

//轮播图2        

  })
})
