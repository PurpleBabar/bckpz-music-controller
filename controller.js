let service = 0;

let isPlaying = null;

chrome.browserAction.onClicked.addListener(function(tab) {
    this.switchService();
});

chrome.commands.onCommand.addListener(function(command) {
  let action = command;
  switch (action) {
    case "switch":
      this.switchService();
      break;
    default:
      if (service > 0) {
        let currentService = serviceDefinition[service];
        let tabQuery = {
          "url": currentService.pattern
        }
        chrome.tabs.query(tabQuery, function (tabs) {
          if (tabs.length > 0) {
            let currentTab = tabs[0];
            
            if (currentService.actions[action] !== null) {
              let details = {
                "code": `document.querySelector("${currentService.actions[action]}").click();`
              }

              chrome.tabs.executeScript(currentTab.id,  details, function(response) {
                console.log(response);
              })  
            }
          }
        });
      }      
  }
});

function switchService() {
  service++;
  if (service == Object.keys(serviceDefinition).length) {
    service = 0;
  }
  
  chrome.browserAction.setIcon({path: `icons/bckpz_20.png`});
  
  let notifOptions = {
    "type": "basic",
    "title": "Turned Off Music Controller",
    "iconUrl": `icons/bckpz.png`,
    "message": `Off`
  };;
  
  if (service > 0) {
    chrome.browserAction.setIcon({path: `icons/${serviceDefinition[service].name}_20.png`});
    notifOptions = {
      "type": "basic",
      "title": "Switching Service",
      "iconUrl": `icons/${serviceDefinition[service].name}.png`,
      "message": `Switched to ${serviceDefinition[service].name}`
    };
  }
  
  chrome.notifications.create('bckpz_music_controller', notifOptions, function(notificationId) {
    console.log(notificationId);
    setTimeout(function () {
      chrome.notifications.clear(notificationId);
    }, 3000);
  });
}