/*const isScrolledIntoView = (elem) => {
    var docViewTop = $(window).scrollTop()
    var docViewBottom = docViewTop + $(window).height()

    var elemTop = $(elem).offset().top
    var elemBottom = elemTop + $(elem).height()

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))
}

rightContainerDiv = document.getElementById('right-container')

window.onscroll = (e) => {
    isScrolledIntoView(rightContainerDiv)
    // scroll to div
    $('html, body').animate({
        scrollTop: $(".right-container").offset().top
    }, 1000);
} */
/*var lastScrollTop = 0
window.addEventListener('scroll', function () {
    var st = window.pageYOffset || document.documentElement.scrollTop
    if (st > lastScrollTop) {
        // downscroll code
        console.log('down')
        var element = document.querySelector('.right-container');
        var position = element.getBoundingClientRect()

        // checking whether fully visible
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            console.log('Element is fully visible in screen')
        }

        // checking for partial visibility
        if (position.top < window.innerHeight && position.bottom >= 0) {
            // scroll to div
            console.log('Element is partially visible in screen')
            element.scrollIntoView()
        }
    } else {
        // upscroll code
        console.log('up')
    }
    lastScrollTop = st <= 0 ? 0 : st
})*/