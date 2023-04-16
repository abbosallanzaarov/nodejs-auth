"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var multer_1 = __importDefault(require("multer"));
var nanoid_1 = require("nanoid");
var storage = multer_1["default"].diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, (0, nanoid_1.nanoid)());
    }
});
var upload = (0, multer_1["default"])({
    storage: storage
});
exports["default"] = upload;
//# sourceMappingURL=multer.middleware.js.map