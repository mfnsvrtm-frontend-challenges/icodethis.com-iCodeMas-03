const closeButton = document.querySelector('.close');
const card = document.querySelector('.card');
closeButton.onclick = () => {
    card.classList.add('closing');
    setTimeout(() => {
        card.classList.add('hidden');
    }, 1000)
    setTimeout(() => {
        card.classList.remove('hidden');
    }, 2000)
    setTimeout(() => {
        card.classList.remove('closing');
    }, 2100)
}