var nameArr=[], colName, accesName, accesConf;
colName=5;
accesConf=false;
for(var i=0; i<colName; i++){
    nameArr[i]=prompt('Введите имя: '+Number(i+1)+'/'+colName,'');
}
alert('Дальше введите имя для доступа');
accesName=prompt('Введите имя','');
for(var i=0; i<nameArr.length; i++){
    if(accesName==nameArr[i] && accesName!= null){
        alert('Добропожаловать '+accesName);
        accesConf=true;
        break
    }
}
if(accesConf==false || accesConf==null ){
    alert('Мы вас не звали, '+accesName);
}

