// 计算颜色的亮度
function getLuminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// 根据亮度选择合适的文字颜色
function setTextColorBasedOnBackground() {
    // 获取背景颜色
    var bgColor = window.getComputedStyle(document.body).backgroundColor;

    // 从 rgb 格式中提取 r, g, b 值
    var rgbValues = bgColor.match(/\d+/g);
    var r = parseInt(rgbValues[0], 10);
    var g = parseInt(rgbValues[1], 10);
    var b = parseInt(rgbValues[2], 10);

    // 计算亮度
    var luminance = getLuminance(r, g, b);

    // 根据亮度设置文本颜色
    var textColor = luminance > 0.5 ? 'black' : 'white';
    document.querySelector('.header').style.color = textColor;
}

// 页面加载时调用函数
window.addEventListener('load', setTextColorBasedOnBackground);
