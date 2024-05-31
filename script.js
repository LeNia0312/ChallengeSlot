document.getElementById('generateButton').addEventListener('click', generateRandomStrings);

function generateRandomStrings() {
    const boxes = ['box1', 'box2', 'box3'];
    /*boxes.forEach(box => {
        document.getElementById(box).textContent = generateRandomString();
    });*/

    document.getElementById('box1').textContent = GenelateWhenString();
    document.getElementById('box2').textContent = GenelateWhoString();
    document.getElementById('box3').textContent = GenelateWhereDoString();
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

/*いつ を生成する*/
function GenelateWhenString(){
    const ary = ['今'];
    let random = Math.floor(Math.random()*ary.length);

    return ary[random];
}

/*だれ を生成する*/
function GenelateWhoString(){
    const ary = ['フレンドと','1人で'];
    let random = Math.floor(Math.random()*ary.length);

    return ary[random];
}

/*どこ を生成する*/
function GenelateWhereDoString(){
    const ary = ['グリダニアで写真を撮る','ウルダハでシャウト好きなキャラクターに\n愛の告白を叫ぶ'];
    let random = Math.floor(Math.random()*ary.length);

    return ary[random];
}

