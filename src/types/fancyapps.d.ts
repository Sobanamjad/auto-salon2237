declare module '@fancyapps/ui' {
  export class Fancybox {
    static bind(selector: string, options?: Record<string, unknown>): void;
    static destroy(): void;
    static close(all?: boolean): void;
    static getInstance(): Fancybox | null;
  }
}
