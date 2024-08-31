// 在页面加载完成后，添加 loaded 类
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
    // 修改 CSS 变量的值以更新背景图
    document.documentElement.style.setProperty('--background-image-url', "url('./PIC/01.jpg')");
});