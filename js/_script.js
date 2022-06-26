const button = document.getElementById(`button`)
const user = document.getElementById(`user`)
const computer = document.getElementById(`computer`)
const result = document.getElementById(`result`)


button.addEventListener(`click`, function () {

    const min = parseInt(1)

    const max = parseInt(6)


    let randomUser = Math.floor(Math.random() * (max + 1 - min)) + min
    user.innerText = randomUser

    let randomComputer = Math.floor(Math.random() * (max + 1 - min)) + min
    computer.innerText = randomComputer

    if (randomUser < randomComputer) {
        result.innerText = `hai perso`
    } else if (randomUser === randomComputer) {
        result.innerText = `hai pareggiato`
    } else {
        result.innerText = `hai vinto`
    }
})