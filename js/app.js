function whoose() {
   

    let box = document.querySelector(".box-cover")
    box.classList.add("huv")
    box.style.cursor = "default"
    let all = document.querySelector(".all")
    setTimeout(() => {
        all.removeChild(box)
    }, 3000);


}