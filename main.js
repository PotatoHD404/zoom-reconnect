// const {app, BrowserWindow} = require('electron')
import {app, BrowserWindow} from 'electron'
import path from 'path'
// const path = require('path')
// const {ipcMain} = require('electron')
// import url from 'url';

function createMainWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'scripts/preload_main.js')
        }
    })

    win.loadFile('pages/index.html').then(() => {
    });
    // win.loadURL('');
}

// https://medium.com/@kahlil/how-to-communicate-between-two-electron-windows-166fdbcdc469

app.whenReady().then(() => {
    createMainWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    })
})

// https://www.youtube.com/watch?v=aEplopx9pj0

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
