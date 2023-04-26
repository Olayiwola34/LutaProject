
//account dropdown
const dropdownBtn=document.getElementById("btn2");
const dropdownMenu=document.getElementById("dropdown");

const toggledropdownMenu=function(){
    dropdownMenu.classList.toggle("show");
}

dropdownBtn.addEventListener("click",function (e){
    e.stopPropagation();
    toggledropdownMenu();
})
document.documentElement.addEventListener("click",function(){
    if(dropdownMenu.classList.contains("show")){
        toggledropdownMenu();
    }
})

//contact dropdown

const detail=document.getElementsById("contact-details");
const dropdownInfo=document.getElementById("dropdown1");

const toggledropdownInfo=function(){
    dropdownInfo.classList.toggle("show1");
}

detail.addEventListener("click",function (e){
    e.stopPropagation();
    toggledropdownInfo();
})
document.documentElement.addEventListener("click",function(){
    if(dropdown1.classList.contains("show1")){
        toggledropdownInfo();
    }
})