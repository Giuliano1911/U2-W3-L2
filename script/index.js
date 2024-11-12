// Esercizio 1

class User {
  constructor(firstName) {
    this.firstName = firstName
  }
}

const key = 'name'

const nameInput = document.getElementById('name')
const form = document.querySelector('form')
const p = document.getElementById('localHostName')

p.innerText = JSON.parse(localStorage.getItem(key))?.firstName || ''

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const user = new User(nameInput.value)
  localStorage.setItem(key, JSON.stringify(user))
  p.innerHTML = `${user.firstName}`
  form.reset()
})

const removeButton = document.getElementById('remove')
removeButton.addEventListener('click', function () {
  localStorage.removeItem(key)
  p.innerText = ''
})

// Esercizio 2

const timeP = document.getElementById('time')

const key2 = 'actualTime'

let timer = Number(sessionStorage.getItem(key2))

const save = () => {
  timeP.innerText = Number(sessionStorage.getItem(key2))
  timer++
  sessionStorage.setItem(key2, timer)
}

save()
setInterval(save, 1000)
