// ボタンイベント発火をフックする
document.getElementById('generateButton').addEventListener('click', generateRandomStrings);

// テキストを生成する
function generateRandomStrings() {

    // いつ
    document.getElementById('box1').textContent = GenelateWhenString();
    // だれと
    document.getElementById('box2').textContent = GenelateWhoString();
    // どこでなにする
    document.getElementById('box3').textContent = GenelateWhereDoString();
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

