"use strict";
const electron = require("electron");
let win;
const createWindow = () => {
  win = new electron.BrowserWindow({
    autoHideMenuBar: true,
    width: 1200,
    height: 800,
    icon: "src/assets/logo.ico"
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile("dist/index.html");
  }
};
electron.app.whenReady().then(createWindow);
