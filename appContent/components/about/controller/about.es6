define([
    'common/app',
    "vendors/register",
    "common/service/ajax-service",
    "common/directive/dummy-directive"
    ],
    function(app, register, ajaxService){

        class aboutController{
          constructor(ajaxService){
            this.say = "Hello About";
            this.ajaxService = ajaxService;
            this.printLog();
          }

          printLog(){
            this.ajaxService.log();
          }

          static get $inject(){
              return ["ajaxService"];
          }
        }

        register(app).controller("aboutController", aboutController);
        //console.log(register(app));
        //aboutController.$inject = ["ajaxService"];
    }
);
