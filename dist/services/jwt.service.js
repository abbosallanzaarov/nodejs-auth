"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function sign(user) {
    var payload = {
        userId: user.id,
        username: user.username,
        role: user.role
    };
    return jsonwebtoken_1["default"].sign(payload, process.env.JWT_SECRET);
}
function validate(token) {
    return jsonwebtoken_1["default"].verify(token, process.env.JWT_SECRET);
}
exports["default"] = {
    sign: sign,
    validate: validate
};
//# sourceMappingURL=jwt.service.js.map