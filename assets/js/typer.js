const txt = ['Programmer.', 'Web Developer.', 'Gamer.']
const typingSpeed = 100
const deletingSpeed = 75
const delayAfterDoneTyping = typingSpeed * 10
const delayAfterDoneDeleting = typingSpeed * 5

let countingUp = true
let count = 0
let txtId = 0

let typeWriterDiv = document.getElementById('type-writer')

const foo = () => {
    if (count > txt[txtId].length) {
        countingUp = false
        count -= 2
        setTimeout(foo, delayAfterDoneTyping)
        return
    } else if (count < 0) {
        countingUp = true
        count += 2
        txtId = (txtId + 1) % txt.length
        setTimeout(foo, delayAfterDoneDeleting)
        return
    }
    
    typeWriterDiv.innerHTML = txt[txtId].slice(0, count)
    count += countingUp ? 1 : -1

    setTimeout(foo, countingUp ? typingSpeed : deletingSpeed)
}

setTimeout(foo, typingSpeed)