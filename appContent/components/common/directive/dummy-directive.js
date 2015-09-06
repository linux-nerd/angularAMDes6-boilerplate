"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(["common/app", "vendors/register"], function (app, register) {

    //const SERVICE = new WeakMap();

    var Dummy = (function () {
        function Dummy(ajaxService) {
            _classCallCheck(this, Dummy);

            this.restrict = "A";
            this.ajaxService = ajaxService;
            //SERVICE.set(this, ajaxService);
        }

        _createClass(Dummy, [{
            key: "link",
            value: function link(scope, iElm, iAttr) {
                alert("hi");
                // SERVICE.get(Dummy.instance).log();
                this.ajaxService.log();
            }
        }], [{
            key: "$inject",
            get: function get() {
                return ["ajaxService"];
            }
        }]);

        return Dummy;
    })();

    register(app).directive("dummyDirective", Dummy);
});
//# sourceMappingURL=dummy-directive.js.map
