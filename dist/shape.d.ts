export declare class BaseShapeComponent {
    private shape;
    protected setShape(shape: any): void;
    animate(to: number, options?: any): void;
    setText(text: string): void;
    destroy(): void;
    value(): any;
    stop(): any;
    setProgress(progress: number): any;
}
