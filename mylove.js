var TOTAL_SCORE = 0;


function check(ans){
    var a = document.getElementById("ModalQ1").value;
    var b = document.getElementsByClassName("text_Q10").value;
    
    if(a !== ans){
        alert("sai rồi, thử lại nào !");
    }else{
        alert("Mũm đã có thêm 10 điểm !");
        TOTAL_SCORE += 10;
    }
    if(b !== ans){
        alert("sai rồi, thử lại nào !");
    }else{
        alert("Mũm đã có thêm 10 điểm !");
        TOTAL_SCORE += 10;
    }
}
