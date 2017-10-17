let Tittle =
    document.getElementById("Tittle");

let Tittle_showed =
    document.getElementById("Tittle_showed");

let Counter = 1;

Tittle.onkeypress = function (e) {

    

    var keynum;

    if (window.event) { // IE                    
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                   
        keynum = e.which;
    }
    //String.fromCharCode(keynum)
    if (Counter == 1) {
        Tittle_showed.textContent = String.fromCharCode(keynum);
    } else {

        Tittle_showed.textContent += String.fromCharCode(keynum);
    }

    Tittle.onkeydown = function (event) {

        let keyCode = event.keyCode;
        let textLenght = Tittle_showed.textContent.textLenght;

        if (keyCode == 8) {

            Tittle_showed.textContent =  Tittle_showed.textContent.slice(0, -1);
            
            console.log("escape");
        }

        
        
    }
    

    Counter++;
}


let Comment =
    document.getElementById("Comment");

let Comment_Showed =
    document.getElementById("Comment_showed");



let counter = 1;
Comment.onkeypress = function (e) {
     
    var keynum;

    if (window.event) { // IE                    
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                   
        keynum = e.which;
    }
    //String.fromCharCode(keynum)
    if (counter == 1) {
        Comment_showed.textContent = String.fromCharCode(keynum);
    } else {

        Comment_showed.textContent += String.fromCharCode(keynum);
    }

    Comment.onkeydown = function (event) {

        let keyCode = event.keyCode;
        let textLenght = Comment_showed.textContent.textLenght;

        if (keyCode == 8) {

            Comment_showed.textContent =  Comment_showed.textContent.slice(0, -1);
            
            console.log("escape");
        }

        
        
    }
    

    counter++;
}