let input = document.querySelector('#favchap');
let button = document.querySelector('button');
let unorderedList = document.querySelector('#list');

let chaptersArray = getChaptersList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

let listElement = document.createElement('li');
let deleteButton = document.createElement('button');


button.addEventListener('click', function() {
    /* check if the input is empty, if not, then
call displayList with the input.value argument,
push the input.value into the chaptersArray,
update the localStorage with the new array by calling a function named setChapterList,
set the input.value to nothing, and
set the focus back to the input. */

    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        
        input.focus();
        input.value = "";
    }
    else {
        input.focus();
    }
});

function displayList(entry){
    let listElement = document.createElement('li');
        listElement.textContent = entry;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        listElement.appendChild(deleteButton);
        unorderedList.appendChild(listElement);

        deleteButton.addEventListener('click', function () {
            unorderedList.removeChild(listElement);
            deleteChapter(listElement.textContent);
            input.focus();
        });
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length-1);
    chaptersArray = chaptersArray.filter(checkChapter => checkChapter !== chapter);
    setChapterList();
}

function getChaptersList() {
    return JSON.parse(localStorage.getItem("BOMchaptersList"));
}

function setChapterList(){
    localStorage.setItem("BOMchaptersList", JSON.stringify(chaptersArray));
}