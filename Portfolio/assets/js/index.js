var bars = document.querySelector(".fa-bars")
var mobileMenu = document.querySelector(".mobile")
var up=document.querySelector(".up")
var show=false
var upShow=false
bars.onclick=function(){
    if(show==false){
        mobileMenu.style.transform='translateY(20%)'
        show=true
        bars.setAttribute("class","fa-solid fa-x")

    }
    else{
        mobileMenu.style.transform='translateY(-300%)'
        show=false
        bars.setAttribute("class","fa-solid fa-bars")

    }


    
}

window.onscroll=function(){
    if(window.scrollY>=533.5999755859375){
        up.style.transform="translateX(-20px)"
        upShow=true
        

    }
    else{
        upShow=false
        up.style.transform="translateX(100px)"
    }

}