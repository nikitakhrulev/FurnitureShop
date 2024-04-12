const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');
document.addEventListener('click', closeHint)

infoBtns.forEach(el => el.addEventListener('click', toggleHint))

// переключатель при нажатии на кнопку, благодаря stopPropagation тултипы открываются при клике на кнопку
function toggleHint(evt) {
    evt.stopPropagation();
    this.parentNode.querySelector('.info-hint').classList.toggle('hidden')
}
// по клику в любой части документа закрываем открытые тултипы
function closeHint() {
    infoHints.forEach(el => el.classList.add('hidden'));
}

// убираем закрытие тултипа при выборе цвета
infoHints.forEach(el => el.addEventListener('click', function(evt) {
    evt.stopPropagation();
}))