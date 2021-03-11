const quiz=[
    {
        question1:"素数はどれ？",
        answers:[
            "2",
            "4",
            "6",
            "8"
        ],
        correct:"2"
    },{
        question1:"完全数はどれ？",
        answers:[
            "2",
            "10",
            "28",
            "54"
        ],
        correct:"28"
    },{
        question1:"グロタンディーく素数はどれ？",
        answers:[
            "57",
            "91",
            "133",
            "211"
        ],
        correct:"57"
    }

];
const quizLength = quiz.length;

let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = ()  =>{
    document.getElementById("question").textContent =quiz[quizIndex].question1;
 let buttonIndex = 0;
 let buttonLength = $button.length
    while (buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}


document.getElementById("question").textContent = quiz[quizIndex].question1;

 let buttonIndex = 0;
while (buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}


setupQuiz();



const clickHandler = (e) =>{
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解");  
        score++; 
       }
       else{
           window.alert("不正解");
       }

       quizIndex++;
       if(quizIndex < quizLength){
            setupQuiz () ;
       }else{
           window.alert("終了！点数は"　+ score +"/" +quizLength +"でした")
       }
}


//ボタンを押したら正誤判定
let handlerIndex =0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click",(e)=> {
        clickHandler (e);
     });
     handlerIndex ++;
}


// $button[0].addEventListener("click",(e)=> {
//    clickHandler (e);
// });

// $button[1].addEventListener("click",(e)=> {
//     clickHandler (e);
// });

// $button[2].addEventListener("click",(e)=> {
//     clickHandler (e);
// });

// $button[3].addEventListener("click",(e)=> {
//     clickHandler (e);
// });