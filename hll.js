var w = window.innerWidth;
function checkWindow() {
    if(window.innerWidth>1020){
        document.querySelector('.thema').style.display='flex';
    }else if(document.querySelector('input').mode==='navopen'){
        document.querySelector('.thema').style.display='flex';
    }else{
        document.querySelector('.thema').style.display='none';
    }
};
window.onresize = checkWindow;
            
function navOpenClose(self){
    if(self.mode==='navopen'){
        document.querySelector('.thema').style.display='flex';
    }else{
        document.querySelector('.thema').style.display='none';
    }
}

var y = pageYOffset;
function scrollChange() {
    if(pageYOffset<5){
        document.querySelector(".introduce").style.boxShadow ='none'
    }else{
        document.querySelector(".introduce").style.boxShadow ='0 2px 5px rgba(0, 0, 0, 0.25)'
    }
}
window.onscroll = scrollChange;