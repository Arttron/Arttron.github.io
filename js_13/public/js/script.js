'use strict';
var test = {
    data : {
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
        ]
    },
    outHead: function () {
        var head = document.createElement('h1');
        var body = document.querySelector('.body');
        head.className = 'col-12 text-center';
        head.style.margin = '10px 0';
        head.innerHTML = test.data.title;
        body.appendChild(head);
    },
    outQuestions: function () {
        var container = document.createElement('form');
        var qBlock = [], qBlock_item = [[]];
        var body = document.querySelector('.body');
        container.className = 'container';
        container.setAttribute('action', '../post.php');
        container.setAttribute('method', 'POST');
        var q = 0;
        var ansArr = new Array(), ansArrCount;
        body.appendChild(container);
        for (let i in test.data.questions) {
            ansArrCount = 0;
            qBlock[i] = document.createElement('div');
            qBlock[i].className = 'col-12';
            qBlock[i].classList.add('offset-1');
            qBlock[i].style.marginBottom = '15px';
            qBlock[i].innerHTML = '<h2 class="col-12">'+Number(Number(i)+1)+'.'+' '+test.data.questions[i].title+'</h2>';
            container.appendChild(qBlock[i]);
            for (q in test.data.questions[i].answers){
                ansArrCount++;
                ansArr.push(false);
                for(let n=0; n<test.data.questions[i].correctAnswers.length; n++){
                    if(ansArrCount == test.data.questions[i].correctAnswers[n] ) {
                        ansArr.pop();
                        ansArr.push(true);
                    }
                }
                qBlock_item[q] = document.createElement('label');
                qBlock_item[q][q] = document.createElement('input');
                qBlock_item[q].className = 'label_item';
                if(test.data.questions[i].correctAnswers.length>1){
                qBlock_item[q][q].setAttribute('type', 'checkbox');
                }else{
                qBlock_item[q][q].setAttribute('type', 'radio');
                }
                qBlock_item[q][q].setAttribute('value', 'radio'+i+q);
                qBlock_item[q][q].className = 'radio'
                qBlock_item[q][q].setAttribute('name', 'r'+i);
                qBlock_item[q][q].setAttribute('id', 'rq'+i+q);
                qBlock_item[q][q].style.margin = '0 10px'
                qBlock_item[q].setAttribute('for', 'rq'+i+q);
                qBlock_item[q].innerHTML = test.data.questions[i].answers[q];
                qBlock[i].appendChild(qBlock_item[q][q]);
                qBlock[i].appendChild(qBlock_item[q]);
            }

        }
        var btn = document.createElement('input');
        var popup = document.querySelector('#popup');
        var popupD = document.querySelector('#dialog');
        btn.addEventListener('click',function(event){
            var chek = document.querySelectorAll('.radio');
            var chek_sel;
            var selQ = new Array();
            var colCh;
            colCh=0;
            chek_sel=0;
            for(var a in chek){
                if(chek[a].checked){
                    chek_sel++;

                }
                if (colCh<chek.length){
                    selQ.push(chek[a].checked);
                    colCh++;
                }
            }
            if(chek_sel<test.data.questions.length) {
                popupD.innerHTML = 'Выберите варианты отверов во всех пунктах';
                popupD.setAttribute("style","background-color:red;");
                popup.setAttribute("style", "display:flex;");
                event.preventDefault();
            }else{
                let incorAns;
                incorAns=0;
                for(let n=0; n<selQ.length;n++) {
                    if (ansArr[n] !== selQ[n]) {
                        incorAns++
                    }
                }
                if(incorAns){
                    container.appendChild(popup);
                    popupD.innerHTML = "Не правильно отвелили! <br>Попробуйте ещё.";
                    popupD.setAttribute("style","background-color:red; font-size:24px; font-weight:600");
                    popup.setAttribute("style", "display:flex;");
                }else{
                    popupD.innerHTML = 'Поздравляю вы рошли тест!!!';
                    popupD.setAttribute("style","background-color:green; font-size:24px; font-weight:600");
                    popup.setAttribute("style", "display:flex;");


                }
            }

            return false;
        });
        popup.addEventListener('click',function(){
            popup.setAttribute('style','');
        });
        btn.setAttribute('type', 'button');
        btn.setAttribute('value', 'Проверить');
        btn.classList.add('btn');
        btn.classList.add('btn-success');
        btn.classList.add('col-2');
        btn.classList.add('offset-5');
        container.appendChild(btn);
    },
    outContent: function (){
        this.outHead();
        this.outQuestions();
    }
};

test.outContent();

