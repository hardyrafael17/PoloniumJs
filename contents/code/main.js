/**
 * @import "./kwinApiJsDoc.js"
 */

/**
 * @param {Object} obj
 * return {void}
 * */
function logObjectKeys (obj) {
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
  }
}

/**
 * @param {KWin} KWin
 * @param {Window} _window
 */
function goToDesktop (KWin, _window) {
}

/**
 * Creates desktops and assigns a shortcuto to got o the newly created desktop TODO - read config
 * @param {Workspace} workspace
 * @param {function(string, string, string, function():void):boolean} registerShortcut
 */
function createDesktops (workspace, registerShortcut) {
  console.log(workspace.desktops.length)
  while (workspace.desktops.length < 9) {
    const newlyCreatedDesktopIndex = workspace.desktops.length
    workspace.createDesktop(newlyCreatedDesktopIndex, '')
    registerShortcut(
      `Go to Virtual Desktop ${newlyCreatedDesktopIndex}`,
      `Go to Virtual Desktop ${newlyCreatedDesktopIndex}`,
      `Meta+${newlyCreatedDesktopIndex}`, () => {
        workspace.currentDesktop = workspace.desktops[newlyCreatedDesktopIndex]
      })
  }
}

/**
  * Main function
  * @param {KWin} KWin
  */
function main (KWin) {
  const isTilingModeEnabled = false
  const tilingMode = 'Half'
  const workspace = KWin.workspace
  const registerShortcut = KWin.registerShortcut

  createDesktops(workspace, registerShortcut)

  // define all variables
  let lastActiveDesktop = KWin.workspace.currentDesktop

  // Register all shortcuts
  const shortcutOne = registerShortcut('Return to Last Active Desktop', 'Go To Last Active Virtual Deasktop', 'Meta+Esc', () => {
    console.log('Should Return to Last Active Desktop')
    workspace.currentDesktop = lastActiveDesktop
  })
  const shortcutTwo = registerShortcut('Log PoloniumJs Info', 'Debugin PoloniumJs Info', 'Meta+]', () => {
    console.log('Debug ----->>>>>>')
    const newTile = new Tile()
    // workspace.screens.forEach(screen => {
    //   workspace.tilingForScreen(screen)
    // })
    // each activity of this Vitual Desktop
    workspace.stackingOrder.forEach((window, index) => {
      if (window.resourceName !== 'plasmashell') {
        console.log(logObjectKeys(window.tile))
      }
    })
    console.log('Debug <<<<<------')
  })
  console.log(shortcutOne, shortcutTwo)

  // Regiter all events callbacks

  workspace.windowAdded.connect((_window) => {
    // logObjectKeys(_window)
  })

  workspace.windowRemoved.connect((_window) => {
    console.log('event windowRemoved')
  })

  workspace.windowActivated.connect((_window) => {
    console.log('event windowActivated')
  })

  /**
   * Fired whenever a virtual desktop is added or removed.
   */
  workspace.desktopsChanged.connect((_window) => {
    console.log('event desktopsChanged ---------------->')
  })

  /**
   * Fired whenever the layout of virtual desktops changed. That is desktopGrid(Size/Width/Height) will have new values.
   */
  workspace.desktopLayoutChanged.connect(() => {
    console.log('event desktopLayoutChanged')
  })

  /**
   * Fired whenever the output list changes, e.g. an output is connected or removed.
   */
  workspace.screensChanged.connect(() => {
    console.log('event screensChanged')
  })

  /**
   * Fired whenever the current activity changed. Id of the new activity
   */
  workspace.currentActivityChanged.connect((_id) => {
    console.log('event currentActivityChanged')
  })

  workspace.cursorPosChanged.connect(() => {
    // console.log('event cursorPosChanged')
  })

  /**
   * Fired whenever the virtualScreenSize changes. virtualScreenSize() 5.0
   */
  workspace.virtualScreenSizeChanged.connect(() => {
    console.log('event virtualScreenSizeChanged')
  })

  /**
   * Fired whenever the virtualScreenGeometry changes. virtualScreenGeometry() 5.0
   */
  workspace.virtualScreenGeometryChanged.connect(() => {
    console.log('event virtualScreenGeometryChanged')
  })

  /**
   * Fired whenever the list of activities changes, the id of the new activity
   */
  workspace.activityAdded.connect((_id) => {
    console.log('event activityAdded')
  })

  /**
   * Fired whenever an activity is removed, the id of the removed activity
   */
  workspace.activityRemoved.connect((_id) => {
    console.log('event activityRemoved')
  })

  /**
   * Fired whenever the list of activities changes, the id of the new activity
   * @param {string} id
   */
  workspace.activitiesChanged.connect((_id) => {
    console.log('event activitiesChanged')
  })

  workspace.currentDesktopChanged.connect((virtualDesktop) => {
    lastActiveDesktop = virtualDesktop
  })

  /**
   * Functions for shortctus are defined below
   */
}

/**
 * @returns {void}
 */
main(newFunction())
/**
 * Just to remove some LSP annoying warnings
 * @returns {KWin}
 */
function newFunction () {
  return this
}
