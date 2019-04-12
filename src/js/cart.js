require(["require.config"],function(){
    require(["jquery","url","template","header","footer"],function($,url,template){
        class Cart{
            constructor(){
                
                this.ajax();
                this.init();
            }
            init(){
            
               
            }
            ajax(){
               $.ajax(
                    {
                       url : url.baseUrl+"Vans List",
                       method:"GET",
                       dataType: "json",
                       success:function(res){
                          
                          if(res.res_code===1){
                            let vanscart = res.cart;
                            var html = template("template-1",{cart:vanscart});
                            $("#cart-container").html(html);
                           }
                           var li =$("#cart-container li");
                           var lasttotal=0;
                           $.each(li, function (i, v) {
                          var nums =$($($(v).children()[2]).children()[1]).attr("value");
                          var price1 =$($(v).children()[3]).html();
                          var price2 =price1.slice(1,-3);
                          var total =price2*nums;
                          $($(v).children()[5]).html("￥"+total+".00");
                          var checked = $($($(v).children()[0]).children()[0]).attr("checked")
                           
                          if(checked){
                              lasttotal+=total;
                          }
                           
                        })
                          $("#lasttotal").html("￥"+lasttotal+".00");
                        
                    
                          //移除商品
                           $("#cart-container li .object .delete ").on("click",(e)=>{
                            e = e||window.event;
                            var target= e.target||e.srcElement;
                             if(confirm("确认移除该商品吗")){
                                   $(target).parent().parent().css("display","none");
                             }
                        })  
                          //全选
                         
                          $("#cart-container li label input ").on("click",(e)=>{
                            e = e||window.event;
                         var li =$("#cart-container li");
                          var a=0;
                          $.each(li, function (i, v) {
                            var check = $($($(v).children()[0]).children()[0])[0].checked;
                            if(check  ){
                                a++;
                            }           
                          })   
                          if  (a == li.length){
                              
                             $("#allchecked")[0].checked="checked";
                             a=0;
                          }
                          else {
                            $("#allchecked")[0].checked="";
                            a=0;
                          }     
                          })

                          $("#allchecked").on("click",(e)=>{
                            if($(this)[0].checked="checked"){
                                $.each(li, function (i, v) {
                                    $($($(v).children()[0]).children()[0])[0].checked="checked"    
                                  })   
                         }
                        })
                       

                          //增减数量
                           $("#cart-container li .num ").on("click",(e)=>{
                            e = e||window.event;
                            var target= e.target||e.srcElement;
                            if($(target).html() == " + "){
                                $(target).next().attr("value",$(target).next().attr("value")-0+1);
                            }
                            else if($(target).html() == " - "){
                                if($(target).prev().attr("value")>0){
                                    $(target).prev().attr("value",$(target).prev().attr("value")-1);
                                }
                                
                            }
                          //计算总价和总金额
                           var li =$("#cart-container li");
                           var lasttotal=0;
                           $.each(li, function (i, v) {
                          var nums =$($($(v).children()[2]).children()[1]).attr("value");
                          var price1 =$($(v).children()[3]).html();
                          var price2 =price1.slice(1,-3);
                          var total =price2*nums;
                          $($(v).children()[5]).html("￥"+total+".00");
                          var checked = $($($(v).children()[0]).children()[0]).attr("checked")
                           
                          if(checked){
                              lasttotal+=total;
                          }
                           
                        })
                          $("#lasttotal").html("￥"+lasttotal+".00");
                          
                          
                          
                           })
                        
                         
                    }
                    }
                 );
            }
        }
        new Cart();
    })
})