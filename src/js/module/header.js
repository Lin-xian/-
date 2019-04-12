define(["jquery"],function($){
  class Header {
      constructor(){
         this.init();
      }
      init () {

        $("#header-container").load("/html/module/header.html" , ()=>{
          this.clicklogo();
          this.loginnav()
         
        });
        
        
             }
      clicklogo(){
        $("#logo").on("click",function(){
          window.location.href="/"
         
        })
      }

      loginnav(){
        var user = localStorage.getItem("username");
        if(user){
          $("#ydll").css("display","block")
          $("#wdl").css("display","none")
          $("#ydl").html(user+" 欢迎您")

        }
      }
  }    
   return new Header(); 
})