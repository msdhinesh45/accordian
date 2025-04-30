const accordian = document.querySelectorAll(".accordian");
accordian.forEach((accordian)=>{
    accordian.addEventListener("click",()=>{
        accordian.classList.toggle("active");
    })
})