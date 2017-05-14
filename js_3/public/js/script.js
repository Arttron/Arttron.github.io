var test = {
    data: {
        title: 'Тест по какой-то теме',
        questions: [
            {
                title: 'Вопрос #1',
                answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
            },
            {
                title: 'Вопрос #2',
                answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
            },
            {
                title: 'Вопрос #3',
                answers: ['Вариант овтета 1', 'Вариант овтета 2']
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
        var qBlock = [], qBlock_item = [[[]]];
        var body = document.querySelector('.body');
        container.className = 'container';
        container.setAttribute('action', '../post.php');
        container.setAttribute('method', 'POST');
        var q = 0;
        body.appendChild(container);

        for (var i in test.data.questions) {
            qBlock[i] = document.createElement('div');
            qBlock[i].className = 'col-12';
            qBlock[i].classList.add('offset-2');
            qBlock[i].style.marginBottom = '15px';
            qBlock[i].innerHTML = '<h2>'+Number(Number(i)+1)+'.'+' '+test.data.questions[i].title+'</h2>';
            container.appendChild(qBlock[i]);
            qBlock_item[i]=[i];
            qBlock_item[i][i]=[i];
            for (q in test.data.questions[i].answers){
                qBlock_item[i][q] = document.createElement('label');
                qBlock_item[i][q][q] = document.createElement('input');
                qBlock_item[i][q].className = 'label_item';
                qBlock_item[i][q][q].setAttribute('type', 'radio');
                qBlock_item[i][q][q].setAttribute('value', 'radio'+i+q);
                qBlock_item[i][q][q].className = 'radio'
                qBlock_item[i][q][q].setAttribute('name', 'r'+i);
                qBlock_item[i][q][q].setAttribute('id', 'rq'+i+q);
                qBlock_item[i][q][q].style.margin = '0 10px'
                qBlock_item[i][q].setAttribute('for', 'rq'+i+q);
                qBlock_item[i][q].innerHTML = test.data.questions[i].answers[q];
                qBlock[i].appendChild(qBlock_item[i][q][q]);
                qBlock[i].appendChild(qBlock_item[i][q]);
            }
        }
        var btn = document.createElement('input');
        btn.addEventListener('click',function(event){
            var chek = document.querySelectorAll('.radio');
            var chek_sel;
            chek_sel=0;
            for(var a in chek){
                if(chek[a].checked){
                    chek_sel++;
                }
            }
            if(chek_sel<3) {
                alert('Выберите варианты отверов во всех пунктах');
                event.preventDefault();
            }
            return false;
        });
        btn.setAttribute('type', 'submit');
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

