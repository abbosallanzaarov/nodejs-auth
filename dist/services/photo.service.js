"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prisma_1 = __importDefault(require("./prisma"));
function findAll() {
    return prisma_1["default"].photo.findMany();
}
function findByUserId(id) {
    return prisma_1["default"].photo.findMany({
        where: {
            userId: id
        }
    });
}
function create(photo) {
    return prisma_1["default"].photo.create({
        data: {
            url: photo.url,
            caption: photo.caption,
            userId: photo.userId
        }
    });
}
exports["default"] = {
    create: create,
    findAll: findAll,
    findByUserId: findByUserId
};
//# sourceMappingURL=photo.service.js.map