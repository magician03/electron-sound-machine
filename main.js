'use strict';

var electron = require('electron'); // new API in 1.0
var app = electron.app;
var BrowserWindow = electron.BrowserWindow; // for generating window
var ipcMain = electron.ipcMain;
var globalShortcut = electron.globalShortcut;


var mainWindow = null ;

app.on('ready', function() {
    //generating mainwindow from BrowserWindow
    mainWindow = new BrowserWindow( {
        frame: false,
        height: 700,
        resizable: true,
        width: 1000
    });

    mainWindow.loadURL('file://'+ __dirname + '/app/index.html'); //loading the contents of mainWindow from given loc

    globalShortcut.register('CmdOrCtrl+A', function() {
        mainWindow.webContents.send('global-shortcut', 0);
    });

    globalShortcut.register('CmdOrCtrl+S', function() {
        mainWindow.webContents.send('global-shortcut', 1);
    });

})

ipcMain.on('close-main-window', function() {
    app.quit();
});
