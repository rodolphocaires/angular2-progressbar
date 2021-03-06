import { ElementRef } from '@angular/core';
import { BaseShapeComponent } from './shape';
import { ShapeOptions } from './progressbar';
export declare class LineProgressComponent extends BaseShapeComponent {
    private elementRef;
    options: ShapeOptions;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
}
