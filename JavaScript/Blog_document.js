document.addEventListener("DOMContentLoaded", function () {
    const blogItems = document.querySelectorAll(".blog-item"); // 选择所有博客项
    const modal = document.getElementById("modal"); // 选择模态框元素
    const closeBtn = document.getElementById("closeBtn"); // 选择关闭按钮
    const modalTitle = document.getElementById("modalTitle"); // 选择模态框标题
    const modalContent = document.getElementById("modalContent"); // 选择模态框内容

    blogItems.forEach((item) => {
        const fullContent = item.querySelector(".full-content").innerHTML; // 获取博客项的完整内容
        const excerptLength = 100; // 设置摘录长度为100个字符
        const excerpt =
            fullContent.length > excerptLength // 如果内容长度超过摘录长度
                ? fullContent.slice(0, excerptLength) + "..." // 截取内容并添加省略号
                : fullContent; // 否则显示完整内容
        item.querySelector(".excerpt").innerHTML = excerpt; // 在博客项中设置摘录内容

        item.addEventListener("click", function () {
            const title = this.querySelector("h2").innerText; // 获取博客项的标题
            modalTitle.innerText = title; // 在模态框中设置标题
            modalContent.innerHTML = fullContent; // 在模态框中设置完整内容
            modal.style.display = "flex"; // 显示模态框
            document.body.classList.add("no-hover"); // 禁用主页面的悬停效果
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // 关闭模态框
        document.body.classList.remove("no-hover"); // 恢复主页面的悬停效果
    });

    // 排序博客项
    const container = document.querySelector(".blog-container"); // 获取博客容器
    const sortedItems = Array.from(blogItems).sort(
        (a, b) =>
            new Date(b.getAttribute("data-date")) - // 根据data-date属性比较两个博客项的日期
            new Date(a.getAttribute("data-date"))
    );
    sortedItems.forEach((item) => container.appendChild(item)); // 重新按日期顺序添加博客项
});
