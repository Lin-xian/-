define(["jquery"],function($){
        class Footer{
            constructor(){
                this.init();
            }

            init () {
                $("#footer-container").load("/html/module/footer.html"),function(){

                }
            }
        }
       return new Footer();
    }
)