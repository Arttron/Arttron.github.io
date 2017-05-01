function pow( num, ext){
    var res=num, unNum=false;
    if(ext<0){
        unNum=true;
        ext=ext*(-1);
    }
    ext = ext - 1;
      for (ext; ext > 0; ext--) {
         res = num * res;
      }
    if(unNum){
       res=1/res;
    }
    return res;
}

var uNum, uExt;
uNum = +prompt('Введите цифру для возведения', '');
uExt = +prompt('Введите степень', '');
console.log("Результат: "+pow(uNum, uExt));

