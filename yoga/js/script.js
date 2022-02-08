window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabConcent = document.querySelectorAll('.info-tabcontent');
    

    // Функция которая скрывает все табыл, принимет 1 тех. аргумент и скрывает их все полностью со страницы. 
    function hideTabContent (a) {
        for (let i = a; i < tabConcent.length; i++) { // при проходе цикла, удаляет класс ШОВ и потом добавляет класс ХАЙ.
            tabConcent[i].classList.remove('show');
            tabConcent[i].classList.add('hide');
        };
    };

    hideTabContent(1); // Что бы это работало, запускаем фукцию, так она начинает работать. Но что бы 1 елемент всегда оставался, нужно передать 1.

    function showTabContent(b) { 
        if (tabConcent[b].classList.contains('hide')) { //Если условие находит ХАЙД, то оно его удаляет и добавляет класс ШОВ.
            tabConcent[b].classList.remove('hide');
            tabConcent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function(event) {
        let target = event.target; //отображает тот элемент на котоырй было произведено нажатие.
        if (target && target.classList.contains('info-header-tab')) { //Проверяется точно ли мы наали на конкретный элемент в нашем родителе.
            for (let i = 0; i < tab.length; i++) { 
                if (target == tab[i]) { //если номер кнпоки совпадает с номером блока с контентом, то услови выполняется.
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
});