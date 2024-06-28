const drop=document.getElementById("drop")
const menu=document.querySelector(".menubtn");
const close=document.getElementById("close");
const cards=document.querySelectorAll(".card");
const sentences=document.querySelectorAll(".sent");
const recards=document.querySelectorAll(".recard");
let n=cards.length;
for(let i=0;i<cards.length;i++){
   cards[i].classList.add("continuous");
}
var options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};
function recardsfxn(entries, observer){
   entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("slideup");
        }
        else{
         entry.target.classList.remove("slideup");
        }
    });
}
function incardsfxn(entries, observer){
   entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("centered");
        }
        else{
         entry.target.classList.remove("centered");
        }
    });
}
function aboutfxn(entries, observer){
   entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("lightup");
        }
        else{
         entry.target.classList.remove("lightup");
        }
    });
}
var observer1 = new IntersectionObserver(recardsfxn, options);
var observer2 = new IntersectionObserver(incardsfxn, options);
var observer3 = new IntersectionObserver(aboutfxn, options);
for(let i=0;i<recards.length;i++)
{
   observer1.observe(recards[i]);
}
for(let i=0;i<cards.length;i++)
   {
      observer2.observe(cards[i]);
}
for(let i=0;i<sentences.length;i++)
   {
      observer3.observe(sentences[i]);
}
window.addEventListener("scroll",function(){
   drop.style.right='700px';
   menu.style.display='block';
})
menu.addEventListener("click",function(){
   drop.style.right='-20px';
   menu.style.display='none'
})
close.addEventListener("click",function(){
      drop.style.right='700px';
      menu.style.display='block';
})
const date=new Date();
const copy=document.querySelector(".copy");
copy.innerHTML=`\u00A9 ${date.getFullYear()} All Rights Reserved</br> By Wissenaire`;
