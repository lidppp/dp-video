import {optionsFormat} from "./baseType";
import {styleList} from "./utils"

/**
 * 弹幕基本数据格式
 */
export interface BarrageBaseType {
    msg:string,
    timePoint:number,
    color?:string,
    position: "top" | "bottom" | "move"
}

/**
 * 弹幕解析数据格式
 */
export interface BarrageType extends BarrageBaseType{
    textWidth:number,
    renderPositionIndex:number
}


/**
 * 渲染位置数组
 */
interface RenderPositionItem{
    top:number,
    lastBarrage?:object,
    canMoveJoin:boolean,
    canTopJoin:boolean,
    canBottomJoin:boolean,
}


export default class Barrage {
    // 创建canvas元素
    barrage:HTMLCanvasElement = document.createElement("canvas");
    barrageCtx: CanvasRenderingContext2D = this.barrage.getContext("2d");

    // 父元素
    parent:HTMLElement = undefined;
    // 弹幕列表
    barrageBaseList:Array<BarrageBaseType> = undefined; // 引用对象 修改会导致原对象发生改变
    deepBarrageBaseList:Array<BarrageType> =undefined; // 深拷贝对象
    // 配置项
    options:optionsFormat = undefined;
    // 弹幕行高
    barrageLineHeight:number = 28;
    // 渲染位置数组
    renderPosition:Array<RenderPositionItem> = [];
    // 渲染弹幕数组
    renderBarrageArray:Array<BarrageType> = [];
    // 弹幕持续时间
    barrageDuration:number = 8; // 单位:秒


    constructor(parentElement:HTMLElement,barrageList:Array<BarrageBaseType>,options:optionsFormat) {
        this.parent = parentElement;
        this.barrageBaseList = barrageList;
        this.options = options;
        this.deepCopy();
        styleList(this.barrage,{
            position: 'absolute',
            top:0,
            left:0,
            pointerEvents: "none",
            zIndex:2
        });

        this.bindEventListener();

    }

    /**
     * 绑定监听事件
     */
    bindEventListener(){
        this.parent.addEventListener("parentSizeChange",(e:CustomEvent)=>{
            // 设置弹幕容器大小
             this.setBarrage(e.detail);
            // 重新计算弹道位置
            this.countRenderPosition();
        })
        this.options._parentSelf.videoDom.addEventListener("progressBarChange",(e:CustomEvent)=>{
            if(e.detail.timeJump){
                this.resetRenderAndPosition();
            }
            this.upDateRenderBarrageArray();
            this.joinInCanvas();
        })
    }

    /**
     * 深拷贝对象
     * @param barrageBaseList 原对象
     * @param copyOptions 深拷贝赋值对象
     */
    deepCopy(){
        this.deepBarrageBaseList = JSON.parse(JSON.stringify(this.barrageBaseList));
        for(let i = 0; i < this.deepBarrageBaseList.length; i++){
            this.deepBarrageBaseList[i].textWidth=undefined;
        }
    }

    /**
     * 设置canvas属性
     */
    setBarrage(e):void{
        this.barrage.width = e.width;
        this.barrage.height = e.height;
    }


    /**
     * 返回canvas元素
     */
    getElement():HTMLCanvasElement{
        return this.barrage
    }

    /**
     * 计算轨道位置
     */
    countRenderPosition():void{
        this.renderPosition.length = 0
        let height = this.options._parentSelf.p_height;
        for(let i = 1,len = height/this.barrageLineHeight; i < len ; i++){
            let item:RenderPositionItem = {
                top:i*this.barrageLineHeight,
                lastBarrage:undefined,
                canMoveJoin:true,
                canTopJoin:true,
                canBottomJoin:true
            }
            this.renderPosition.push(item);
        }
    }

    /**
     * 绘制到canvas中
     */
    joinInCanvas(){
        let renderBarrageArray = this.renderBarrageArray;
        let {videoDom,p_width,p_height} = this.options._parentSelf;
        this.barrageCtx.clearRect(0,0,p_width,p_height)
        for(let i = 0,len = renderBarrageArray.length;i<len;i++){
            /*
            当前位置计算公式:
            (出现时间+持续时间-当前时间) * ((文字宽度+dom宽度)/持续时间)
            * */
            // 当前运行时间
            let runTime = renderBarrageArray[i].timePoint+this.barrageDuration-videoDom.currentTime;
            // 当前速度
            let speed = (renderBarrageArray[i].textWidth +p_width)/this.barrageDuration;
            let x:number = null;
            let textAlign:"left"|"center" = "left";
            switch (renderBarrageArray[i].position) {
                case "bottom":
                case "top":
                    textAlign = "center";
                    x = p_width / 2;
                    break;
                case "move":
                default:
                    // 距离右侧的距离
                    x = runTime * speed - renderBarrageArray[i].textWidth;
                    break
            }
            if(renderBarrageArray[i].position === "move" && x <= p_width){
                this.renderPosition[renderBarrageArray[i].renderPositionIndex].canMoveJoin = true
            }
            this.setFontStyle(renderBarrageArray[i].color,textAlign)
            this.barrageCtx.strokeText(renderBarrageArray[i].msg,x,this.renderPosition[renderBarrageArray[i].renderPositionIndex].top)
            //fillText("要添加的文字",x0坐标，y0坐标)
            this.barrageCtx.fillText(renderBarrageArray[i].msg,x,this.renderPosition[renderBarrageArray[i].renderPositionIndex].top);


        }
    }

