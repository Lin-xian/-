require(["require.config"],function(){
    require(["jquery","url","template","header","footer"],function($,url,template){
        class News{
            constructor(){
               this.init();
               this.ajax();
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
                            console.log($("#newscontainer"));
                           if(res.res_code===1){
                            let vansnews  = res.news;
                            var html = template("Vans-news",{news:vansnews});
                            $("#newscontainer").html(html);
                           }
                        
                        }
      
                     }
                )

            }
        }
        new News();

    })
})