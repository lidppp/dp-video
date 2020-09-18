import { urlFormat1, optionsFormat, UrlListType } from "./baseType";
import Controller from "./creatController";
import Barrage, { BarrageBaseType } from "./barrage";
export default class Core {
    parentDom: HTMLElement;
    p_width: number;
    p_height: number;
    lp_player_box: HTMLElement;
    videoDom: HTMLVideoElement;
    video_width: number;
    video_height: number;
    centerCanvasDom: HTMLCanvasElement;
    centerCan: CanvasRenderingContext2D;
    drup_width: number;
    drup_height: number;
    drup_top: number;
    drup_left: number;
    finalCanvasDom: HTMLCanvasElement;
    finalCan: CanvasRenderingContext2D;
    controller: Controller;
    baseUrlList: UrlListType;
    selectUrlListIndex: number;
    maxListindex: number;
    baseOptions: optionsFormat;
    reqAFId: number;
    barrage: Barrage;
    currentTime: number;
    menu: HTMLElement;
    reversal: boolean;
    filterVal: {
        R: number;
        G: number;
        B: number;
        A: number;
    };
    constructor(parentNode: HTMLElement, urlList: UrlListType, options?: optionsFormat);
    joinHtml(): void;
    setChildDom(urlList: string): void;
    listenVideo(): void;
    videoBindEvent(): void;
    /**
     * 删除menu
     */
    delMenu(): void;
    /**
     * 计算绘图位置, 不计算会导致渲染出来的画面变形
     * @param flag 是否强制刷新
     * @param dispatch 是否触发事件
     */
    countWhereDrop(flag?: boolean, dispatch?: boolean): void;
    /**
     * 重新计算绘画位置并且重绘
     * @param flag 是否强制刷新
     * @param dispatch 是否触发事件
     */
    recalculateDrawingPosition(flag?: boolean, dispatch?: boolean): void;
    changeVideoSrc(): void;
    getUrl(item: urlFormat1): string;
    parentSizeChange(): CustomEvent;
    /**
     * 更新弹幕
     */
    setBarrageList(barrageList: Array<BarrageBaseType>): void;
    /**
     * 加入弹幕
     */
    joinBarrageList(barrageList: Array<BarrageBaseType> | BarrageBaseType): void;
    canvasFilter(arr: ImageData, filterVal: any): void;
    static extend(name: string | number, fn: Function): boolean;
}
//# sourceMappingURL=index.d.ts.map