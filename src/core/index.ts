import {
    urlFormat1, urlFormat2 ,
    optionsFormat, UrlListType
} from "./baseType"
import Controller from "./creatController";
import { whatUrlType,styleList} from "./utils"

export default class Core {
    // 传入的父级dom节点
    parentDom: HTMLElement = null;
    p_width: number = null;
    p_height: number = null;

    lp_player_box:HTMLElement = document.createElement("div");
    // 生成子级dom
    // video Dom节点
    videoDom: HTMLVideoElement = document.createElement('video');
    video_width: number = 0;
    video_height: number = 0;

    // 中转canvas节点
    centerCanvasDom: HTMLCanvasElement = document.createElement("canvas");
    centerCan = this.centerCanvasDom.getContext("2d");
    centerCanvasFrame: number = null;
    drup_width: number = null
    drup_height: number = null
    drup_top: number = null
    drup_left: number = null
    // 最后输出的canvas节点
    finalCanvasDom: HTMLCanvasElement = document.createElement("canvas");
    finalCan = this.finalCanvasDom.getContext("2d");
    finalCanvasFrame: number = null;

    // 控制条dom
    controller: Controller = undefined;
    // baseUrlList
    baseUrlList: UrlListType = undefined;
    selectUrlListIndex: number = null;
    maxListindex:number = null

    // 基本设置
    baseOptions: optionsFormat = {
        barrageShow: true, // 是否开启弹幕功能, 默认为true
        barrageList: [], // 弹幕数组默认为空
        barrageScope: 1500, // 默认为1500毫秒, 在可视区域停留时间
        title: {// 标题
            show: true, // 标题是否显示
            label: 'Title' // 标题显示内容
        },
        // 控制条显示
        controller: true, // 默认显示
        // 控制条配置项, 如果用户手动指定则按照用户手动指定的解析
        controllerOption: {
            play: true, // 播放按钮, 默认为true
            next: false, // 下一个按钮, 默认为false, 如果传入的videoUrl的格式为2或者4的话则默认为true
            clarity: false, //选择清晰度, 默认为false, 如果传入的videoUrl格式为3,4为true
            volume: true, // 音量默认为true
            playbackRate: true, // 播放速度默认为true
            playbackRateList: [
                {speed: 0.5, label: "0.5x"},
                {speed: 0.75, label: "0.75x"},
                {speed: 1.0, label: "1.0x",default:true},
                {speed: 1.25, label: "1.25x"},
                {speed: 1.5, label: "1.5x"},
                {speed: 2.0, label: "2.0x"},
            ], // 播放速度数组默认值
            togglePip: true, // 画中画 默认true
            documentFull: true, // 网页全屏 默认true
            windowFull: true, // 全屏 默认true
            Mirror: false // 镜像 默认false
        },
        _parentSelf:this
    };

    //渲染canvas的 requestAnimationFrameID
    reqAFId:number = null;


    constructor(parentNode: HTMLElement, urlList: UrlListType, options?: optionsFormat) {
        this.parentDom = parentNode;
        this.p_width = this.parentDom.offsetWidth;
        this.p_height = this.parentDom.offsetHeight;
        this.baseUrlList = urlList;

        Object.assign(this.baseOptions, options)
        if(whatUrlType(urlList) === 2){
            this.selectUrlListIndex = 0;
            this.maxListindex = urlList.length-1
            this.setChildDom(
                typeof this.baseUrlList[this.selectUrlListIndex]=="string" ?
                (this.baseUrlList as Array<string>)[this.selectUrlListIndex] : this.getUrl(<urlFormat1>this.baseUrlList[this.selectUrlListIndex])
            );
        }else{
            this.setChildDom(urlList);
        }
        this.controller = new Controller(this.videoDom, this.lp_player_box , this.baseOptions);

        this.joinHtml();
        this.videoAddCanplay();

        // if(typeof urlList == "object" && urlList.length > 0){
        //     if((options.controllerOption && options.controllerOption.next === undefined) || !options.controllerOption){
        //         this.baseOptions.controllerOption.next = true;
        //     }
        // }
        // let parent_width:number = this.parentDom.
    }

    // 元素插入html中
    joinHtml(): void {
        this.videoDom = this.lp_player_box.appendChild(this.videoDom);
        this.centerCanvasDom = this.lp_player_box.appendChild(this.centerCanvasDom);
        this.finalCanvasDom = this.lp_player_box.appendChild(this.finalCanvasDom);
        this.lp_player_box.appendChild(this.controller.getElement());
        this.parentDom.appendChild( this.lp_player_box)
    }

