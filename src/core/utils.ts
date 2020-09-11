// 检查urlListType到底是哪种类型
export function whatUrlType(obj): number {
    // 格式进行修改 :
    // 格式1: "http://asdasd"
    // 格式2:  ["http://asdasd",{defaultId:0,urlList:[{id:0,url:'http://asdasd',label:'360P'}]}]
    let flag = 0;
    if (Object.prototype.toString.call(obj) === '[object String]') {
        flag = 1;
    } else if (Object.prototype.toString.call(obj) === "[object Array]") {
        flag = 2;
    }
    return flag;
}

// 获取元素真实属性
export function getStyle(element, style) {
    return element.currentStyle ? element.currentStyle[style] : getComputedStyle(element)[style];
}

// 元素挂载style
export function styleList(dom: HTMLElement, styleList: object) {
    for (let item in styleList) {
        dom.style[item] = styleList[item];
    }
}

// 元素挂载className
export function classNameList(dom: HTMLElement, className: Array<string>) {
    dom.classList.add(...(className.filter(item=>item.length!=0)))
}

// 绑定事件
export function bindMethods(dom: HTMLElement, methods: object) {
    let keys = Object.keys(methods);

    for (let i = 0; i < keys.length; i++) {
        dom.addEventListener(keys[i], methods[keys[i]])
    }
}

interface DomList {
    tag: string, // 创建的tag名
    innerText?: string, // tag中的innerText
    className?: Array<string>, // tag类名
    style?: object, // tag行内样式
    children?: Array<DomList>, // tag子元素
    methods?: object // tag绑定的事件
}

// 创建div的渲染函数
export function render( domList: DomList,parentDom: HTMLElement | null = null): HTMLElement {
    let c_dom = document.createElement(domList.tag);
    if (domList.innerText) {
        c_dom.innerText = domList.innerText;
    }
    if (domList.className) {
        classNameList(c_dom, domList.className);
    }
    if (domList.style) {
        styleList(c_dom, domList.style);
    }
    if (domList.methods) {
        bindMethods(c_dom, domList.methods);
    }
    if (domList.children && domList.children.length > 0) {
        for (let i = 0; i < domList.children.length; i++) {
            render(domList.children[i], c_dom);
        }
    }
    if (parentDom !== null) {
        parentDom.append(c_dom);
        return parentDom;

    } else {
        return c_dom;
    }
}

// 格式化时间
export function formatTime (time:number):string {
    let ceilTime = Math.ceil(time);
    let m = Math.floor(ceilTime/60);
    let s = ceilTime % 60;
    let r_m = m < 10 ? "0" + m : m;
    let r_s = s < 10 ? "0" + s : s;
    return r_m + ":" + r_s;
}
