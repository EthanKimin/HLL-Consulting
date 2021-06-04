function checkWindow() {
    if(window.innerWidth>900){
        document.querySelector('.navmenu').style.display='flex';
    }else if(document.querySelector('.navtoggle').mode==='navopen'){
        document.querySelector('.navmenu').style.display='flex';
    }else{
        document.querySelector('.navmenu').style.display='none';
    }
};
window.onresize = checkWindow;
            
function navOpenClose(self){
    if(self.mode==='navopen'){
        document.querySelector('.navmenu').style.display='none';
        document.querySelector('.icon-cancel').className = 'icon-menu';
        self.mode = 'navclose';
    }else{
        document.querySelector('.navmenu').style.display='flex';
        document.querySelector('.icon-menu').className = 'icon-cancel';
        self.mode = 'navopen'
    }
}

function scrollChange() {
    if(pageYOffset<5){
        document.querySelector("#navbar").style.boxShadow ='none'
    }else{
        document.querySelector("#navbar").style.boxShadow ='0 2px 5px rgba(0, 0, 0, 0.25)'
    }
}
window.onscroll = scrollChange;
