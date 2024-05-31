document.getElementById('generateButton').addEventListener('click', generateRandomStrings);

function generateRandomStrings() {
    const boxes = ['box1', 'box2', 'box3'];
    boxes.forEach(box => {
        document.getElementById(box).textContent = generateRandomString();
    });
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const length = 10; // 生成する文字列の長さ
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
