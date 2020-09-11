# DPvideo

目前暂定为 canvas 渲染 video

Typescript已成趋势,所以我决定使用Typescript开发这个播放器

拥有上方 title 栏, 下方控制栏

下方控制栏应该有的功能

- 播放
- 下一个(如果传入的播放地址为数组)
- 选择清晰度
- 倍速播放
- 音量
- 画中画
- 网页全屏
- 全屏
- 镜像

实验室功能(会有性能影响)

- 滤镜(调整 RGB 通道)

搞个右键菜单标注出来是老夫写的

播放按钮

```html
<!DOCTYPE html>
<!-- saved from url=(0066)https://www.17sucai.com/preview/1749733/2019-06-27/dist/index.html -->
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <title>播放暂停按钮动画</title>
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      body {
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        width: 200px;
        height: 200px;
        background: #000;
        background-image: linear-gradient(
          -20deg,
          #ddd6f3 0%,
          #faaca8 100%,
          #faaca8 100%
        );
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #app {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
      }

      .pause,
      .play {
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: absolute;
      }

      .line {
        position: absolute;
        width: 8px;
        height: 50%;
        background: #000;
        border-radius: 10px;
        transition: all 400ms cubic-bezier(0.8, 0, 0.33, 1);
      }

      .pause .line_1 {
        margin: 25% 0;
        left: 28%;
      }
      .pause .line_2 {
        margin: 100% -16%;
        right: 45%;
        transition-delay: 200ms;
      }
      .pause.active .line {
        opacity: 1;
      }
      .pause.active .line_1 {
        margin: 25% 0;
        left: 28%;
      }
      .pause.active .line_2 {
        margin: 25% 0;
        right: 28%;
      }

      .play .line {
        margin: 25% 0;
      }
      .play .line_1 {
        left: 28%;
      }
      .play .line_2 {
        height: 56%;
        left: 60%;
        transform: rotate(-55deg) translateY(-128px) translateX(16px);
        transition-delay: 100ms;
      }
      .play .line_3 {
        height: 56%;
        left: 60%;
        transform: rotate(55deg) translateY(-128px) translateX(16px);
        transition-delay: 200ms;
      }
      .play.active .line {
        opacity: 1;
        height: 62%;
        margin: 20% 0;
      }
      .play.active .line_1 {
        left: 28%;
        transform: translateY(-2px);
      }
      .play.active .line_2 {
        height: 56%;
        left: 63%;
        transform: rotate(-55deg) translateY(-16.5px) translateX(2px);
      }
      .play.active .line_3 {
        height: 56%;
        left: 63%;
        transform: rotate(55deg) translateY(16px) translateX(2px);
      }

      .support {
        position: absolute;
        right: 10px;
        bottom: 10px;
        padding: 10px;
        display: flex;
      }

      a {
        margin: 0 20px;
        color: #fff;
        font-size: 2rem;
        transition: all 400ms ease;
      }

      a:hover {
        color: #222;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div id="app">
        <div class="pause">
          <div class="line line_1"></div>
          <div class="line line_2"></div>
        </div>
        <div class="play active">
          <div class="line line_1"></div>
          <div class="line line_2"></div>
          <div class="line line_3"></div>
        </div>
      </div>
    </div>

    <script>
      var pause = document.querySelector('.pause')
      var play = document.querySelector('.play')
      var btn = document.querySelector('#app')

      btn.addEventListener('click', () => {
        if (play.classList.contains('active')) {
          play.classList.remove('active')
          pause.classList.add('active')
        } else {
          pause.classList.remove('active')
          play.classList.add('active')
        }
      })
    </script>
  </body>
</html>
```

```js
调用方式
new dpVideo(parentDom,urlList,options)
```

```js
// videoUrl格式:
// 格式1 : "http://asdasd"
// 格式2 : ["http://asdasd","http://asdasd"]
// 格式3 : {defaultId:0,urlList:[{id:0,url:'http://asdasd',label:'360P'}]}
// 格式4 : [{defaultId:0,urlList:[{id:0,url:'http://asdasd',label:'360P'}]},{defaultId:0,urlList:[{id:0,url:'http://asdasd',label:'360P'}]}] 

let options = {
  barrageShow:true, // 是否开启弹幕功能, 默认为true
  barrageList:[
      {
          msg:"",//弹幕内容
          time:Number // 弹幕发送时间
      }
  ], // 弹幕数组默认为空,上方标识弹幕数据格式
  barrageScope: 1500, // 默认为1500毫秒, 在可视区域停留时间
  title: {
    // 标题
    show: true, // 标题是否显示
    label: '' // 标题显示内容
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
    playbackRateList: ['0.5x', '1.0x', '1.25x', '1.5x', '2.0x'], // 播放速度数组默认值
    togglePip: true, // 画中画 默认true
    documentFull: true, // 网页全屏 默认true
    windowFull: true, // 全屏 默认true
    Mirror: false // 镜像 默认false
  }
} 
```

