const theme = 'theme';

const modalOpen = '[data-open]'
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

// Full site modal "Open Buttons"
for(const elm of openModal) {
    elm.addEventListener('click', function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    })
}
// Full site modal "Close Buttons"
for (const elm of closeModal) {
    elm.addEventListener('click', function() {
        this.parentElement.parentElement.classList.remove(isVisible);
    } )
}

