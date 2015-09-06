"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

define(['common/app'], function (app) {
    var Home = (function () {
        function Home() {
            _classCallCheck(this, Home);

            this.say = "hi";
            this.init();
        }

        _createClass(Home, [{
            key: "init",
            value: function init() {
                console.log("Home Controller initialized.");
            }
        }], [{
            key: "$inject",
            get: function get() {
                return [];
            }
        }]);

        return Home;
    })();

    app.controller("homeController", Home);
});
//# sourceMappingURL=home.js.map
