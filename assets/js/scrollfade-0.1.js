/* based on ScrollFade.js by meddlenz */

let fadeElements = document.getElementsByClassName('scrollFade')
let fadedElements = [] // to make sure fading happens once per element

function scrollFade() {
	// if all elements have already been faded, dont do anything
	if (fadedElements.length === fadeElements.length)
		return

	for (let i = 0; i < fadeElements.length; i++) {
		let element = fadeElements[i]
		if (fadedElements.includes(element))
			continue
		
		let rect = element.getBoundingClientRect()

		let elementFourth = rect.height / 4
		let fadeInPoint = window.innerHeight - elementFourth

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible')
			element.classList.add('scrollFade--animate')
			element.classList.remove('scrollFade--hidden')
			fadedElements.push(element)
		} else {
			element.classList.remove('scrollFade--visible')
			element.classList.add('scrollFade--hidden')
		}
	}
}

document.addEventListener('scroll', scrollFade)
window.addEventListener('resize', scrollFade)
document.addEventListener('DOMContentLoaded', function () {
	scrollFade()
})