import path from 'path'
import { BrowserWindow, app } from 'electron'

let win

const createWindow = () => {
    win = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1200,
        height: 800
    })

    // process.env.VITE_DEV_SERVER_URL 读取 vue 启动url
    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
        win.loadFile('dist/index.html');
    }
}

app.whenReady().then(createWindow)
