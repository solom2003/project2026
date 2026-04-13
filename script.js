function validateForm(){

    var name=document.forms["contactForm"]["name"].value;
    var email=document.forms["contactForm"]["email"].value;
    var emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name==""){
        alert("يرجى إدخال الاسم");
        return false;
    }
    if(!emailPattern.test(email)){
        alert("يرجى إدخال بريد إلكتروني صحيح");
        return false;
    }
    alert("تم الإرسال بنجاح!");
    return false;
}

function changeBackgroundColor(){
    var colors=["#e91e63","#3f51b5","#9e9e9e","#4CAF50","#FF9800","#9C27B0"];
    var randomColor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.backgroundColor=randomColor;
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        var target=document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({behavior:'smooth'});
        }
    });
});

window.addEventListener('scroll', function() {
    var scrollBtn = document.getElementById("scroll-to-top");
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    }
});

var scrollBtnElement = document.getElementById("scroll-to-top");
if (scrollBtnElement) {
    scrollBtnElement.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
