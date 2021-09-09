var bc = new BroadcastChannel('livesahb-dynamicurl');

const pasteBtn = document.querySelector("#from-copyboard")

pasteBtn.addEventListener('click', () => {
    navigator.clipboard.readText()
    .then(text => {
        console.log('Pasted content: ', text);

        bc.postMessage(text);

    })
    .catch(err => {
        pasteBtn.innerHTML = "Impossible de coller !"
        console.error('Failed to read clipboard contents: ', err);
    });
});