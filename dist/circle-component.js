"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ProgressBar = require('progressbar.js');
var core_1 = require("@angular/core");
var shape_1 = require("./shape");
var CircleProgressComponent = (function (_super) {
    __extends(CircleProgressComponent, _super);
    function CircleProgressComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    CircleProgressComponent.prototype.ngOnInit = function () {
        _super.prototype.setShape.call(this, new ProgressBar.Circle(this.elementRef.nativeElement, this.options));
        _super.prototype.animate.call(this, 0.0);
    };
    return CircleProgressComponent;
}(shape_1.BaseShapeComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CircleProgressComponent.prototype, "options", void 0);
CircleProgressComponent = __decorate([
    core_1.Component({
        selector: 'ks-circle-progress',
        template: "\n    <ng-content></ng-content>\n"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CircleProgressComponent);
exports.CircleProgressComponent = CircleProgressComponent;
//# sourceMappingURL=circle-component.js.map