// videoList 四种数据格式
// 格式1 : "http://asdasd"
// 格式2 : [{defaultId:0,urlList:[{id:0,url:'http://asdasd',label:'360P'}]}}]


export interface urlFormat1 {
    defaultId:number|string,
    label?:"",
    urlList: Array<urlFormat2>
}
export interface urlFormat2 {
    id:number,
    url:string,
    label:string
}
// 配置项数据类型
export interface optionsFormat {
    barrageShow?:boolean, // 是否开启弹幕功能, 默认为true
    barrageList?:Array<{
        msg:"",//弹幕内容
        time:Number // 弹幕发送时间,相对于视频的毫秒数
    }>// 弹幕数组默认为空,上方标识弹幕数据格式
    barrageScope?: number, // 默认为1500毫秒, 在可视区域停留时间
    title?: {
        // 标题
        show: boolean, // 标题是否显示
        label: string // 标题显示内容
    },
    // 控制条显示
    controller?: boolean, // 默认显示
    // 控制条配置项, 如果用户手动指定则按照用户手动指定的解析
    controllerOption?: {
        play?: boolean, // 播放按钮, 默认为true
        next?: boolean, // 下一个按钮, 默认为false, 如果传入的videoUrl的格式为2或者4的话则默认为true
        clarity?: boolean, //选择清晰度, 默认为false, 如果传入的videoUrl格式为3,4为true
        volume?: boolean, // 音量默认为true
        playbackRate?: boolean, // 播放速度默认为true
        playbackRateList?: Array<{ speed:number,label:string,default?:boolean}>, // 播放速度数组默认值
        togglePip?: boolean, // 画中画 默认true
        documentFull?: boolean, // 网页全屏 默认true
        windowFull?: boolean, // 全屏 默认true
        Mirror?: boolean // 镜像 默认false
    },
    _parentSelf?:any

}

// 导出集成的UrlListType
export type UrlListType = Array<string | urlFormat1> | string;

