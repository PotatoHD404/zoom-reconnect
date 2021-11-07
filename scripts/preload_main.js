import {BrowserWindow} from "electron";
import path from "path";

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

function createZoomWindow(link) {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'scripts/preload_zoom.js')
        }
    })
    // win.loadFile('pages/index.html')
    win.loadURL('').then(() => {
    });
}
