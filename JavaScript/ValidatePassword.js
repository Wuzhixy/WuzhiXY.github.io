function validatePassword() {
    var password = prompt("请输入密码以进入雾质的记忆:"); // 提示用户输入密码

    if (password === "040610") { // 检查输入的密码是否正确
        window.location.href = "../../Memory.html"; // 如果密码正确，跳转到日记本页面
    } else {
        alert("密码错误，请重试！"); // 如果密码错误，显示提示信息
    }
}