    /**
     * 设置fontStyle
     * @param color 文字颜色
     * @param textAlign 文字对齐方式
     * @param font 文字字体,文字大小等
     */

    setFontStyle(color?:string,textAlign?:"left"|"right"|"center"|"start"|"end",font?:string){
        this.barrageCtx.fillStyle = color ?? "#FFF";
        this.barrageCtx["font"] = font ?? "25px bold SimHei, \"Microsoft JhengHei\", Arial, Helvetica, sans-serif";
        this.barrageCtx.textAlign = textAlign ?? "left";
    }

    /**
     * upDateRenderBarrageArray
     * 更新弹幕渲染数组
     */
    upDateRenderBarrageArray(){
        let {deepBarrageBaseList,options,renderPosition } = this;
        let {videoDom} = options._parentSelf;
        // 删除数据
        let len = this.renderBarrageArray.length
        while (len--){
            if(this.renderBarrageArray[len].timePoint+this.barrageDuration < videoDom.currentTime){
                if(this.renderBarrageArray[len].position === "top"){
                    renderPosition[this.renderBarrageArray[len].renderPositionIndex].canTopJoin = true
                }else if(this.renderBarrageArray[len].position === "bottom"){
                    renderPosition[this.renderBarrageArray[len].renderPositionIndex].canBottomJoin = true
                }

                this.renderBarrageArray.splice(len ,1);
            }
        }

        // 插入数据
        for(let i = 0; i < deepBarrageBaseList.length;i++){
            if(!deepBarrageBaseList[i].textWidth){
                this.setFontStyle()
                deepBarrageBaseList[i].textWidth = this.barrageCtx.measureText(deepBarrageBaseList[i].msg).width
            }

            if(Math.floor(videoDom.currentTime) === Math.floor(deepBarrageBaseList[i].timePoint) && this.renderBarrageArray.indexOf(deepBarrageBaseList[i]) == -1){
                let flag = true;
                let canPush = true;
                for(let j = 0, len = renderPosition.length;j<len;j++){
                    // 判断top的情况
                    if(renderPosition[j].canTopJoin && deepBarrageBaseList[i].position === "top"){
                        deepBarrageBaseList[i].renderPositionIndex = j;
                        renderPosition[j].canTopJoin = false;
                        flag = false;
                        break;
                    }else if (renderPosition[renderPosition.length - j - 1].canBottomJoin && deepBarrageBaseList[i].position === "bottom"){
                        // 判断bottom的情况
                        deepBarrageBaseList[i].renderPositionIndex = renderPosition.length -1 - j ;
                        renderPosition[j].canBottomJoin = false;
                        flag = false;
                        break;
                    } else if( renderPosition[j].canMoveJoin && deepBarrageBaseList[i].position === "move"){
                        // 判断move的情况
                        deepBarrageBaseList[i].renderPositionIndex = j;
                        renderPosition[j].lastBarrage = deepBarrageBaseList[i];
                        renderPosition[j].canMoveJoin = false;
                        flag = false;
                        break;
                    }

                }
                if(flag){
                    canPush = false
                }
                canPush && this.renderBarrageArray.push(deepBarrageBaseList[i]);
            }
        }
    }
    resetRenderAndPosition(){
        this.renderBarrageArray.length=0;
        for ( let i = 0; i < this.renderPosition.length ; i++){
            this.renderPosition[i].canMoveJoin = true;
            this.renderPosition[i].canBottomJoin = true;
            this.renderPosition[i].canTopJoin = true;
        }
    }

    /**
     * 更新弹幕, 为了切换视频的时候更新弹幕
     */

    setRenderBarrageArray(barrageList:Array<BarrageBaseType>){
        this.resetRenderAndPosition();
        this.barrageBaseList = barrageList;
        this.deepCopy();
    }

}
