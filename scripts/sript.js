const popup = document.querySelector('.pop-up');
const btn = document.querySelector('.order__btn');
const send_btn =  document.querySelector('.pop-up__btn');
const popup_close =  document.querySelector('.pop-up__icon');

btn.addEventListener("click", function(){
   window.scrollTo(0, 0);
    popup.style.display = "flex";
    document.body.classList.toggle("_lock");
});

send_btn.addEventListener("submit", function(){
    popup.style.display = "none";
    document.body.classList.toggle("_lock");
});

popup_close.addEventListener("click", function(){
    popup.style.display = "none";
    document.body.classList.toggle("_lock");
});