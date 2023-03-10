document.addEventListener('DOMContentLoaded', function (e) {
    console.log('все теги сработали')
});

window.addEventListener('load', function (e) {
    console.log('страница сработала')
});

document.addEventListener('click', e => {
    const superClass = e.target.classList.contains('super_element')
        ? 'присутствует' : 'отсутствует';
    console.log(`Класс "super_element" ${superClass} в элементе "${e.target.tagName.toLowerCase()}".`);
});

const text = document.querySelector('textarea');
text.addEventListener('mouseover', e => {
    console.log("Вы кликнули на textarea.")
});

const click = document.querySelector('ul');
click.addEventListener('click', e => {
    if (e.target.tagName !== "BUTTON") {
        return;
    }
    console.log(e.target.textContent);
});

const styleEl = document.querySelectorAll('li:nth-child(even)')
styleEl.forEach(element => {
    element.style.background = 'gold';
});