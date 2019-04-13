require(["require.config"],function(){
   require(["jquery","url","template","header","footer"],function($,url,template){

      class List {
         constructor(){
            this.init();
         }
         init (){
            this.clickadd();
            this.list();
                }
         clickadd(){
            $("#side-type").on("click","li",function(e){
               e=e||window.event
               var target = e.target||e.srcElement;
               var _this = $(this);
               if($(target).html()=="+"){
                  $(_this.children()[1]).css("display","flex");
                  $(target).html("-");
               }
               else if($(target).html()=="-"){
                  $(_this.children()[1]).css("display","none");
                  $(target).html("+");
               }
            })
         }
         list(){
            $.ajax(
               {
                  url : url.baseUrl+"Vans List",
                  method:"GET",
                  dataType: "json",
                  success:function(res){
                    if(res.res_code===1){
                       let vanslist  = res.res_body.list;
                       var html = template("Vans-list",{list:vanslist});
                       $("#listcontainer").html(html);

                       let vansguess  = res.guess;
                       var htmlguess = template("Vans-guess",{guess:vansguess});
                       $("#guesscontainer").html(htmlguess);
                       
                       $("#down").on("click",function(){
                        res.res_body.list.sort(function(a,b){
                           return b.price - a.price;
                        })
                         let vanslist  = res.res_body.list;
                         var html = template("Vans-list",{list:vanslist});
                         $("#listcontainer").html(html);
   
                       })
                       $("#up").on("click",function(){
                        res.res_body.list.sort(function(a,b){
                           return a.price - b.price;
                        })
                         let vanslist  = res.res_body.list;
                         var html = template("Vans-list",{list:vanslist});
                         $("#listcontainer").html(html);
   
                       })
                     



                       $("#change").on("click",function(){
                          console.log($("#guesscontainer"));
                        $("#guesscontainer").empty();
                      
                        $.ajax(
                           {
                              url : url.baseUrl+"Vans List",
                              method:"GET",
                              dataType: "json",
                              success:function(res){
                                 if(res.res_code===1){
                                    let vansguess  = res.guess;
                                    var htmlguess = template("Vans-guess",{guess:vansguess});
                                    $("#guesscontainer").html(htmlguess);
                               }
                              }
                           }
                        )
                       })
                     }

                  
                  }

               }
            )
         }

      }
     new List();
              
      
   })
})