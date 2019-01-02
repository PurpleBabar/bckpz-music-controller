const serviceDefinition = {
  0: null,
  1: {
    "name":"spotify",
    "pattern": '*://*.spotify.com/*',
    "actions": {
      "play": ".control-button.spoticon-play-16",
      "pause": ".control-button.spoticon-pause-16",
      "play-pause": ".control-button.spoticon-play-16, .control-button.spoticon-pause-16",
      "next": ".control-button.spoticon-skip-forward-16",
      "prev": ".control-button.spoticon-skip-back-16",
      "stop": null
    }
  },
  2: {
    "name":"youtube",
    "pattern": ["*://*.youtube.com/*"],
    "actions": {
      "play": "paper-icon-button.play-pause-button, .ytp-play-button.ytp-button",
      "pause": "paper-icon-button.play-pause-button, .ytp-play-button.ytp-button",
      "play-pause": "paper-icon-button.play-pause-button, .ytp-play-button.ytp-button",
      "next": "paper-icon-button.next-button, .ytp-next-button.ytp-button",
      "prev": "paper-icon-button.previous-button, .ytp-prev-button.ytp-button",
      "stop": null
    }
  },
  3: {
    "name":"soundcloud",
    "pattern": "*://soundcloud.com/*",
    "actions": {
      "play": ".playControls__elements .playControl.playControls__play",
      "pause": ".playControls__elements .playControl.playControls__play",
      "play-pause": ".playControls__elements .playControl.playControls__play",
      "next": ".playControls__elements .skipControl.skipControl__next",
      "prev": ".playControls__elements .skipControl.skipControl__previous",
      "stop": null
    }
  },
  4: {
    "name":"soundsgood",
    "pattern": "*://play.soundsgood.co/*",
    "actions": {
      "play": "section._1BoQEgECC-01OHyiCtbKHO button._2hqQM13FfszZnCG5Ujl5_E",
      "pause": "section._1BoQEgECC-01OHyiCtbKHO button._2hqQM13FfszZnCG5Ujl5_E",
      "play-pause": "section._1BoQEgECC-01OHyiCtbKHO button._2hqQM13FfszZnCG5Ujl5_E",
      "next": "section._1BoQEgECC-01OHyiCtbKHO button._3cyVPjpdh5tpj3y3w8ZAic.sMyv4i4ahSZZF5AjBchMw",
      "prev": null,
      "stop": null
    }
  }
};