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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let BookService = class BookService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createBook(dto) {
        try {
            const data = this.httpService
                .post(`${process.env.BACKENDPORT}/api/v1/book`, dto)
                .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((e) => {
                throw new common_1.HttpException(`${e.response.statusText} : ${e.response.data?.errorMessage}`, e.response.status);
            }))
                .toPromise();
            return data;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.response.statusText} : ${error.response.data?.errorMessage}`, error.response.status);
        }
    }
    async getBooks() {
        try {
            const data = this.httpService
                .get(`${process.env.BACKENDPORT}/api/v1/book`)
                .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((e) => {
                throw new common_1.HttpException(`${e.response.statusText} : ${e.response.data?.errorMessage}`, e.response.status);
            }))
                .toPromise();
            return data;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.response.statusText} : ${error.response.data?.errorMessage}`, error.response.status);
        }
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], BookService);
//# sourceMappingURL=book.service.js.map