//variable declaration

var slider_content=document.getElementById("box");

//image array
var images=["a","b","c","d","e"]

var i=images.length;
//function for next slide

function nextImage(){
    

if(i<images.length){
    i=i+1;
}else{
    i=1;
}
   slider_content.innerHTML="<img src=" +images[i-1] +".jpg>";
}

//function for prev image
function prevImage(){
   

    if(i<images.length+1 && i>1){
        i=i-1
    }else{
        i=images.length;
    }
    slider_content.innerHTML="<img src=" +images[i-1] +".jpg>";
}