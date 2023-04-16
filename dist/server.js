"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var auth_routes_1 = __importDefault(require("./routes/auth.routes"));
var photos_routes_1 = __importDefault(require("./routes/photos.routes"));
var path_1 = __importDefault(require("path"));
var app = (0, express_1["default"])();
//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use((0, cors_1["default"])());
app.use('/uploads', express_1["default"].static(path_1["default"].join(__dirname, '/../uploads')));
app.use('/auth', auth_routes_1["default"]);
app.use('/photo', photos_routes_1["default"]);
// run server
app.listen(process.env.PORT || 3000, function () {
    console.log('Server is running...');
});
//# sourceMappingURL=server.js.map