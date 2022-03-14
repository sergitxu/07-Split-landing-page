const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('container--hover-left');
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('container--hover-left');
});
right.addEventListener('mouseenter', () => {
    container.classList.add('container--hover-right');
});
right.addEventListener('mouseleave', () => {
    container.classList.remove('container--hover-right');
});

