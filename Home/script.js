let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logoSpan = document.querySelectorAll('.PhillyMusicIsAmazing');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx+1) * 400 )
        })
    })
})