document.getElementById("cleanLink").onblur=printedCleanLink;

function printedCleanLink(){
    let cleanLinkVal = document.getElementById("cleanLink").value;
    // alert(cleanLinkVal);
    if(cleanLinkVal==""){
        document.getElementById("resLink").innerHTML="Need link";
    }else{
        document.getElementById("resLink").innerHTML=cleanLinkVal;
    }    
}


