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
exports.FieldConfig = exports.FormType = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const index_1 = require("./index");
var FormType;
(function (FormType) {
    FormType["RADIO"] = "radio";
    FormType["TEXTAREA"] = "textarea";
    FormType["INPUT"] = "input";
    FormType["TEXT"] = "text";
    FormType["DATE"] = "date";
})(FormType || (exports.FormType = FormType = {}));
class FieldConfig {
    type;
    name;
    label;
    required;
    placeholder;
    rows;
    options;
    showOtherText;
    otherTextLabel;
}
exports.FieldConfig = FieldConfig;
__decorate([
    (0, class_validator_1.IsEnum)(FormType),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FieldConfig.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FieldConfig.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FieldConfig.prototype, "label", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FieldConfig.prototype, "required", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FieldConfig.prototype, "placeholder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], FieldConfig.prototype, "rows", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => index_1.OptionsDto),
    __metadata("design:type", Array)
], FieldConfig.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], FieldConfig.prototype, "showOtherText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FieldConfig.prototype, "otherTextLabel", void 0);
//# sourceMappingURL=field-config.dto.js.map