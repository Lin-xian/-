require(["require.config"],function(){
    require(["jquery","header","footer"],function($){
        $("#user-login").on("click",function(){
            $("#phone-login").css({"color":"#666666","border":"none",});
            $(this).css({"border-bottom":"3px solid #c9192e","color":"#c9192e"});
            $("#password").css("display","block")
            $("#first-p").css("display","none");
            $("#second-p").css("display","none")
        })
        $("#phone-login").on("click",function(){
            $("#user-login").css({"color":"#666666","border":"none",});
            $(this).css({"border-bottom":"3px solid #c9192e","color":"#c9192e"});
            $("#password").css("display","none");
            $("#first-p").css("display","block");
            $("#second-p").css("display","block");
            $("#user").css("margin-top","20px");
            $("#other").css("margin-top","25px")


        })
        
        $("#register").on("click",function(){
            window.location.href="/html/register.html"
        })
        $("#login").on("click",function(){
          var user=localStorage.getItem("username");
          var pass=localStorage.getItem("password");   
          var usernow=$("#user").val();
          var passnow=$("#password").val();
          if(user==usernow && pass==passnow){
              if(confirm("登录成功")){
                  window.location.href="/index.html"
              }
           
          }
         else{
             confirm("用户名密码输入错误或尚未注册")
              }

        }) 
      

        
    })


})
