const MIN_FRONT_ANIMATION_TIME = 10
const MAX_FRONT_ANIMATION_TIME = 20
const MIN_BACK_ANIMATION_TIME = 30
const MAX_BACK_ANIMATION_TIME = 40

const emptyStarContainers = () => {
    let frontStarsContainer = document.getElementById('front-stars-container')
    let backStarsContainer = document.getElementById('back-stars-container')

    frontStarsContainer.innerHTML = ''
    backStarsContainer.innerHTML = ''
}

const createStars = (numOfFrontStars, numOfBackStars) => {
    let frontStarsDiv = document.getElementById('front-stars-container')

    for (i = 0; i < numOfFrontStars; i++) {
        let left = Math.floor(Math.random() * 100)
        let top = Math.floor(Math.random() * 100)

        let animDuration = getRandBetween(MIN_FRONT_ANIMATION_TIME, MAX_FRONT_ANIMATION_TIME)

        let star = document.createElement('div')
        star.className = 'star front-star'
        star.style.left = left + '%'
        star.style.top = top + '%'
        star.style.animation = 'front-star ' + animDuration + 's infinite linear'
        frontStarsDiv.appendChild(star)
    }

    let backStarsDiv = document.getElementById('back-stars-container')

    for (i = 0; i < numOfBackStars; i++) {
        let left = Math.floor(Math.random() * 100)
        let top = Math.floor(Math.random() * 100)

        let animDuration = getRandBetween(MIN_BACK_ANIMATION_TIME, MAX_BACK_ANIMATION_TIME)

        let star = document.createElement('div')
        star.className = 'star back-star'
        star.style.left = left + '%'
        star.style.top = top + '%'
        star.style.animation = 'back-star ' + animDuration + 's infinite linear'
        backStarsDiv.appendChild(star)
    }
}

let minWindowDim = Math.min(window.innerWidth, window.innerHeight)

const makeTheSkyShine = () => {
    let numOfFrontStars = Math.floor(minWindowDim / 5)
    let numOfBackStars = Math.floor(minWindowDim / 5)

    emptyStarContainers()
    createStars(numOfFrontStars, numOfBackStars)
}

makeTheSkyShine()

window.onresize = () => {
    console.log(window.innerHeight)
    newMinWindowDim = Math.min(window.innerWidth, window.innerHeight)

    // avoid unnecessary re-rendering on mobile while scrolling (and url bar becomes in/visible)
    if (newMinWindowDim != minWindowDim) {
        minWindowDim = newMinWindowDim
        makeTheSkyShine()
    }
}