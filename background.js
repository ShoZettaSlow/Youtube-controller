'use strict';

function executeCommand(command){
chrome.tabs.query({
  'url': "https://www.youtube.com/watch?*"
}, function (params){
  chrome.tabs.executeScript(params[0].id, {
    'file': 'commands/'+command+'.js'
  })
})
};

chrome.commands.onCommand.addListener(function (command) {
    executeCommand(command);
  }
);