function validatePassword() {
  var password = prompt("请输入密码以进入日记本:");

  // 假设密码为 "040610"
  if (password === "040610") {
    window.location.href = "./Menu/Diary/Diary.html"; // 跳转到日记本页面
  } else {
    alert("密码错误，请重试！");
  }
}
window.addEventListener('load', function () {
  document.body.classList.add('loaded');
});

// JavaScript 动态更新背景图
function updateBackgroundImage(url) {
  document.documentElement.style.setProperty('--background-image-url', `url('${url}')`);
}

// 示例：动态更新背景图路径
updateBackgroundImage('./PIC/new-background.jpg');
