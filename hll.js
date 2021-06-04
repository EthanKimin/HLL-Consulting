function checkWindow() {
    if(window.innerWidth>1000){
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

function langMenuOpen(){
    if(document.querySelector("#lang-menu ul").style.display === "block"){
        document.querySelector("#lang-menu ul").style.display = "none";
    }else{
        document.querySelector("#lang-menu ul").style.display = "block";
    }
}

function scrollChange() {
    document.querySelector('#lang-menu ul').style.display='none';
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.querySelector("#navbar").style.boxShadow ='0 2px 5px rgba(0, 0, 0, 0.25)';
        document.getElementById("myBtn").style.display ="block";
    }else{
        document.querySelector("#navbar").style.boxShadow ='none';
        document.getElementById("myBtn").style.display = "none"
    }
}

window.onscroll = scrollChange;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}