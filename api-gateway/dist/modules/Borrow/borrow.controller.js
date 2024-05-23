"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowController = void 0;
const common_1 = require("@nestjs/common");
const borrow_dto_1 = require("../../dto/borrow.dto");
const borrow_service_1 = require("./borrow.service");
let BorrowController = class BorrowController {
    constructor(borrowService) {
        this.borrowService = borrowService;
    }
    async create(dto) {
        try {
            return await this.borrowService.create(dto);
        }
        catch (error) {
            throw error;
        }
    }
    async returnBook(dto) {
        try {
            return await this.borrowService.returnBook(dto);
        }
        catch (error) {
            throw error;
        }
    }
    async check(dto) {
        try {
            return await this.borrowService.check(dto);
        }
        catch (error) {
            throw error;
        }
    }
    async penaltyRevivedCheck(dto) {
        try {
            return await this.borrowService.penaltyRevivedCheck(dto);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.BorrowController = BorrowController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrow_dto_1.BorrowDto]),
    __metadata("design:returntype", Promise)
], BorrowController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('returnBook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrow_dto_1.BorrowDto]),
    __metadata("design:returntype", Promise)
], BorrowController.prototype, "returnBook", null);
__decorate([
    (0, common_1.Post)('check7Days'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrow_dto_1.BorrowDto]),
    __metadata("design:returntype", Promise)
], BorrowController.prototype, "check", null);
__decorate([
    (0, common_1.Post)('check3Days'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [borrow_dto_1.BorrowDto]),
    __metadata("design:returntype", Promise)
], BorrowController.prototype, "penaltyRevivedCheck", null);
exports.BorrowController = BorrowController = __decorate([
    (0, common_1.Controller)('borrow'),
    __metadata("design:paramtypes", [borrow_service_1.BorrowService])
], BorrowController);
//# sourceMappingURL=borrow.controller.js.map