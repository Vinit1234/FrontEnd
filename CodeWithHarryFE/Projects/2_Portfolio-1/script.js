document.querySelector(".ham").style.display="none";
// transform: translate(-300px, 0px);

// document.querySelector(".sidebar").style.transform.translate
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle("sidebar-hide");
    if(document.querySelector('.sidebar').classList.contains("sidebar-hide")){
        document.querySelector(".cross").style.display="none";
        setTimeout(() => {
            document.querySelector(".ham").style.display="inline";
        }, 350);
    }else{
        document.querySelector(".ham").style.display="none";
        setTimeout(() => {
            document.querySelector(".cross").style.display="inline";
            
        }, 350);
    }
});

