/**
 * Created by User on 02.07.2017.
 */
'use strict';
var test =[{
    title: 'Тест по физике',
    questions: [
        {
            title: 'Сколько существует основных законов Ньютона',
            answers: ['10', '5', '3', '4'],
            correctAnswers: [3]
        },
        {
            title: 'Формула эквивалентности массы',
            answers: ['E = ms2', 'E = mc2', 'E = nc2', 'V = U/R'],
            correctAnswers: [2]
        },
        {
            title: 'Законы Ома (правильны два варианта)',
            answers: ['I = U/R', 'U = IR', 'U = R + I', 'R = I/U'],
            correctAnswers: [1, 2]
        },
        {
            title: ' деформация, возникающая в упругом теле (пружине, стержне, консоли, балке и т. п.), пропорциональна приложенной к этому телу силе',
            answers: ['Закон Кука', 'Закон Мука', 'Закон Гука'],
            correctAnswers: [3]
        }
    ]}
    ];

window.localStorage.setItem("test", JSON.stringify(test));
test={};
console.log('очистил объект тест'+' test='+test.questions);
test = JSON.parse(localStorage.getItem("test"));
/////////////////////////////////////////////////////////
var ansArr = new Array(), ansIndex;
for (var a in test.questions){
    console.log(a);
    ansIndex=0;
    for (var b in test.questions[a].answers){
        ansIndex++;
        ansArr.push(false);
        for(let n=0; n<test.questions[a].correctAnswers.length; n++) {
            if (ansIndex == test.questions[a].correctAnswers[n]) {
                ansArr.pop();
                ansArr.push(true);
            }
        }
    }
}
console.log(ansArr);
/////////////////////////////////////////////////////////////////////
console.log('загрузил из local storage объект тест'+' test='+test[0].questions);
var lsTemp ;
var template = document.getElementById("loTemplate").innerHTML;
var content;
content = _.template(template);
var test_sel=test[0];
console.log(test_sel);
document.querySelector('.body').innerHTML = content(test_sel);

var ansBtn = document.querySelector("#checkButton");
var popupD = document.querySelector('#dialog');
ansBtn.addEventListener("click", function() {
    let currentAns = document.querySelectorAll(".radio");
    let chek_sel;
    chek_sel = 0;

    console.log(currentAns);
    let curAnsArr = [];
    _.forEach(currentAns, function (item) {
        curAnsArr.push(item.checked);
        console.log(item.checked);
        if (item.checked == true) {
            chek_sel++;
        }
    });
    console.log();

    ////********* pop
    if (chek_sel < test[0].questions.length) {
        popupD.innerHTML = 'Выберите варианты ответов во всех пунктах';
        popupD.setAttribute("style", "background-color:red;");
        popup.setAttribute("style", "display:flex;");
        event.preventDefault();
    } else {

        if (!_.isEqual(curAnsArr, ansArr)) {
            popupD.innerHTML = "Не правильно ответили! <br>Попробуйте ещё.";
            popupD.setAttribute("style", "background-color:red; font-size:24px; font-weight:600");
            popup.setAttribute("style", "display:flex;");
        } else {
            popupD.innerHTML = 'Поздравляю вы прошли тест!!!';
            popupD.setAttribute("style", "background-color:green; font-size:24px; font-weight:600");
            popup.setAttribute("style", "display:flex;");


        }
    }

});
popup.addEventListener('click',function(){
    popup.setAttribute('style','');
});

var addAnswerBtn = document.querySelector("#addAnswerBtn");
var answerOut = document.querySelector("#addedAnswer");
var answerOutArrEl = [];
var answerArr = [];
var ansUl = document.createElement('ol');
addAnswerBtn.addEventListener('click',()=>{
    answerArr.push(document.querySelector("#inputAnswer-text").value);
    document.querySelector("#inputAnswer-text").value="";
    var ansLi = document.createElement('li');
    var checkBox = document.createElement("input");
    checkBox.setAttribute("style","margin-left: 10px;");
    checkBox.setAttribute("type","checkbox");
    ansLi.innerText = answerArr[answerArr.length-1];
    ansLi.appendChild(checkBox);

    ansUl.appendChild(ansLi);
    answerOut.appendChild(ansUl);
});



class test{

    title: 'Тест по физике';
    questions: [
{
    title: 'Сколько существует основных законов Ньютона',
    answers: ['10', '5', '3', '4'],
    correctAnswers: [3]
},
{
    title: 'Формула эквивалентности массы',
        answers: ['E = ms2', 'E = mc2', 'E = nc2', 'V = U/R'],
    correctAnswers: [2]
},
{
    title: 'Законы Ома (правильны два варианта)',
    answers: ['I = U/R', 'U = IR', 'U = R + I', 'R = I/U'],
    correctAnswers: [1, 2]
},
{
    title: ' деформация, возникающая в упругом теле (пружине, стержне, консоли, балке и т. п.), пропорциональна приложенной к этому телу силе',
        answers: ['Закон Кука', 'Закон Мука', 'Закон Гука'],
    correctAnswers: [3]
}
]}

}