// IEFE
(() => {
    // State variables
    let toDoListArray = [];
    // ui variables
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");
})

// event listeners
form.addEventListener('submit', e => {
    // prevent default behaviour - Page reload
    e.preventDefault(); //// Prevents the form from submitting

    // give item a unique ID
    let itemId = String(Date.now());

    // get/assign input value
    let toDoItem = input.value ;

})

