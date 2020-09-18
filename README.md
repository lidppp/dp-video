# DPvideo
一款集成弹幕,视频播放为一体的播放器,不对任何包拥有依赖,完全由ts编写
使用canvas渲染video,操作videoApi实现播放功能 
弹幕也是由canvas实现的
[预览地址](http://hptn3l.coding-pages.com/dist/)

有时间具体写使用文档,目前可以去预览地址查看源码
使用方式: 
```html
<div class="videoParent"></div>
<script src="/dist/js/dp-video.min.js"></script>
```

```js
var videol = new dpVideo(
        document.querySelector(".videoParent"),
        [
            "/dist/video/1.mp4",
            {
                defaultId: 1,
                urlList: [
                    {
                        id: 1,
                        url: "/dist/video/1.mp4",
                        label: "清晰度1"
                    },
                    {
                        id: 2,
                        url: "/dist/video/mov_bbb.mp4",
                        label: "清晰度2"
                    }
                ]
            },
            "/dist/video/mov_bbb.mp4"
        ],
        {
            barrageList: [
                {msg: "Liddsadppp2", timePoint: 0, color: "red", position: "move"},
                {msg: "Liddsappp8", timePoint: 0, color: "red", position: "move"},
                {msg: "Lidpdsadsapp12", timePoint: 0, color: "red", position: "move"},
                {msg: "Lidpdaspp13", timePoint: 0, color: "red", position: "move"},
                {msg: "Lidpdsadaspp9", timePoint: 0, color: "red", position: "move"},
                {msg: "Liddsadasppp1", timePoint: 1, color: "blue", position: "move"},
                {msg: "Lidpdaspp3", timePoint: 1, color: "red", position: "move"},
                {msg: "Lidpdsasdapp4", timePoint: 2, color: "red", position: "move"},
                {msg: "Lidppdasp5", timePoint: 3, color: "red", position: "move"},
                {msg: "Liddsadasppp6", timePoint: 4, color: "red", position: "top"},
                {msg: "Lidpdspp11", timePoint: 4, color: "red", position: "bottom"},
                {msg: "Lidpdaspp7", timePoint: 5, color: "red", position: "bottom"},
                {msg: "Liddsadasaaaaaaappp10", timePoint: 5, color: "red", position: "move"},
                {msg: "Liddasdasppp10", timePoint: 7, color: "red", position: "move"},
                {msg: "Lidpddddpp10", timePoint: 6, color: "red", position: "move"},
                {msg: "Lidpdsadsapp14", timePoint: 11, color: "red", position: "top"},
                {msg: "Lidpdsadpp15", timePoint: 13, color: "red", position: "bottom"},
            ]
        }
    );
```
