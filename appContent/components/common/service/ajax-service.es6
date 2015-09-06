/**
 * Created by abhishek on 12/4/15.
 */
define(["common/app", "vendors/register"], function(app, register){
    class AjaxService{
        log(){
            console.log("Into Service");
        }
    }

    //add as a service
    register(app).service("ajaxService", AjaxService);
});
