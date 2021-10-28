const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
    win.loadURL('https://github.com');
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
            // win.open('https://github.com', '_blank', 'top=500,left=200,frame=false,nodeIntegration=no');
        }
    })
})

// https://www.youtube.com/watch?v=aEplopx9pj0

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})