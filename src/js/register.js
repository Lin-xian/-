require(["require.config"],function(){
    require(["jquery","header","footer"],function($){
       
        $("#submit").on("click",()=>{
           
            var username=localStorage.setItem("username",($("#user").val()));
            var password=localStorage.setItem("password",($("#password").val()));
            var password2=localStorage.setItem("password2",($("#password2").val()));
            localStorage.setItem("yzm",($("#yzm").val()));
            if(!(password==password2)){
                confirm("两次密码填写不一致");
            }
            // else if(username.length()!=11){
            //     confirm("请输入11位用户名");
            // }
                  
        })
    })
})