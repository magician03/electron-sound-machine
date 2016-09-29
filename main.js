'use strict';

var electron = require('electron'); // new API in 1.0
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;


var mainWindow = null ;

app.on('ready', function() {
    mainWindow = new BrowserWindow( {
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://'+ __dirname + '/app/index.html');
})
