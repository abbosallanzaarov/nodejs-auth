"use strict";
exports.__esModule = true;
var express_1 = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var router = (0, express_1.Router)();
router.post('/login', auth_controller_1.login);
router.post('/register', auth_controller_1.register);
exports["default"] = router;
//# sourceMappingURL=auth.routes.js.map