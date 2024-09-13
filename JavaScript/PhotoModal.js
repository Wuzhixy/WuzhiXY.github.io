function openModal(event) {
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');

    // 显示模态框
    modal.style.display = 'flex';
    // 更新模态框中的图片源
    modalImage.src = event.target.src;

    // 等待图片加载完成后调整模态框大小
    modalImage.onload = function () {
        const aspectRatio = modalImage.naturalWidth / modalImage.naturalHeight;

        // 设置模态框内容的宽度和高度，保持图片的比例
        const modalContent = document.querySelector('.Photo-modal-content');
        const maxWidth = window.innerWidth * 0.8;  // 最大宽度为视口宽度的 80%
        const maxHeight = window.innerHeight * 0.8; // 最大高度为视口高度的 80%

        // 根据图片的比例计算合适的宽度和高度
        let width = maxWidth;
        let height = maxWidth / aspectRatio;

        if (height > maxHeight) {
            height = maxHeight;
            width = height * aspectRatio;
        }

        // 更新模态框内容的尺寸
        modalContent.style.width = `${width}px`;
        modalContent.style.height = `${height}px`;
    };
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
