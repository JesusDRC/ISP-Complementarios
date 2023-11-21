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
exports.Repostaje = void 0;
const typeorm_1 = require("typeorm");
let Repostaje = class Repostaje {
};
exports.Repostaje = Repostaje;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Repostaje.prototype, "REPOSTAJE_ID", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    __metadata("design:type", Number)
], Repostaje.prototype, "REPOSTAJE_KMAC", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Repostaje.prototype, "REPOSTAJE_COMENTARIO", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, type: 'boolean' }),
    __metadata("design:type", Boolean)
], Repostaje.prototype, "ESTADO", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'text' }),
    __metadata("design:type", String)
], Repostaje.prototype, "UNIDADES_PLACA", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0, type: 'int' }),
    __metadata("design:type", Number)
], Repostaje.prototype, "RUTAS_ID", void 0);
exports.Repostaje = Repostaje = __decorate([
    (0, typeorm_1.Entity)('repostaje')
], Repostaje);
//# sourceMappingURL=repostaje.entity.js.map