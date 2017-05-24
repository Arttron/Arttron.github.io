(function(){
//    var startTime = Date();
//
//    var displaySec = document.getElementById('seconds');
//    var displayMiliSec = document.getElementById('milisec');
//    var displayMinuts = document.getElementById('minuts');
//    var dataTime = new Date();
//    function showeTimeOnDisplay(time_qt){
//        var ms_str, sec_str, min_str;
//        dataTime.setTime(time_qt);
//        if(dataTime.getMilliseconds()<100) {
//            ms_str = '0' + dataTime.getMilliseconds();
//            if (dataTime.getMilliseconds() < 10) {
//                ms_str = '00' + dataTime.getMilliseconds();
//            }
//        }else{
//            ms_str = '' + dataTime.getMilliseconds();
//        }
//
//        if(dataTime.getSeconds()<10){
//            sec_str= '0'+dataTime.getSeconds();
//        }else{
//            sec_str= ''+dataTime.getSeconds();
//        }
//        if(dataTime.getMinutes()<10){
//            min_str= '0'+dataTime.getMinutes();
//        }else{
//            min_str= ''+dataTime.getMinutes();
//        }
//        displayMiliSec.innerHTML = ms_str ;
//
//        displaySec.innerHTML = sec_str;
//
//        displayMinuts.innerHTML = min_str;
//    }
//
//    function countTime(){
//        var qt = Date.now()-startTime;
//        console.log(qt);
//        showeTimeOnDisplay(qt);
//    }
//
//    var btnStartStop = document.querySelector('#btnStartStop');
//    var btnReset = document.querySelector('#btnReset');
//    var timer_sec, timePause;
//    startTime = 0;
//    timePause = false;
//    btnStartStop.addEventListener('click', function(){
//        if(!startTime){
//            startTime = Date.now();
//        }
//       if(!timer_sec) {
//           btnStartStop.setAttribute('value', "Pause");
//           timer_sec = setInterval(countTime, 333);
//            timePause = false;
//       }else{
//           clearInterval(timer_sec);
//           timer_sec=0;
//           btnStartStop.setAttribute('value', "Start");
//           timePause = true;
//       }
//    });
//
//
//
//    btnReset.addEventListener('click', function(){
//        if(timePause){
//            startTime = 0;
//            showeTimeOnDisplay(0);
//            timePause = false;
//            btnStartStop.setAttribute('value', "Start");
//        }
//    });
    var stopWatch = function(){

        var startTime = Date();
        var displaySec = document.getElementById('seconds');
        var displayMiliSec = document.getElementById('milisec');
        var displayMinuts = document.getElementById('minuts');
        var dataTime = new Date();

        function init (){
            var blockTimer = document.querySelector('.blockTimer');
        }

        function showeTimeOnDisplay(time_qt){
            var ms_str, sec_str, min_str;
            dataTime.setTime(time_qt);
            if(dataTime.getMilliseconds()<100) {
                ms_str = '0' + dataTime.getMilliseconds();
                if (dataTime.getMilliseconds() < 10) {
                    ms_str = '00' + dataTime.getMilliseconds();
                }
            }else{
                ms_str = '' + dataTime.getMilliseconds();
            }

            if(dataTime.getSeconds()<10){
                sec_str= '0'+dataTime.getSeconds();
            }else{
                sec_str= ''+dataTime.getSeconds();
            }
            if(dataTime.getMinutes()<10){
                min_str= '0'+dataTime.getMinutes();
            }else{
                min_str= ''+dataTime.getMinutes();
            }

            displayMiliSec.innerHTML = ms_str ;

            displaySec.innerHTML = sec_str;

            displayMinuts.innerHTML = min_str;
        }

        function countTime(){
            var qt = Date.now()-startTime;
            console.log(qt);
            showeTimeOnDisplay(qt);
        }

        function run(){
            var timer_sec, timePause;
            startTime = 0;
            timePause = false;
            if(!startTime){
                startTime = Date.now();
            }
            if(!timer_sec) {
                timer_sec = setInterval(countTime, 333);
                timePause = false;
                return "Pause";
            }else{
                clearInterval(timer_sec);
                timer_sec=0;
                timePause = true;
                return "Start";
            }
        }

        function clear(){
            if(timePause){
                startTime = 0;
                showeTimeOnDisplay(0);
                timePause = false;
                return "Start";
            }
        }
    };

    var btnStartStop = document.querySelector('#btnStartStop');
    var btnReset = document.querySelector('#btnReset');
    var timer_sec, timePause;
    startTime = 0;
    timePause = false;
    btnStartStop.addEventListener('click', function(){
        if(!startTime){
            startTime = Date.now();
        }
       if(!timer_sec) {
           btnStartStop.setAttribute('value', "Pause");
           timer_sec = setInterval(countTime, 333);
            timePause = false;
       }else{
           clearInterval(timer_sec);
           timer_sec=0;
           btnStartStop.setAttribute('value', "Start");
           timePause = true;
       }
    });



    btnReset.addEventListener('click', function(){
        if(timePause){
            startTime = 0;
            showeTimeOnDisplay(0);
            timePause = false;
            btnStartStop.setAttribute('value', "Start");
        }
    });
})();
