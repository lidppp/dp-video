import {optionsFormat} from "./baseType";
import {render, formatTime} from "./utils"

// 创建控制条
export default class Controller {
    contrllerDom: HTMLElement = undefined; // 控制条最外层dom
    video: HTMLVideoElement = undefined; // video元素
    leftBox_play: HTMLElement = undefined; // 开始按钮
    leftBox_pause: HTMLElement = undefined; // 暂停按钮
    parentDom: HTMLElement = undefined; // 最外层盒子
    actionTime: HTMLElement = undefined; // 开始时间
    endTime: HTMLElement = undefined; // 结束时间
    speadSelect: HTMLElement = undefined; // 选择播放速度
    changeVolume: HTMLElement = undefined; // 音量
    popWindowPlayer: HTMLElement = undefined; // 画中画按钮
    documentFullScreen: HTMLElement = undefined; // 网页全屏
    windowFullScreen: HTMLElement = undefined; // 全屏
    progressBar: HTMLElement = undefined; // 进度条
    timePoint: HTMLElement = undefined; // 进度条点
    timePointbg: HTMLElement = undefined; // 进度条点背景
    nextBtn: HTMLElement = undefined; // 下一P
    selectSrc: HTMLElement = undefined; // 选集
    selectDefinition:HTMLElement = undefined; //选择清晰度
    progressBarChange:CustomEvent = new CustomEvent("progressBarChange",{detail:{timeJump:false}}) // 创建进度条改变事件
    progressBarJumpChange:CustomEvent = new CustomEvent("progressBarChange",{detail:{timeJump:true}}) // 创建进度条改变事件
    options: optionsFormat = undefined; // 外层传入配置
    reqAFId: number = null; // 渲染id  优化用

    constructor(videoDom: HTMLVideoElement, parentDom: HTMLElement, options: optionsFormat) {
        this.video = videoDom;
        this.parentDom = parentDom;
        this.options = options;
        this.creatContrller();
        this.bindEventListener();
    }


