var arr = [];

function check(tag){  
    var a = tag.innerHTML, //содержимое тега
        btn = document.getElementById("button"),
        onError = function(text) { 
            btn.style.background = "#b9e0ed"; 
            this.arr = []; //очищаем массив
            var options = ["opt1","opt2","opt3","opt4"];
            options.forEach(function(element) {  
                document.getElementById(element).style.background = "white"; 
                document.getElementById(element).style.color = "#3a76a3"; 
              });
            document.getElementById("hint").hidden = false;
            // if(text){
            //     document.getElementById("hint").innerHTML = text;
            // }; 
            //недоделка, не успеваю :(
          };

    //проверка, есть ли в массиве то значение, которое передали в аргументе
    if(arr.indexOf(a) != -1 ){
        arr.splice(arr.indexOf(a), 1);
        tag.style.background = "white";
        tag.style.color = "#3a76a3";
    } else { 
        arr.push(a);
        if(a == "5 + x = 11" || a == "x + 5 = 11")
        { 
            tag.style.background = "#3a76a3";
            tag.style.color = "white";
        } else{ 
            tag.style.background = "#f05a69";
            tag.style.color = "white"; 
        };
    };
    //окрашивание кнопки
    if(arr.indexOf("16 - x = 12") != -1 || arr.indexOf("x - 16 = 12") != -1 ) {
        btn.style.background = "#f05a69";
        setTimeout(onError, 1000);
    } else if(arr.length == 0){ 
        btn.style.background = "#b9e0ed";
        btn.disabled = true;
    } else {
        btn.style.background = "#8fbe83";
        btn.disabled = false;   
        // if(arr.length != 2) {
        //     setTimeout(onError("Это не все правильные ответы"), 1000);
        // };
    };
};
