let icon  = document.querySelector("i");

icon.addEventListener("click",() => {
    let nav = document.querySelector("nav").style.right = "1%"; 
})

icon.addEventListener("dblclick",() => {
    let nav = document.querySelector("nav").style.right = "-12%"; 
})