"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jwt_service_1 = __importDefault(require("../services/jwt.service"));
function default_1(req, res, next) {
    var token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            message: 'Access Token missing.'
        });
    }
    try {
        var payload = jwt_service_1["default"].validate(token);
        req.payload = payload;
        next();
    }
    catch (err) {
        return res.status(401).json({
            message: 'Token validation error.',
            error: err
        });
    }
}
exports["default"] = default_1;
//# sourceMappingURL=passport.middleware.js.map