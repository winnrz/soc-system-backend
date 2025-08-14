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
exports.FormsController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const guards_1 = require("../auth/guards");
const decorators_1 = require("../auth/decorators");
const forms_service_1 = require("./forms.service");
let FormsController = class FormsController {
    formsService;
    constructor(formsService) {
        this.formsService = formsService;
    }
    async createForm(body, user) {
        const form = await this.formsService.createForm(body, user);
        return { data: form, message: 'Form created successfully' };
    }
};
exports.FormsController = FormsController;
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard),
    (0, common_1.HttpCode)(201),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FormDto, Object]),
    __metadata("design:returntype", Promise)
], FormsController.prototype, "createForm", null);
exports.FormsController = FormsController = __decorate([
    (0, common_1.Controller)('forms'),
    __metadata("design:paramtypes", [forms_service_1.FormsService])
], FormsController);
//# sourceMappingURL=forms.controller.js.map