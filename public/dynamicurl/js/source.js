var bc = new BroadcastChannel('livesahb-dynamicurl');
const iframe = document.querySelector("#content")

bc.onmessage = function (ev) {

    console.log(ev);

    iframe.setAttribute("src", ev.data);
    
}