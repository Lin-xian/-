require(["require.config"],function(){
    require(["jquery","header","footer"],function($){
       
        $("#submit").on("click",()=>{
           
            var username=($("#user")).val();
            var password=($("#password")).val();
            var password2=($("#password2")).val();
            var checked=$("#checkbox")[0].checked;
            console.log(checked);
            if(username.length != 11){
                confirm("请输入11位用户名")
              }
           else if(password!=password2){
               confirm("两次密码填写不一致")
           }
       
           else if(!checked){
               confirm("请阅读并同意隐私政策和使用条款")
           }
           else{
               if(confirm("注册成功，现在去登录")){
                   window.location.href="/html/login.html";
                   localStorage.setItem("username",username);
                   localStorage.setItem("password",password);
               }
           }
                  
        })
    })
})