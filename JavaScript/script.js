 function validatePassword() {
        var password = prompt("请输入密码以进入日记本:");

        // 假设密码为 "040610"
        if (password === "040610") {
          window.location.href = "./Menu/Diary/Diary.html"; // 跳转到日记本页面
        } else {
          alert("密码错误，请重试！");
        }
      }