    // 创建contrller Dom元素
    creatContrller(): void {

        // 外层div
        this.contrllerDom = render({
            tag: "div",
            className: ["dp-contrller"]
        });
        // 内部左侧div
        let leftBox = render({
            tag: "div",
            className: ["dp-flexbox"]
        });
        let rightBox = render({
            tag: "div",
            className: ["dp-flexbox"],
            style:{
                maxWidth: "66%",
            }
        });

        // -------------------左侧div内部button
        // 播放暂停按钮
        this.leftBox_play = render({
            tag: "div",
            className: ["iconfont", "icon-bofangqi-bofang", "dp-play-btn", "active"],
            methods: {
                click: () => {
                    this.play();
                }
            }
        });
        this.leftBox_pause = render({
            tag: "div",
            className: ["iconfont", "icon-bofangqi-zanting", "dp-pause-btn"],
            methods: {
                click: () => {
                    this.pause();
                }
            }
        });

        // 时间组件
        this.actionTime = render({
            tag: "span",
            className: ["dp-action-time", "dp-time"],
            innerText: "00:00"
        })
        this.endTime = render({
            tag: "span",
            className: ["dp-end-time", "dp-time"],
            innerText: "00:00"
        })
        // 插入暂停和播放按钮
        leftBox.appendChild(this.leftBox_play);
        leftBox.appendChild(this.leftBox_pause);
        // 下一P
        if (this.options._parentSelf.selectUrlListIndex !== null && this.options._parentSelf.selectUrlListIndex < this.options._parentSelf.maxListindex) {
            this.nextBtn = render({
                tag: "div",
                className: ["iconfont", "icon-bofangqi-xiayiji", "dp-next-btn", 'active'],
                style: {
                    fontSize: "24px"
                },
                methods: {
                    click: () => {
                        this.options._parentSelf.selectUrlListIndex += 1;
                        this.options._parentSelf.changeVideoSrc();
                    }
                }
            })

            leftBox.appendChild(this.nextBtn);
        }

        // ----------------左侧div内部button结束


        // 插入时间
        leftBox.appendChild(this.actionTime);
        leftBox.appendChild(this.endTime);


        /*
        * 右侧盒子
        * 从左到右:
        *   倍速 √
        *   清晰度
        *   声音 √
        *   画中画 √
        *   网页全屏 √
        *   全屏 √
        * */
        // 倍速
        let speedList = {
            tag: "div",
            className: ["dp-playback-rate-base"],
            children: [
                {
                    tag: 'span',
                    className: ["dp-playback-rate-msg"],
                    innerText: this.options.controllerOption.playbackRateList.filter((item) => {
                        return item.default
                    })[0].label,
                },
                {
                    tag: "div",
                    className: ["dp-playback-rate-box"],
                    children: this.options.controllerOption.playbackRateList.map((item, index) => {
                        return {
                            tag: "div",
                            innerText: item.label,
                            className: ["dp-playback-rate-list", "dp-playback-rate-list-num" + index, (item.default ? "active" : '')],
                            methods: {
                                click: () => {
                                    this.changePlaybackRate("dp-playback-rate-list-num" + index, item.speed, item.label)
                                }
                            }
                        }
                    })
                }
            ]
        }
        this.speadSelect = render(speedList);


        // 音量
        let volumeList = {
            tag: "div",
            className: ["dp-volume-box"],
            children: [
                {
                    tag: "div",
                    className: ["iconfont", "icon-jingyin", "dp-volume", this.video.muted || this.video.volume == 0 ? "active" : ""],
                    methods: {
                        click: () => {
                            this.changeVolumeFn(0.5);
                        }
                    }
                },
                {
                    tag: "div",
                    className: ["iconfont", "icon-shengyin", "dp-volume", this.video.muted || this.video.volume == 0 ? "" : "active"],
                    methods: {
                        click: () => {
                            this.changeVolumeFn(0);
                        }
                    }
                }
            ]
        }
        this.changeVolume = render(volumeList)
        let volumeContrller = render({
            tag: "div",
            className: ["dp-volume-contrller"],
            children: [
                {tag: "span", className: ["dp-volume-msg"], innerText: this.video.volume * 100 + ""},
                {
                    tag: "div",
                    className: ["dp-volume-contrller-box"],
                    children: [
                        {
                            tag: "div",
                            className: ["dp-volume-contrller-point"],
                            style: {
                                bottom: 100 * this.video.volume + "px"
                            },
                            methods: {
                                mousedown: () => {
                                    let _that = this
                                    this.video.muted = false;

                                    function mouseMoveFn(e) {
                                        if (_that.video.volume + (e.movementY * -1) / 100 > 1 || _that.video.volume + (e.movementY * -1) / 100 < 0) {
                                            return;
                                        }
                                        _that.video.volume += (e.movementY * -1) / 100
                                        _that.changeVolumeDom();

                                    }

                                    function mouseUpFn() {
                                        window.removeEventListener("mousemove", mouseMoveFn)
                                        window.removeEventListener("mouseup", mouseUpFn)
                                    }

                                    window.addEventListener("mousemove", mouseMoveFn)
                                    window.addEventListener("mouseup", mouseUpFn)
                                }
                            }
                        },
                        {
                            tag: "div",
                            className: ["dp-volume-contrller-bg"],
                            style: {height: 100 * this.video.volume + "px"}
                        },
                    ]
                }
            ]

        })
        this.changeVolume.appendChild(volumeContrller)

        // 画中画
        this.popWindowPlayer = render({
            tag: "div",
            className: ["iconfont", "icon-shiyongxiaochuangbofang", "dp-popWindow-player", "active"],
            methods: {
                click: () => {
                    this.enterPictureInPicture()
                }
            }
        })

        // 网页全屏
        this.documentFullScreen = render({
            tag: "div",
            className: ["iconfont", "icon-quanping1", "dp-document-full-screen", "active"],
            methods: {
                click: () => {
                    this.documentFullScreenFn();
                }
            }
        })
        // 全屏
        this.windowFullScreen = render({
            tag: "div",
            className: ["iconfont", "icon-quanping", "dp-window-full-screen", "active"],
            methods: {
                click: () => {
                    this.changeWindowFullScreen();
                }
            }
        })
        rightBox.appendChild(this.speadSelect);
        // 选择清晰度
        if (this.options._parentSelf.selectUrlListIndex !== null && typeof this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex] == "object" && this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].urlList.length > 1) {
            this.selectDefinition = render({
                tag: "div",
                className: ["dp-playback-rate-base","dp-definition-base"],
                children: [
                    {
                        tag:"div",
                        className:['dp-definition-msg'],
                        innerText: this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].urlList.filter(item=>{
                            return this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].defaultId == item.id
                        })[0].label || "选择清晰度"
                    },
                    {
                        tag: "div",
                        className: ["dp-playback-rate-box"],
                        children: this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].urlList.map((item, index) => {
                            return {
                                tag: "div",
                                innerText: item.label ?? index + 1,
                                className: ["dp-playback-rate-list", "dp-playback-rate-list-num" + index, (item.id === this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].defaultId ? "active" : '')],
                                methods: {
                                    click: () => {
                                        if(this.selectDefinition.querySelector(".dp-playback-rate-list.active").classList.contains("dp-playback-rate-list-num" + index)){
                                            return
                                        }
                                        (<HTMLElement>this.selectDefinition.querySelector(".dp-definition-msg")).innerText = item.label;
                                        this.options._parentSelf.baseUrlList[this.options._parentSelf.selectUrlListIndex].defaultId = item.id;

                                        this.selectDefinition.querySelector(".dp-playback-rate-list.active").classList.remove("active");
                                        this.selectDefinition.querySelector(".dp-playback-rate-list-num" + index).classList.add("active");


                                        this.options._parentSelf.changeVideoSrc();
                                    }
                                }
                            }
                        })
                    }
                ]
            })
            rightBox.appendChild(this.selectDefinition);

        }
        // 选集
        if (this.options._parentSelf.selectUrlListIndex !== null && this.options._parentSelf.baseUrlList.length > 1) {
            this.selectSrc = render({
                tag: "div",
                className: ["dp-playback-rate-base"],
                innerText: "选集",
                children: [
                    {
                        tag: "div",
                        className: ["dp-playback-rate-box"],
                        children: this.options._parentSelf.baseUrlList.map((item, index) => {
                            return {
                                tag: "div",
                                innerText: item.label ?? index + 1,
                                className: ["dp-playback-rate-list", "dp-playback-rate-list-num" + index, (index === this.options._parentSelf.selectUrlListIndex ? "active" : '')],
                                methods: {
                                    click: () => {
                                        this.options._parentSelf.selectUrlListIndex = index;
                                        this.options._parentSelf.changeVideoSrc();
                                    }
                                }
                            }
                        })
                    }
                ]
            })
            rightBox.appendChild(this.selectSrc);

        }
        rightBox.appendChild(this.changeVolume);
        rightBox.appendChild(this.popWindowPlayer);
        rightBox.appendChild(this.documentFullScreen);
        rightBox.appendChild(this.windowFullScreen);


        // 进度条
        this.progressBar = render({
            tag: "div",
            className: ["dp-time-contrller"],
            children: [
                {
                    tag: "div",
                    className: ["dp-time-contrller-box"],
                    methods: {
                        click: (e) => {
                            // this.pause()
                            this.progressBarClick(e)
                            // setTimeout(()=>{
                            //     this.play()
                            // },30)
                        }
                    },
                    children: [
                        {
                            tag: "div",
                            className: ["dp-time-contrller-point"],
                            methods: {
                                mousedown: (e) => {
                                    e.stopPropagation();
                                    let _that = this
                                    // this.pause()

                                    function mouseMoveFn(e) {
                                        e.stopPropagation();
                                        _that.changeCurrentTime(e);
                                    }

                                    function mouseUpFn(e) {
                                        e.stopPropagation();
                                        // setTimeout(()=>{
                                        //     _that.play()
                                        // })
                                        window.removeEventListener("mousemove", mouseMoveFn)
                                        window.removeEventListener("mouseup", mouseUpFn)
                                    }

                                    window.addEventListener("mousemove", mouseMoveFn)
                                    window.addEventListener("mouseup", mouseUpFn)
                                }
                            }
                        },
                        {
                            tag: "div",
                            className: ["dp-time-contrller-bg"]
                        },
                    ]
                }
            ]
        })

        // 最外层两个盒子插入控制条中
        this.contrllerDom.appendChild(leftBox);
        this.contrllerDom.appendChild(rightBox);
        this.contrllerDom.appendChild(this.progressBar);

    }


    bindEventListener() {
        // 读取视频元数据
        this.video.addEventListener("loadedmetadata", () => {
            this.endTime.innerText = formatTime(this.video.duration)
        })
        // 视频播放触发
        this.video.addEventListener("play", () => {
            this.changeBtn(true);
            this.changeActionTime();
        })
        // 视频暂停触发
        this.video.addEventListener("pause", () => {
            this.changeBtn(false);
            cancelAnimationFrame(this.reqAFId);
        })
        // 音量改变触发
        this.video.addEventListener('volumechange', () => {
            if (this.video.muted) {
                this.changeVolume.querySelector(".icon-jingyin").classList.add("active");
                this.changeVolume.querySelector(".icon-shengyin").classList.remove("active");
            } else {
                if (this.video.volume <= 0) {
                    this.changeVolume.querySelector(".icon-jingyin").classList.add("active");
                    this.changeVolume.querySelector(".icon-shengyin").classList.remove("active");
                } else {
                    this.changeVolume.querySelector(".icon-jingyin").classList.remove("active");
                    this.changeVolume.querySelector(".icon-shengyin").classList.add("active");
                }
            }
        })

        // 父元素获取焦点时激活快捷键
        this.parentDom.addEventListener("focus", ()=>{
            window.addEventListener("keydown", windowKeyDown)
        })

        // 父元素失去焦点时移除快捷键
        this.parentDom.addEventListener("blur",()=>{
            window.removeEventListener("keydown", windowKeyDown)
        })
        // 快捷键处理事件
        const windowKeyDown = (e) => {
            // e.preventDefault();
            if (e.altKey && e.ctrlKey && e.key === "Enter") {
                // alt + ctrl + enter  全屏
                this.changeWindowFullScreen();
                return;
            } else if (e.altKey && e.key === "Enter") {
                // alt + enter  网页全屏
                this.documentFullScreenFn();
                return;

            } else if (e.ctrlKey && e.key === "Enter") {
                // ctrl + enter 画中画
                this.enterPictureInPicture();
                return;

            }

            // 空格控制播放暂停
            if (e.code === "Space") {
                if (this.video.paused) {
                    this.play();
                } else {
                    this.pause();
                }
                return;

            }

            // esc退出全屏和网页全屏
            if (e.code === "Escape") {
                e.preventDefault();
                let isFull = !!((document as any).webkitIsFullScreen || (document as any).mozFullScreen ||
                    (document as any).msFullscreenElement || document.fullscreenElement
                )
                if (isFull) {
                    this.exitFullscreen()
                }
                this.exitDocumentFullScreenFn();
                this.changeActionTime(false);
                return;

            }
            // 键盘 ↑ 控制音量增0.1
            if (e.code === "ArrowUp") {
                if (this.video.volume + 0.1 >= 1) {
                    this.changeVolumeFn(1);
                    return;
                }
                this.changeVolumeFn(this.video.volume += 0.1);
                return;
            }
            // 键盘 ↓ 控制音量减0.1
            if (e.code === "ArrowDown") {
                if (this.video.volume - 0.1 <= 0) {
                    this.changeVolumeFn(0);
                    return;
                }
                this.changeVolumeFn(this.video.volume -= 0.1);
                return;
            }
        }

        // 视口大小改变的时候
        window.addEventListener("resize",()=>{
            this.changeActionTime()
        })



        // 父元素鼠标移入移出事件
        let timeOutKey:number = undefined;
        const controllerShowFn = () => {
            window.clearTimeout(timeOutKey);
            this.show();
            timeOutKey = window.setTimeout(()=>{
                this.hide()
            },2000)
        }
        this.parentDom.addEventListener("mouseenter", controllerShowFn)
        // 父元素鼠标移动事件
        this.parentDom.addEventListener("mousemove",controllerShowFn)
        // 父元素鼠标移出事件
        this.parentDom.addEventListener("mouseleave", ()=>{
            window.clearTimeout(timeOutKey);
            this.hide()
        })
        // 鼠标移入控制条,保持控制条显示 已转入css控制
    }

    // 播放
    play() {
        this.video.play();
    }

    // 暂停
    pause() {
        this.video.pause();
    }

    // 修改音量图标
    changeVolumeIcon(isMuted: boolean) {
        let jingyin = this.parentDom.querySelector(".icon-jingyin");
        let shengyin = this.parentDom.querySelector(".icon-shengyin");
        // 静音
        if (isMuted) {
            jingyin.classList.add("active");
            shengyin.classList.remove("active");
        } else {
            shengyin.classList.add("active");
            jingyin.classList.remove("active");
        }
    }

    // 修改音量元素
    changeVolumeDom() {
        let point: HTMLElement = this.parentDom.querySelector(".dp-volume-contrller-point");
        let msg: HTMLElement = this.parentDom.querySelector(".dp-volume-msg");
        let pointBg: HTMLElement = this.parentDom.querySelector(".dp-volume-contrller-bg");
        if (this.video.volume >= 0.99) {
            this.video.volume = 1;
        }
        if (this.video.volume <= 0.01) {
            this.video.volume = 0;
        }
        if (this.video.volume === 0) {
            this.changeVolumeIcon(true);
        } else {
            this.changeVolumeIcon(false);
        }

        point.style.bottom = point.parentElement.offsetHeight * this.video.volume + "px";
        pointBg.style.height = point.parentElement.offsetHeight * this.video.volume + "px"
        msg.innerText = String(Math.floor(this.video.volume * 100));
    }

    // 修改音量
    changeVolumeFn(volume: number) {
        this.video.muted = false;
        this.video.volume = volume;
        this.changeVolumeDom()
    }

    // 开启画中画
    enterPictureInPicture() {
        if (
            (document as any).pictureInPictureEnabled &&
            !(this.video as any).disablePictureInPicture) {
            try {
                // 检查有没有元素进入画中画
                if ((document as any).pictureInPictureElement) {
                    // 退出画中画
                    (document as any).exitPictureInPicture();
                    return
                }
                // 进入画中画
                (this.video as any).requestPictureInPicture();
            } catch (err) {
                console.error(err);
            }
        }
    }

    // 网页全屏
    documentFullScreenFn() {
        // 首先判断网页是否进入全屏状态
        // 如果进入全屏状态,退出全屏状态
        let isFull = !!((document as any).webkitIsFullScreen || (document as any).mozFullScreen ||
            (document as any).msFullscreenElement || document.fullscreenElement
        );
        isFull ? this.exitFullscreen() : "";

        // 如果拥有dp-webfullscreen类名并且没有进入全屏退出网页全屏状态, 否则取消网页全屏状态
        if (this.video.parentElement.classList.contains("dp-webfullscreen") && !isFull) {
            this.exitDocumentFullScreenFn();
        } else {
            const html = document.querySelector('html')
            const body = document.querySelector('body')
            this.video.parentElement.classList.add("dp-webfullscreen");
            html.style.overflow = 'hidden'
            html.style.height = '100%'
            body.style.overflow = 'hidden'
            body.style.height = '100%'
        }
        let {_parentSelf} = this.options;
        _parentSelf.recalculateDrawingPosition();
        this.changeActionTime(false);


    }

    exitDocumentFullScreenFn() {
        this.video.parentElement.classList.remove("dp-webfullscreen");
        const html = document.querySelector('html')
        const body = document.querySelector('body')
        html.removeAttribute("style")
        body.removeAttribute("style")
        let {_parentSelf} = this.options;
        _parentSelf.recalculateDrawingPosition();
        this.changeActionTime(false);
    }

    // 全屏
    fullScreen(element: HTMLElement) {
        if ((element as any).requestFullscreen) {
            (element as any).requestFullscreen();
        } else if ((element as any).msRequestFullscreen) {
            (element as any).msRequestFullscreen();
        } else if ((element as any).mozRequestFullScreen) {
            (element as any).mozRequestFullScreen();
        } else if ((element as any).webkitRequestFullscreen) {
            (element as any).webkitRequestFullscreen();
        }
    }

    exitFullscreen() {
        if ((document as any).exitFullscreen) {
            (document as any).exitFullscreen();
        } else if ((document as any).msExitFullscreen) {
            (document as any).msExitFullscreen();
        } else if ((document as any).mozCancelFullScreen) {
            (document as any).mozCancelFullScreen();
        } else if ((document as any).webkitExitFullscreen) {
            (document as any).webkitExitFullscreen();
        }
    }

    changeWindowFullScreen() {
        let {_parentSelf} = this.options
        let isFull = !!((document as any).webkitIsFullScreen || (document as any).mozFullScreen ||
            (document as any).msFullscreenElement || document.fullscreenElement
        )
        if (isFull) {
            this.exitFullscreen()
        } else {
            this.fullScreen(this.video.parentElement)
        }
        _parentSelf.recalculateDrawingPosition();
        this.changeActionTime(false);

    }

    // 改变当前时间
    changeActionTime(flag: boolean = true,isjump:boolean = false) {
        if (!this.timePoint || !this.timePointbg) {
            this.timePoint = this.contrllerDom.querySelector(".dp-time-contrller-point");
            this.timePointbg = this.contrllerDom.querySelector(".dp-time-contrller-bg");
        }
        let allTime = this.video.duration;
        let time = this.video.currentTime;
        let offsetWidth = this.contrllerDom.offsetWidth
        this.timePoint.style.left = time / allTime * offsetWidth + "px";
        this.timePointbg.style.width = time / allTime * offsetWidth + "px";
        this.actionTime.innerText = formatTime(time);
        !this.video.paused && flag && (this.reqAFId = requestAnimationFrame(this.changeActionTime.bind(this)));
        isjump?this.video.dispatchEvent(this.progressBarJumpChange):this.video.dispatchEvent(this.progressBarChange);
    }

    // 修改进度条
    changeCurrentTime(e?: MouseEvent, offsetx?: number) {
        let allTime = this.video.duration;
        let offsetWidth = this.contrllerDom.offsetWidth
        let basePro = allTime / offsetWidth;
        let isJump = false;
        if (e) {
            this.video.currentTime += e.movementX * basePro;
            isJump = true
        }
        if (offsetx !== undefined) {
            this.video.currentTime = offsetx * basePro;
            isJump = true;
        }
        this.changeActionTime(undefined,isJump)
    }

    // 进度条点击事件
    progressBarClick(e: MouseEvent) {
        if (e.target === this.parentDom.querySelector(".dp-time-contrller-box")) {
            this.changeCurrentTime(undefined, e.offsetX)
        }
    }

    // 切换播放暂停按钮
    changeBtn(play: boolean) {
        if (play) {
            this.leftBox_play.classList.remove("active")
            this.leftBox_pause.classList.add("active")
        } else {
            this.leftBox_pause.classList.remove("active")
            this.leftBox_play.classList.add("active")
        }
    }

    // 修改倍速
    changePlaybackRate(className: string, spead: number, lebal: string) {
        let acItem = this.speadSelect.querySelector("." + className)
        if (acItem.classList.contains("active")) {
            return;
        }
        this.speadSelect.querySelector('.dp-playback-rate-list.active').classList.remove("active")
        acItem.classList.add("active")
        acItem.parentElement.style.pointerEvents = "none";
        acItem.parentElement.style.opacity = "0";
        setTimeout(() => {
            acItem.parentElement.style.pointerEvents = "";
            acItem.parentElement.style.opacity = "";
        }, 501)
        this.video.playbackRate = spead;
        (this.parentDom.querySelector(".dp-playback-rate-msg") as HTMLElement).innerText = lebal;
    }

    // 获取最外层元素
    getElement(): HTMLElement {
        return this.contrllerDom;
    }

    // 卸载进度条并且重新渲染进度条
    unload() {
        this.timePoint = this.timePointbg = null
        this.contrllerDom.parentElement.removeChild(this.contrllerDom);
        this.creatContrller();
    }

    // 进度条隐藏
    hide(){
        this.parentDom.style.cursor = "none";
        this.contrllerDom.style.opacity = "0";
    }

    // 进度条显示
    show(){
        this.parentDom.style.cursor = "auto";
        this.contrllerDom.style.opacity = "1";
    }


}
