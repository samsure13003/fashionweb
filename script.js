const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if(bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active1');
    })
}
if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active1');
    })
}
const mainImg = document.getElementById('Mainimg');
const smallImg = document.querySelectorAll('.small-img-col');

smallImg.forEach(img => {
    img.addEventListener('click', () => {
        mainImg.src = img.querySelector('img').src;
    });
});