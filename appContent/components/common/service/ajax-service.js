/**
 * Created by abhishek on 12/4/15.
 */
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["common/app", "vendors/register"], function (app, register) {
    var AjaxService = (function () {
        function AjaxService() {
            _classCallCheck(this, AjaxService);
        }

        //add as a service

        _createClass(AjaxService, [{
            key: "log",
            value: function log() {
                console.log("Into Service");
            }
        }]);

        return AjaxService;
    })();

    register(app).service("ajaxService", AjaxService);
});
//# sourceMappingURL=ajax-service.js.map
