// Add your index.js code in this file
'use strict';

var ipcRenderer = require('electron').ipcRenderer;
var soundButtons = document.querySelectorAll(".button-sound");

var closeWindow = document.querySelector('.close');


//window close ipc sending to main
closeWindow.addEventListener('click', function() {
    ipcRenderer.send('close-main-window');
});


// receiving and initiating keyboard shortcuts
ipcRenderer.on('global-shortcut', function(event, arg) {
    var eventClick = new MouseEvent("click");
    //console.log("key bindings received");
    //console.log(soundButtons[arg]);
    soundButtons[arg].dispatchEvent(eventClick);
});

//appending images and sounds for soundButtons using data-attributes
for( var i = 0; i < soundButtons.length; i++){
    var soundButton = soundButtons[i];

    var soundName = soundButton.attributes['data-sound'].value;

    prepareButton(soundButton, soundName) ;
}

function prepareButton(soundButton, soundName){
    soundButton.querySelector('span').style.backgroundImage = 'url("img/icons/' + soundName + '.png")' ;

    var audio = new Audio(__dirname + '/wav/' + soundName + '.wav' );
    soundButton.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play() ;
    });
}
