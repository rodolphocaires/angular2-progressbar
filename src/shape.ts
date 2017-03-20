
export class BaseShapeComponent {
  private shape: any;

  protected setShape(shape: any) {
    this.shape = shape;
  }

  animate(to: number, options?: any) {
    this.shape.animate(to, ...options);
  }

  setText(text: string) {
    this.shape.setText(text);
  }

  destroy() {
    this.shape.destroy();
  }

  value() {
    return this.shape.value();
  }

  stop() {
    return this.shape.stop();
  }

  setProgress(progress: number) {
    return this.shape.set(progress);
  }
}
