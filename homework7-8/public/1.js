/**
 * Created by User on 16.05.2017.
 */
//id="Order_line"
//id="Status_order"
(function(){
var status_list = {
    status_listItem:   ['Ожидание', 'В обработке', 'Доставлено', 'Отменено', 'Сделка завершена', 'Возврат', 'Отмена и аннулирование', 'Неудавшийся', 'Возмещенный', 'Полностью измененный', 'Полный возврат', 'Ожидает прихода товара на склад'],
    status_listColor: [
        '#BA0000',
        '#4C8BF5',
        '#1FA48D',
        '#D4D0C8',
        '#779820',
        '#EBBBBD',
        '#EBBBBD',
        '#EBBBBD',
        '#EBBBBD',
        '#EBBBBD',
        '#EBBBBD',
        '#30C9F9',
    ]
};



var td_status = document.querySelectorAll('.Status_order');
var tr_line = document.querySelectorAll('.Order_line');

for (var q in td_status){
    for(var item in status_list.status_listItem){
        if (td_status[q].innerHTML == status_list.status_listItem[item]){
             tr_line[q].style.backgroundColor = status_list.status_listColor[item];
        }
    }
}

//
//for (var a in status_list){
//    for(var f in status_list[a]){
//        if(a == 'status_listItem'){
//            tr_line.style.backgroundColor = status_list.status_listColor[f];
//
//        };
//        console.log(status_list[a][f]);
//    }
//}
})()