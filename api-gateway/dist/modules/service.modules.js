"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceModules = void 0;
const common_1 = require("@nestjs/common");
const member_module_1 = require("./Member/member.module");
const axios_1 = require("@nestjs/axios");
const book_module_1 = require("./Book/book.module");
const borrow_module_1 = require("./Borrow/borrow.module");
let ServiceModules = class ServiceModules {
};
exports.ServiceModules = ServiceModules;
exports.ServiceModules = ServiceModules = __decorate([
    (0, common_1.Module)({
        imports: [member_module_1.MemberModule, book_module_1.BookModule, borrow_module_1.BorrowModule, axios_1.HttpModule],
    })
], ServiceModules);
//# sourceMappingURL=service.modules.js.map