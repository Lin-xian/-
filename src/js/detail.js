require(["require.config"],function(){
    require(["jquery","url","template","header","footer"],function($,url,template){
        
      class Detail {
        constructor(){
           this.init();
           this.ajax();
           this.enlarge();
           this.cartNumClick();
           this.addcart()
        }
        init(){
                
               }
        ajax () {
            $.ajax(
                {
                   url : url.baseUrl+"Vans List",
                   method:"GET",
                   dataType: "json",
                   success:function(res){
                      
                      if(res.res_code===1){
                        let vansdetail  = res.detail;
                        var htmldetail = template("Vans-detail",{detail:vansdetail});
                        $("#detail-container").html(htmldetail);
                        var li=$("#detail-container").children()[0];
                        var img=$(li).children()[0];
                        $("#bigimage").attr("src",$(img).attr("src"));
                        var lii=$("#detail-container").children()[0];
                        $(lii).children().css("border","2px solid #c8192e");
                        $("#biggest img").attr("src",$("#bigimage").attr("src"))

                    }

                   }
 
                }
             );
            $("#detail-container").on("mouseover","li img",function(e){
                e=e||window.event;
                var target =  e.target||e.srcElement;
                $(target).css("border","2px solid #c8192e").parent().siblings().children().css("border","none");
                $("#bigimage").attr("src",$(target).attr("src"));
                $("#biggest img").attr("src",$("#bigimage").attr("src"))
               
            })
          }

          cartNumClick(){
              
              $("#adda").on("click",()=>{
               
                   var num= $("#com-num").html()-0+1;
                   $("#com-num").html(num);
              })
              
              $("#dea").on("click",()=>{
               
                var num= $("#com-num").html()-1;
                if(num>=0){
                    $("#com-num").html(num);
                }
                
           })


          }

          enlarge(){
             $("#bigimage").on("mousemove",function(e){
               e=e||window.event;
               var MouseX= e.pageX-$(this).offset().left;
               var MouseY= e.pageY-$(this).offset().top;
               $("#biggest").show();
               $("#biggest img").css({"left":-3*MouseX+320+"px","top":-3*MouseY+320+"px"});
               }

             )

            $("#bigimage").on("mouseleave",function(e){
              e=e||window.event;
              $("#biggest").hide();
            })
            
            }
         addcart(){
             $("#addcart").on("click",()=>{
               if(confirm("商品已加入购物车,点击确定查看购物车")){
                 window.location.href="/html/cart.html"
               }
             })
             $("#paynow").on("click",()=>{
              if(confirm("去购物车结算？")){
                window.location.href="/html/cart.html"
              }
             })
         }
    
          
            
    }
    new Detail();
    

    })
})
