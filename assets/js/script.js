/* img shine */
/*let img = document.getElementsByClassName('main-img')[0]
let imgShine = document.getElementsByClassName('main-img-shine')[0]

let animationComeplete = false
const animationDelay = 0.8 * 1000
setTimeout(() => animationComplete = true, animationDelay)

window.addEventListener('mousemove', (e) => {
    if (!animationComplete) {
        return
    }
    
    let clientX = e.clientX
    let pos = clientX - img.offsetLeft
    console.log(pos, img.offsetWidth)

    // if mouse is inside img's x range
    if (pos > 0 && pos < img.offsetWidth) {
        imgShine.style.left = pos + 'px'
    } else if (pos < 0) {
        imgShine.style.left = '0'
    } else if (pos > img.offsetWidth) {
        console.log("bigger")
        imgShine.style.left = img.offsetWidth - (imgShine.offsetWidth*0.7) + 'px'
    }
})*/

/*const ricosUrl = 'https://github.com/shai-raz/ricos'
const ricosDiv = document.getElementById("project-ricos")
ricosDiv.addEventListener('click', () => {
    window.open(ricosUrl, '_blank')
})*/