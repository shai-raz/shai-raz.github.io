const txt = ['Web Developer.', 'Programmer.']

let countingUp = true
let count = 0
let txtId = 0
let typingSpeed = 100

const foo = () => {
    if (count > txt[txtId].length) {
        countingUp = false
        count -= 2
        setTimeout(foo, typingSpeed*10)
        return
    } else if (count < 0) {
        countingUp = true
        count += 2
        txtId = (txtId + 1) % txt.length
        setTimeout(foo, typingSpeed*5)
        return
    }
    typeWriterDiv = document.getElementById('type-writer')
    typeWriterDiv.innerHTML = txt[txtId].slice(0, count)
    count += countingUp ? 1 : -1
    setTimeout(foo, typingSpeed)
}

setTimeout(foo, typingSpeed)