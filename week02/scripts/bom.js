let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let unorderedList = document.querySelector('#list');
//console.log(unorderedList.innerHTML);

let listElement = document.createElement('li');
let deleteButton = document.createElement('button');
//console.log(input.value);


button.addEventListener('click', function() {
/*     console.log('Submit button clicked.');
    if (input && input.value) {
        console.log (input.value);
    }
    else {
        console.log("no input entered");
    } */
    
    if (input.value.trim() !== '') {
        let listElement = document.createElement('li');
        listElement.textContent = input.value;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        listElement.appendChild(deleteButton);
        unorderedList.appendChild(listElement);




        deleteButton.addEventListener('click', function () {
            unorderedList.removeChild(listElement);
            input.focus();
        });

        input.focus();
        input.value = "";
    }
    else {
        input.focus();
    }


});



//deleteButton.addEventListener('click', deleteScripture());

/*function addScripture() {
    if (input.value.trim != "") {
        listElement.textContent = input.value;
        deleteButton.textContent = '❌';

        listElement.append(deleteButton);

        unorderedList.append(listElement);

        input.focus();
        input.value = "";
    }
}

function deleteScripture() {
    unorderedList.removeChild(listElement);
    input.focus();
    input.value = "";
}*/

