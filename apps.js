const menuBtn = document.getElementById('menu')
const closeBtn = document.getElementById('close')
const pullMenu = document.querySelector('.pullup')

// menuBtn.addEventListener('click', () => {
//     if(pullMenu.style.display = "none") {
//         pullMenu.style.display = "block"
//     }
// })

// closeBtn.addEventListener('click', () => {
//     if(pullMenu.style.display = "block") {
//         pullMenu.style.display = "none"
//     }
// })

menuBtn.addEventListener('click', () => {
    pullMenu.style.right = 0;
})

closeBtn.addEventListener('click', () => {
pullMenu.style.right = '-100%';
})