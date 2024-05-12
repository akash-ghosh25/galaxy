const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const buttonGroups = document.querySelectorAll('.button-group');

buttonGroups.forEach(group => {
    const decrementButton = group.querySelector('.decrement');
    const incrementButton = group.querySelector('.increment');
    const countElement = group.querySelector('.count');

    let count = 1;

    decrementButton.addEventListener('click', () => {
        count--;
        updateCount();
    });

    incrementButton.addEventListener('click', () => {
        count++;
        updateCount();
    });

    function updateCount() {
        countElement.textContent = count;
    }
});