    // 设置创建出来的元素的数据
    setChildDom(urlList: UrlListType): void {
        this.lp_player_box.classList.add("dp-video-player")
        styleList(this.lp_player_box,{
            width: this.p_width + "px",
            height: this.p_height + "px",
            background:'#000',
            position:"relative",
            overflowL:"hidden"
        })

        styleList(this.videoDom, {width: this.p_width + "px", height: this.p_height + "px", display: 'none'})
        this.videoDom.src = urlList as string; // 使用断言取消报错
        this.videoDom.autoplay = true;
        this.videoDom.controls = true;
        this.videoDom.muted = true;


        this.centerCanvasDom.width = this.p_width;
        this.centerCanvasDom.height = this.p_height;
        styleList(this.centerCanvasDom, {display: 'none'})

        this.finalCanvasDom.width = this.p_width;
        this.finalCanvasDom.height = this.p_height;
    }

    // 开始监听video
    listenVideo(): void {
        if (!this.video_width && !this.video_height) {
            this.reqAFId = requestAnimationFrame(this.listenVideo.bind(this));
            return;
        }
        this.countWhereDrop()
        this.centerCan.clearRect(this.drup_left, this.drup_top, this.drup_width, this.drup_height)
        this.centerCan.drawImage(this.videoDom, this.drup_left, this.drup_top, this.drup_width, this.drup_height);
        let imageData: ImageData = this.centerCan.getImageData(0, 0, this.p_width, this.p_height);
        this.finalCan.putImageData(imageData, 0, 0)
        this.reqAFId = requestAnimationFrame(this.listenVideo.bind(this));
    }

    // 给video添加canplay函数
    videoAddCanplay() {
        this.videoDom.addEventListener('canplay',() => {
            this.video_width = this.videoDom.videoWidth;
            this.video_height = this.videoDom.videoHeight;
            this.recalculateDrawingPosition(false)

        })
        this.videoDom.addEventListener("play",() => {
            this.listenVideo()
        })
        this.videoDom.addEventListener("pause",() => {
            cancelAnimationFrame(this.reqAFId);
        })

        window.addEventListener("resize", ()=>{
            this.recalculateDrawingPosition(false)
        })
    }

    // 计算绘图位置, 不计算会导致渲染出来的画面变形
    countWhereDrop(flag:boolean = true): void {
        if((flag && this.p_width == this.lp_player_box.offsetWidth && this.p_width != null) || (flag && this.p_height == this.lp_player_box.offsetHeight && this.p_height != null)){
           return
        }

        this.p_width = this.lp_player_box.offsetWidth;
        this.p_height = this.lp_player_box.offsetHeight;
        this.centerCanvasDom.width = this.p_width;
        this.centerCanvasDom.height = this.p_height;
        this.finalCanvasDom.width = this.p_width;
        this.finalCanvasDom.height = this.p_height;

        // 竖屏
        if (this.video_height > this.video_width) {
            this.drup_top = 0
            this.drup_height = this.p_height;
            this.drup_width = this.video_width * (this.p_height / this.video_height);
            this.drup_left = Math.abs((this.p_width - this.drup_width)) / 2;
        } else {
            // 横屏
            this.drup_left = 0;
            this.drup_width = this.p_width;
            this.drup_height = this.video_height * (this.p_width / this.video_width);
            this.drup_top = Math.abs((this.p_height - this.drup_height)) / 2
        }

        // 如果横屏的放到画面上的高度比p_height大的话以竖屏处理
        if(this.drup_height > this.p_height){
            this.drup_top = 0
            this.drup_height = this.p_height;
            this.drup_width = this.video_width * (this.p_height / this.video_height);
            this.drup_left = Math.abs((this.p_width - this.drup_width)) / 2;
        }
    }

    // 重新计算绘画位置并且重绘
    recalculateDrawingPosition(flag:boolean=true){
        this.countWhereDrop(flag);
        this.listenVideo()
        setTimeout(()=>{
            cancelAnimationFrame(this.reqAFId);
        })
    }

    // 修改video src
    changeVideoSrc(){
        let src = typeof this.baseUrlList[this.selectUrlListIndex]=="string" ? (this.baseUrlList as Array<string>)[this.selectUrlListIndex] : this.getUrl(<urlFormat1>this.baseUrlList[this.selectUrlListIndex])
        this.videoDom.src = src;
        this.controller.unload();
        this.lp_player_box.appendChild(this.controller.getElement());
    }
    // 获取url
    getUrl(item:urlFormat1):string{
        let id = item.defaultId;
        let selectList:Array<urlFormat2> = item.urlList.filter((obj:urlFormat2) => {
            return obj.id === id;
        })
        return selectList[0].url
    }

    // 创建拓展接口, 后续可能会用到 先写上
    /*
    import VideoL from "./core/index"
    VideoL.extend("add",function(num1,num2){
        return num1+num2
    })
    * */
    static extend(name: string | number, fn: Function) {
        Core.prototype[name] = fn
        if (this.prototype[name]) {
            return !!1;
        } else {
            return false;
        }
    }
}
