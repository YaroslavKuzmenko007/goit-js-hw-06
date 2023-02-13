let counterValue = 0

const counter = document.querySelector('#value')
const buttonSub = document.querySelector('button[data-action="decrement"]')
const buttonAdd = document.querySelector('button[data-action="increment"]')

buttonSub.addEventListener('click', () => {
	counterValue--
	counter.textContent = counterValue
})

buttonAdd.addEventListener('click', () => {
	counterValue++
	counter.textContent = counterValue
})