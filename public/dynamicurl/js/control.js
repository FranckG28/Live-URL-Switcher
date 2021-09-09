var bc = new BroadcastChannel('livesahb-dynamicurl');

const urlLabel = document.querySelector("#actual-page")

const addBtn = document.querySelector("#addBtn")

const urlList = document.querySelector("#URL-list")

const inputName = document.querySelector("#name")
const inputURL = document.querySelector("#url")
        // actualPage.innerHTML = text
        // bc.postMessage(text);


let data = [];
refreshTemplates()




function send_page() {
    url = $(this).attr("url")
    console.log("Lancement de "+ url)
    bc.postMessage(url)
    urlLabel.innerHTML = url
}

function delete_page() {

    id= $(this).attr("id")
    
}


addBtn.addEventListener('click', () => {

    urlName = inputName.value
    url = inputURL.value

    if (urlName && url) {
        inputName.value = ""
        inputURL.value = ""

        addTemplate(urlName, url)
    }

})

function addTemplate(name, url) {
    item = {}
    item["name"]=name
    item["url"]=url
    data.push(item)
    refreshTemplates();
}

function refreshTemplates() {
    urlList.innerHTML = ""
    data.forEach(element => {
        makeTemplate(element["name"], element["url"]);
    })
}

function makeTemplate(urlName, url) {
    container = document.createElement("div")
    container.className = "flex w-full items-center"
    container.id = "container_"+urlName

    button = document.createElement("button")
    button.className = "btn w-full"
    button.innerHTML = urlName
    button.setAttribute("url", url)
    button.onclick = send_page;

    delBtn = document.createElement("button")
    delBtn.className = "rounded border p-1 ml-2 w-9 hover:bg-white hover:text-red-500"
    delBtn.innerHTML = "X"
    delBtn.setAttribute("id", urlName)
    delBtn.onclick = delete_page;

    container.appendChild(button)
    container.appendChild(delBtn)

    urlList.appendChild(container)

    console.log(urlName + " ajouté ")
}