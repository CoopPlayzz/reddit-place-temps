// ==UserScript==
// @name         r/place template
// @namespace    https://github.com/CoopPlayzz/reddit-place-temps/
// @namespace    https://github.com/burritosoftware/burritosoftware.github.io/
// @version      2.1
// @description  try to take over the canvas! og: for beatsaber logo | NOTE: This is modified by coop
// @author       oralekin, LittleEndu, CoopPlayzz
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
// options
var url = ""// leave empty if using github
const github = true
const githubUser = "CoopPlayzz"// github user
const githubRepo = "reddit-place-temps" // the repo the user owns
const githubBranch = "temps"// the branch that the repo is in
const githubFileDest = "bsmg.png"//the file or file destenation
//code
if(github = true) {url = "https://raw.githubusercontent.com/" + githubUser + "/" + githubRepo + "/" + githubBranch + "/" + githubFileDest;}
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = url;
                i.onload = () => {
                    if (i.width === i.height) {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
                    } else {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
                    }
                };
                return i;
            })())
    }, false);
}

