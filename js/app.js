document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const formInput = document.querySelector('#new-item-form');
    formInput.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleFormSubmit = function (event) {
    event.preventDefault();

    const carList = document.querySelector('#dream-cars');
    const listCar = document.createElement('li');
    listCar.textContent = `${event.target.make.value} ${event.target.model.value} ${event.target.year.value} ${event.target.driven.value} ${event.target.owned.value}`;
    carList.appendChild(listCar);

    document.getElementById('new-item-form').reset();
}


// REMOVE METHOD
const handleDeleteAllClick = function (event) {
    const carList = document.querySelector('#dream-cars');
    carList.innerHTML = '';
}