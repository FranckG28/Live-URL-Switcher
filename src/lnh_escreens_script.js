// ==UserScript==
// @name        New script - lnh.fr
// @namespace   Violentmonkey Scripts
// @match       https://www.lnh.fr/membre/escreens/accueil
// @grant       none
// @version     1.0
// @author      -
// @description 17/09/2021, 22:40:27 Auto copy escreens links to copyboard when clicking on a button on LNH website.
// ==/UserScript==

let links = document.querySelectorAll(".link")

links.forEach(element => {
    element.addEventListener('click', ev => {
        ev.preventDefault();
        let url = ev.target.href;
        console.log(url);
        copy(url);
    })
})


function copy(url) {
    navigator.clipboard.writeText(url).then(function() {
        /* clipboard successfully set */
        console.log("Copié !");
      }, function() {
        /* clipboard write failed */
        console.error("Impossible de copier !")
      });
}
