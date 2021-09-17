const addBtn = document.querySelector("#add-btn");
const closeBtn = document.querySelector("#close-modal");
const editModal = document.querySelector("#modal-edit")

const titles = document.querySelector("#titles-list");

addBtn.addEventListener('click', () => {
    editModal.classList.remove("hidden")
    editModal.classList.add("block");
})

closeBtn.addEventListener('click', () => {
    editModal.classList.add("hidden")
    editModal.classList.remove("block");
})

refreshTitles()



function refreshTitles() {
    titles.innerHTML = "";
    data = getTitles()
    console.log(data);
    data["titles"].forEach(element => {
        titles.appendChild(makeItem(element))
    });
}

function makeItem(data) {
    
    container = document.createElement("div")
    container.className = "flex w-full items-center"

    button = document.createElement("button")
    button.className = "launch-title btn w-full"
    button.setAttribute("data", data)
    button.innerHTML = data["name"]

    edit = document.createElement("button")
    edit.className = "edit-title bg-red p-5"
    edit.setAttribute("data", data)
    edit.innerHTML = "./"

    container.appendChild(button)
    container.appendChild(button)

    return container
}