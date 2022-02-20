document.getElementById("cleanLink").onblur=printedCleanLink;
document.getElementById("timeStr").onblur=printedTime;

function printedCleanLink(){
    const cleanLinkVal = document.getElementById("cleanLink").value;    
    if(cleanLinkVal==""){
        document.getElementById("resLink").innerHTML="Need link";
    }else{
        document.getElementById("resLink").innerHTML=cleanLinkVal;
    }
}

function printedTime(){
    const timeStr = document.getElementById("timeStr").value;
    const timeForLink=timeParts(timeStr);    
    const cleanLinkVal = document.getElementById("cleanLink").value; 
    if(timeForLink!=""){
        document.getElementById("resLink").innerHTML=cleanLinkVal+"&t="+timeForLink;
    }
}

function timeParts(timeStr) {
    let resTimeStr="";
    const parts=timeStr.trim().split(':');
    if(parts.length==2){
        //mm:ss
        resTimeStr=parts[0]+"m"+parts[1]+"s";
    }else  
    if(parts.length==3){
        //h:mm:ss
        const h=parts[0];
        const m=parts[1];
        const s=parts[2];
        resTimeStr=h+"h"+m+"m"+s+"s";
    }  
    return resTimeStr;  
}







