"use strict";
require.config({
    baseUrl: "components/",
    paths: {
        "jquery": "vendors/jquery",
        "bootstrap": "vendors/bootstrap",
        "angular": "vendors/angular",
        "angular-route": "vendors/angular-ui-router",
        "angularAMD": 'vendors/angularAMD.min',
        "ui-bootstrap": "vendors/angular-bootstrap-tpls"
        // "register": "vendors/register"
    },
    shim: {
        "angular": ["jquery"],
        // "register": ["angular"],
        "angularAMD": ["angular"],
        "angular-route": ["angular"],
        "bootstrap": ["jquery"],
        "ui-bootstrap": ["angular", "bootstrap"]
    },
    deps: ["common/app"]
});
