const interests = document.querySelectorAll('label .interest__check');

for(let interest of interests) {
    interest.addEventListener('click', (event) => {
        const parent = interest.closest('li');
        const checkFood = parent.childNodes[3].childNodes[1].childNodes[1].childNodes[1];
        const checkPets = parent.childNodes[3].childNodes[3].childNodes[1].childNodes[1];
        checkFood.checked = interest.checked;
        checkPets.checked = interest.checked;
    });
}