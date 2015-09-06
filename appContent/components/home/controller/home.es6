define(['common/app'], function(app){
    class Home{
        constructor(){
            this.say = "hi";
            this.init();
        }

        init(){
            console.log("Home Controller initialized.")
        }

        static get $inject(){
            return [];
        }
    }

    app.controller("homeController", Home);
});
