"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var line_component_1 = require("./line-component");
var semi_circle_component_1 = require("./semi-circle-component");
var circle_component_1 = require("./circle-component");
var ProgressBarModule = (function () {
    function ProgressBarModule() {
    }
    return ProgressBarModule;
}());
ProgressBarModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [line_component_1.LineProgressComponent, semi_circle_component_1.SemiCircleProgressComponent, circle_component_1.CircleProgressComponent],
        exports: [line_component_1.LineProgressComponent, semi_circle_component_1.SemiCircleProgressComponent, circle_component_1.CircleProgressComponent]
    })
], ProgressBarModule);
exports.ProgressBarModule = ProgressBarModule;
//# sourceMappingURL=progressbar.module.js.map