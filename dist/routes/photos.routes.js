"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var photos_controller_1 = require("../controllers/photos.controller");
var passport_middleware_1 = __importDefault(require("../middlewares/passport.middleware"));
var upload_middleware_1 = __importDefault(require("../middlewares/upload.middleware"));
var router = (0, express_1.Router)();
router.get('/', photos_controller_1.findAll);
router.get('/:user_id', photos_controller_1.findByUserId);
router.post('/', passport_middleware_1["default"], upload_middleware_1["default"].single('photo'), photos_controller_1.uploadPhoto);
exports["default"] = router;
//# sourceMappingURL=photos.routes.js.map