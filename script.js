function grade(){
   if(demo.value >= 70 && demo.value <=100){
    showup.innerHTML = "A excellent";
    }
    else(showup.innerHTML = "fail");
}


let form1 = document.getElementById('form1');
form1.addEventListener("submit" , function (e){
    e.preventDefault();
    if (score.value >= 70 && score.value <= 100){
        result.innerHTML = "A excellent";
    }else
    if (score.value >= 60  && score.value <= 69){
        result.innerHTML = "B very good";
    }
    if (score.value >= 50  && score.value <= 59){
        result.innerHTML = "C average";
    }
    if (score.value >= 40  && score.value <= 49){
        result.innerHTML = "D poor";
    }
    if (score.value >= 30  && score.value <= 39){
        result.innerHTML = "E bad";
    }
    if (score.value <= 29  && score.value <= 1){
        result.innerHTML = "F fail";
    }
})