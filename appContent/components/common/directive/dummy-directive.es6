define(["common/app", "vendors/register"], function(app, register){

    //const SERVICE = new WeakMap();

    class Dummy{
        constructor(ajaxService){
            this.restrict = "A";
            this.ajaxService = ajaxService;
            //SERVICE.set(this, ajaxService);
        }

        link(scope, iElm, iAttr){
            alert("hi");
            // SERVICE.get(Dummy.instance).log();
            this.ajaxService.log();
        }

        static get $inject(){
            return ["ajaxService"];
        }
    }

    register(app).directive("dummyDirective", Dummy);
});
