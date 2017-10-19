
//when you click TASK at HOME PAGE this redirect you to /home/index/ID(TASK ID)
function GotoIndexAlert(id) {

 
    window.location.href = "http://localhost:55342/Home/Index/" + id;
    
   
};




let alert_btn_delete =
    document.getElementById("alert_btn_delete");

let alert_btn_back =
    document.getElementById("alert_btn_back");

let alert_btn_success =
    document.getElementById("alert_btn_success");

//back to home
alert_btn_back.onclick =  function(){
    window.location.href = "../../";
    console.log("cukna");
}

//succes button clicked
 function successClick(id){
    window.location.href = "../Success/" + id;
    
}




