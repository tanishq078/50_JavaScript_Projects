const element = document.querySelectorAll("span");

element.forEach((item)=>{
    item.addEventListener('click', ()=> {
        item.classList.toggle("active");
    })
})