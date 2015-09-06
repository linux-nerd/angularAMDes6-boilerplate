"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['common/app', "vendors/register", "common/service/ajax-service", "common/directive/dummy-directive"], function (app, register, ajaxService) {
    var aboutController = (function () {
        function aboutController(ajaxService) {
            _classCallCheck(this, aboutController);

            this.say = "Hello About";
            this.ajaxService = ajaxService;
            this.printLog();
        }

        _createClass(aboutController, [{
            key: "printLog",
            value: function printLog() {
                this.ajaxService.log();
            }
        }], [{
            key: "$inject",
            get: function get() {
                return ["ajaxService"];
            }
        }]);

        return aboutController;
    })();

    register(app).controller("aboutController", aboutController);
    //console.log(register(app));
    //aboutController.$inject = ["ajaxService"];
});
//# sourceMappingURL=about.js.map
