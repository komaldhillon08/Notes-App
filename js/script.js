console.log("komal");

let notesContainer = document.querySelector(".notes-container");
let createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


createbtn.addEventListener('click', function () {
    let inputBox = document.createElement('p');
    let img = document.createElement("img");
    inputBox.classList = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./assets/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})



notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();

            }
        })
    }
})


function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes()