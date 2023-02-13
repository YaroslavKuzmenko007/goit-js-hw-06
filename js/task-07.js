const inputChange = document.getElementById('font-size-control')
const abracadabra = document.getElementById('text')

inputChange.addEventListener('change', event => {
    abracadabra.style.fontSize = `${event.target.value }px`
})