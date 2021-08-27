let horloge = 
{
    
    angleheures:0,
    angleminutes:0,
    anglesecondes:0,



    mouv:() =>

        {
            let now = new Date();

            let anglesecondes = now.getSeconds()*6;
            let angleminutes = now.getMinutes()*6;
            let angleheures = now.getHours()*30;
    
            document.getElementById("seconde").style = "transform: rotate("+anglesecondes+"deg)";
            document.getElementById("minute").style = "transform: rotate("+angleminutes+"deg)";
            document.getElementById("heure").style = "transform: rotate("+angleheures+"deg)";

            console.log(angleminutes);

            setTimeout('horloge.mouv()',1000);
        }  
 

}

