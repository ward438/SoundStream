const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // nodeIntegration: true
            preload: path.join(__dirname, 'preload.js')
        }
    })
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../public/index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', function () {
        
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createWindow()
//     }
// })
