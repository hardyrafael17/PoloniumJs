/**
  * Main function
  * @param {KWinGlobal} KwinThis
  */
function main (KwinThis) {
  KwinThis.print('Hello World')
  // bool registerShortcut(QString title, QString text, QString keySequence, QJSValue callback)
  const returnToPreviousDesktop = () => {
    KwinThis.print('Hello from shortcut')
  }
  KwinThis.registerShortcut('PoloniumJs', 'Return to previous Desktop', 'Ctrl+Alt+H', returnToPreviousDesktop)
}

/**
 * @returns {void}
 */
main(newFunction())

/**
 * Just to remove some LSP annoying warnings
 * @returns {KWinGlobal}
 */
function newFunction () {
  return this
}

/**
 * @typedef {Object} KWinGlobal
 * @property {any} QTimer - Timer utility
 * @property {any} KWin - KWin utility
 * @property {Options} options - Options utility
 * @property {any} workspace - Workspace utility
 * @property {any} readConfig - ReadConfig utility
 * @property {any} callDBus - CallDBus utility
 * @property {function(string, string, string, function():void): boolean} registerShortcut - RegisterShortcut utility
 * @property {any} registerScreenEdge - RegisterScreenEdge utility
 * @property {any} unregisterScreenEdge - UnregisterScreenEdge utility
 * @property {any} registerTouchScreenEdge - RegisterTouchScreenEdge utility
 * @property {any} unregisterTouchScreenEdge - UnregisterTouchScreenEdge utility
 * @property {any} registerUserActionsMenu - RegisterUserActionsMenu utility
 * @property {any} assert - Assert utility
 * @property {any} assertEquals - AssertEquals utility
 * @property {any} assertFalse - AssertFalse utility
 * @property {any} assertNotNull - AssertNotNull utility
 * @property {any} assertNull - AssertNull utility
 * @property {any} assertTrue - AssertTrue utility
 * @property {function(string): void} print - Print utility
 */

/**
 * @typedef {Object} Options
 * @property {string} objectName - Object name
 * @property {string} focusPolicy - Focus policy
 * @property {string} xwaylandCrashPolicy - Xwayland crash policy
 * @property {number } xwaylandMaxCrashCount - Xwayland max crash count
 * @property {boolean} nextFocusPrefersMouse - Next focus prefers mouse
 * @property {boolean} clickRaise - Click raise
 * @property {boolean} autoRaise - Auto raise
 * @property {number} autoRaiseInterval - Auto raise interval
 * @property {number} delayFocusInterval - Delay focus interval
 * @property {boolean} shadeHover - Shade hover
 * @property {number} shadeHoverInterval - Shade hover interval
 * @property {boolean} separateScreenFocus - Separate screen focus
 * @property {number} activeMouseScreen - Active mouse screen
 * @property {string} placement - Placement
 * @property {string} activationDesktopPolicy - Activation desktop policy
 * @property {boolean} focusPolicyIsReasonable - Focus policy is reasonable
 * @property {number} borderSnapZone - Border snap zone
 * @property {number} windowSnapZone - Window snap zone
 * @property {number} centerSnapZone - Center snap zone
 * @property {boolean} snapOnlyWhenOverlapping - Snap only when overlapping
 * @property {boolean} rollOverDesktops - Roll over desktops
 * @property {string} focusStealingPreventionLevel - Focus stealing prevention level
 * @property {string} operationTitlebarDblClick - Operation titlebar dbl click
 * @property {string} operationMaxButtonLeftClick - Operation max button left click
 * @property {string} operationMaxButtonRightClick - Operation max button right click
 * @property {string} operationMaxButtonMiddleClick - Operation max button middle click
 * @property {string} commandActiveTitlebar1 - Command active titlebar 1
 * @property {string} commandActiveTitlebar2 - Command active titlebar 2
 * @property {string} commandActiveTitlebar3 - Command active titlebar 3
 * @property {string} commandInactiveTitlebar1 - Command inactive titlebar 1
 * @property {string} commandInactiveTitlebar2 - Command inactive titlebar 2
 * @property {string} commandInactiveTitlebar3 - Command inactive titlebar 3
 * @property {string} commandWindow1 - Command window 1
 * @property {string} commandWindow2 - Command window 2
 * @property {string} commandWindow3 - Command window 3
 * @property {string} commandWindowWheel - Command window wheel
 * @property {string} commandAll1 - Command all 1
 * @property {string} commandAll2 - Command all 2
 * @property {string} commandAll3 - Command all 3
 * @property {string} keyCmdAllModKey - Key cmd all mod key
 * @property {string} condensedTitle - Condensed title
 * @property {boolean} electricBorderMaximize - Electric border maximize
 * @property {boolean} electricBorderTiling - Electric border tiling
 * @property {number} electricBorderCornerRatio - Electric border corner ratio
 * @property {boolean} borderlessMaximizedWindows - Borderless maximized windows
 * @property {number} killPingTimeout - Kill ping timeout
 * @property {boolean} hideUtilityWindowsForInactive - Hide utility windows for inactive
 * @property {string} compositingMode - Compositing mode
 * @property {boolean} useCompositing - Use compositing
 */
