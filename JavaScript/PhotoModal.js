// 打开模态框并显示图片
function openModal(event) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');

    modal.style.display = 'flex'; // 显示模态框
    modalImage.src = event.target.src; // 更新模态框中的图片源
}

// 关闭模态框
document.getElementById('closeBtn').onclick = function () {
    document.getElementById('photoModal').style.display = 'none';
}

// 点击模态框外部区域也能关闭模态框
document.getElementById('photoModal').onclick = function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
}
