const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// 静态文件夹指向HTML和图片资源
app.use(express.static(__dirname));

// 获取图片列表的API
app.get('/images', (req, res) => {
    const directoryPath = path.join(__dirname, 'PIC'); // 使用 PIC 文件夹
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('无法读取文件夹内容');
        }
        // 只返回图片文件（jpg, png, etc.）
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        res.json(imageFiles);
    });
});

app.listen(PORT, () => {
    console.log(`服务器正在运行在 http://localhost:${PORT}`);
});
