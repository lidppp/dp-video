import { optionsFormat } from "./baseType";
/**
 * 弹幕基本数据格式
 */
export interface BarrageBaseType {
    msg: string;
    timePoint: number;
    color?: string;
    position: "top" | "bottom" | "move";
}
/**
 * 弹幕解析数据格式
 */
export interface BarrageType extends BarrageBaseType {
    textWidth?: number;
    renderPositionIndex?: number;
}
/**
 * 渲染位置数组
 */
interface RenderPositionItem {
    top: number;
    lastBarrage?: object;
    canMoveJoin: boolean;
    canTopJoin: boolean;
    canBottomJoin: boolean;
}
export default class Barrage {
    barrage: HTMLCanvasElement;
    barrageCtx: CanvasRenderingContext2D;
    parent: HTMLElement;
    barrageBaseList: Array<BarrageBaseType>;
    deepBarrageBaseList: Array<BarrageType>;
    options: optionsFormat;
    barrageLineHeight: number;
    renderPosition: Array<RenderPositionItem>;
    renderBarrageArray: Array<BarrageType>;
    barrageDuration: number;
    constructor(parentElement: HTMLElement, barrageList: Array<BarrageBaseType>, options: optionsFormat);
    /**
     * 绑定监听事件
     */
    bindEventListener(): void;
    /**
     * 深拷贝对象
     * @param barrageBaseList 原对象
     * @param copyOptions 深拷贝赋值对象
     */
    deepCopy(): void;
    /**
     * 设置canvas属性
     */
    setBarrage(e: any): void;
    /**
     * 返回canvas元素
     */
    getElement(): HTMLCanvasElement;
    /**
     * 计算轨道位置
     */
    countRenderPosition(): void;
    /**
     * 绘制到canvas中
     */
    joinInCanvas(): void;
    /**
     * 设置fontStyle
     * @param color 文字颜色
     * @param textAlign 文字对齐方式
     * @param font 文字字体,文字大小等
     */
    setFontStyle(color?: string, textAlign?: "left" | "right" | "center" | "start" | "end", font?: string): void;
    /**
     * upDateRenderBarrageArray
     * 更新弹幕渲染数组
     */
    upDateRenderBarrageArray(): void;
    /**
     * 重置渲染弹幕数组和轨道数组
     */
    resetRenderAndPosition(): void;
    /**
     * 更新弹幕, 为了切换视频的时候更新弹幕
     */
    setRenderBarrageArray(barrageList: Array<BarrageBaseType>): void;
    /**
     * 添加弹幕
     */
    joinRenderBarrageArray(barrageList: Array<BarrageBaseType> | BarrageBaseType): void;
    /**
     * 弹幕显示
     */
    show(): void;
    /**
     * 弹幕隐藏
     */
    hide(): void;
}
export {};
//# sourceMappingURL=barrage.d.ts.map