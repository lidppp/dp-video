export declare function whatUrlType(obj: any): number;
export declare function getStyle(element: any, style: any): any;
export declare function styleList(dom: HTMLElement, styleList: object): void;
export declare function classNameList(dom: HTMLElement, className: Array<string>): void;
export declare function bindMethods(dom: HTMLElement, methods: object): void;
interface DomList {
    tag: string;
    innerText?: string;
    className?: Array<string>;
    style?: object;
    children?: Array<DomList>;
    methods?: object;
}
export declare function render(domList: DomList, parentDom?: HTMLElement | null): HTMLElement;
export declare function formatTime(time: number): string;
export {};
//# sourceMappingURL=utils.d.ts.map