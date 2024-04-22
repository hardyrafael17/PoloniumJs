/**
 * @typedef {Object} TileModel
 */

/**
KWin scripting API
This page describes the KWin Scripting API as of KWin 6.0. It has been generated using https://invent.kde.org/nicolasfella/kwin-scripting-api-generator
*/

/**
 * Represents a point in a 2D plane using integer coordinates.
 * @typedef {{ x: number, y: number }} QPoint
 */

/**
 * Represents a variant value in Qt.
 * @typedef {(null|boolean|number|string|Object|Array)} QVariant
 */

/**
 * Represents an unsigned 64-bit integer in Qt.
 * @typedef {number} Qulonglong
 */

/**
 * Represents a rectangle in a 2D plane using floating-point coordinates.
 * @typedef {{
 *   x: number,
 *   y: number,
 *   width: number,
 *   height: number,
 *   right: () => number,
 *   bottom: () => number,
 *   contains: (point: QPointF) => boolean
 * }} QRectF
 */

/**
 * Enum representing edges or sides in Qt.
 * @typedef {'TopEdge' | 'BottomEdge' | 'LeftEdge' | 'RightEdge'} QtEdge
 */

/**
 * Methods and properties added to the global JavaScript object.
 * @global
 * @this {Global}
 */

/**
 * Represents a string.
 * @typedef {string} QString
 */

/**
 * @description  Read Only
 * @typedef {Object} TileManager
 * @property {Tile} rootTile
 * @property {TileModel} model
 * @signal {function(Tile): void} tileRemoved
 * @function {function(number, number): Tile} bestTileForPosition - [number x, number y] Returns the best tile for a given position.
 */

/**
 * Type representing a floating-point number.
 * @typedef {number} qreal
 */

/**
 * @typedef {Object} Tile
 * @property {QRectF} absoluteGeometry
 * @property {QRectF} absoluteGeometryInScreen
 * @property {number} positionInLayout
 * @property {Tile} parent
 * @property {Array<Tile >} tiles
 * @property {Array<KWindow >} windows
 * @property {boolean} isLayout
 * @property {boolean} canBeRemoved
 * @property {QRectF} relativeGeometry
 * @property {qreal} padding
 * @property {function(): void} relativeGeometryChanged
 * @property {function(): void} absoluteGeometryChanged
 * @property {function(): void} windowGeometryChanged
 * @property {function(qreal): void} paddingChanged
 * @property {function(number): void} rowChanged
 * @property {function(boolean): void} isLayoutChanged
 * @property {function(): void} childTilesChanged
 * @property {function(KWindow): void} windowAdded
 * @property {function(KWindow): void} windowRemoved
 * @property {function(): void} windowsChanged
 * @property {function(qreal, QtEdge): void} resizeByPixels
 */

/**
 * Enum representing layout directions.
 * @typedef {'Floating' | 'Horizontal' | 'Vertical'} LayoutDirection
 */

/**
 * @typedef {QRect} NewType
 */

/**
 * @typedef {Object} VirtualDesktop
 * @property {QString} id
 * @property {QString} name
 * @property {QString | undefined} objectName
 * @property {number} x11DesktopNumber
 * @property {function(function():void): void} x11DesktopNumberChanged
 * @property {function(function():void): void} objectNameChanged
 * @property {function(function():void): void} aboutToBeDestroyed
 * @property {function(function():void): void} nameChanged
 */

/**
 * Represents a point in a 2D plane using floating-point coordinates.
 * @typedef {{
 *   x: number,
 *   y: number
 * }} QPointF
 */

/**
 * Represents a rectangle in a 2D plane using integer coordinates.
 * @typedef {{
 *   x: number,
 *   y: number,
 *   width: number,
 *   height: number,
 *   contains: (point: QPointF) => boolean
 * }} QRect
 */

/**
 * Represents a list of items.
 * @template T
 * @typedef {Array<T>} QList
 */

/**
 * @typedef {Object} Options
 *

/**
 * @typedef {Object} Output
 */

/**
 * @typedef {Object} QSize
 * @property {number} width
 * @property {number} height
 */

/**
 * @typedef {Object} Workspace
 * @property {{
 * connect: function(function(VirtualDesktop): void): void
 * }} currentDesktopChanged - Emitted whenever the current desktop changes, callback parameter is prevoious desktop
 * @property {{connect: function(function(KWindow): void): void}} windowAdded
 * @property {{connect: function(function(KWindow): void): void}} windowRemoved
 * @property {{connect: function(function(KWindow): void): void}} windowActivated
 * @property {{connect: function(function(KWindow): void): void}} desktopsChanged
 * @property {{connect: function(function():void): void}} desktopLayoutChanged
 * @property {{connect: function(function():void): void}} screensChanged
 * @property {{connect: function(function(string):void): void}} currentActivityChanged
 * @property {{connect: function(function(string):void): void}} activitiesChanged
 * @property {{connect: function(function(string):void): void}} activityAdded
 * @property {{connect: function(function(string):void): void}} activityRemoved
 * @property {{connect: function(function():void): void}} virtualScreenSizeChanged
 * @property {{connect: function(function():void): void}} virtualScreenGeometryChanged
 * @property {{connect: function(function():void): void}} cursorPosChanged
 * @property {function(): void} slotSwitchDesktopNext
 * @property {function(): void} slotSwitchDesktopPrevious
 * @property {function(): void} slotSwitchDesktopRight
 * @property {function(): void} slotSwitchDesktopLeft
 * @property {function(): void} slotSwitchDesktopUp
 * @property {function(): void} slotSwitchDesktopDown
 * @property {function(): void} slotSwitchToNextScreen
 * @property {function(): void} slotSwitchToPrevScreen
 * @property {function(): void} slotSwitchToRightScreen
 * @property {function(): void} slotSwitchToLeftScreen
 * @property {function(): void} slotSwitchToAboveScreen
 * @property {function(): void} slotSwitchToBelowScreen
 * @property {function(): void} slotWindowToNextScreen
 * @property {function(): void} slotWindowToPrevScreen
 * @property {function(): void} slotWindowToRightScreen
 * @property {function(): void} slotWindowToLeftScreen
 * @property {function(): void} slotWindowToAboveScreen
 * @property {function(): void} slotWindowToBelowScreen
 * @property {function(): void} slotToggleShowDesktop
 * @property {function(): void} slotWindowMaximize
 * @property {function(): void} slotWindowMaximizeVertical
 * @property {function(): void} slotWindowMaximizeHorizontal
 * @property {function(): void} slotWindowMinimize
 * @property {function(): void} slotWindowShade
 * @property {function(): void} slotWindowRaise
 * @property {function(): void} slotWindowLower
 * @property {function(): void} slotWindowRaiseOrLower
 * @property {function(): void} slotActivateAttentionWindow
 * @property {function(): void} slotWindowMoveLeft
 * @property {function(): void} slotWindowMoveRight
 * @property {function(): void} slotWindowMoveUp
 * @property {function(): void} slotWindowMoveDown
 * @property {function(): void} slotWindowExpandHorizontal
 * @property {function(): void} slotWindowExpandVertical
 * @property {function(): void} slotWindowShrinkHorizontal
 * @property {function(): void} slotWindowShrinkVertical
 * @property {function(): void} slotWindowQuickTileLeft
 * @property {function(): void} slotWindowQuickTileRight
 * @property {function(): void} slotWindowQuickTileTop
 * @property {function(): void} slotWindowQuickTileBottom
 * @property {function(): void} slotWindowQuickTileTopLeft
 * @property {function(): void} slotWindowQuickTileTopRight
 * @property {function(): void} slotWindowQuickTileBottomLeft
 * @property {function(): void} slotWindowQuickTileBottomRight
 * @property {function(): void} slotSwitchWindowUp
 * @property {function(): void} slotSwitchWindowDown
 * @property {function(): void} slotSwitchWindowRight
 * @property {function(): void} slotSwitchWindowLeft
 * @property {function(): void} slotIncreaseWindowOpacity
 * @property {function(): void} slotLowerWindowOpacity
 * @property {function(): void} slotWindowOperations
 * @property {function(): void} slotWindowClose
 * @property {function(): void} slotWindowMove
 * @property {function(): void} slotWindowResize
 * @property {function(): void} slotWindowAbove
 * @property {function(): void} slotWindowBelow
 * @property {function(): void} slotWindowOnAllDesktops
 * @property {function(): void} slotWindowFullScreen
 * @property {function(): void} slotWindowNoBorder
 * @property {function(): void} slotWindowToNextDesktop
 * @property {function(): void} slotWindowToPreviousDesktop
 * @property {function(): void} slotWindowToDesktopRight
 * @property {function(): void} slotWindowToDesktopLeft
 * @property {function(): void} slotWindowToDesktopUp
 * @property {function(): void} slotWindowToDesktopDown
 * @property {function(KWindow, Output):void} sendClientToScreen - Sends the KWindow to the given output.
 * @property {function(NewType):void} showOutline - Shows an outline at the specified geometry. If an outline is already shown the outline is moved to the new position. Use hideOutline to remove the outline again.
 * @property {function():void} hideOutline - Hides the outline previously shown by showOutline.
 * @property {function(QPointF): Output} screenAt - Returns the Output at the given position.
 * @property {function(QString): TileManager} tilingForScreen - Returns the Tiling for the given Screen.
 * @property {function(Output): TileManager} tilingForScreen - Returns the Tiling for the given Output.
 * @property {function(ClientAreaOption, Output, KWindow): TileManager} clientArea - Returns the geometry a Client can use with the specified option. This method should be preferred over other methods providing screen sizes as the various options take constraints such as struts set on panels into account. This method is also multi screen aware, but there are also options to get full areas. option The type of area which should be considered screen The screen for which the area should be considered desktop The desktop for which the area should be considered, in general there should not be a difference The specified screen geometry
 * @property {function(ClientAreaOption, Output): QRectF} clientArea - Returns the geometry a Client can use with the specified option. This method should be preferred over other methods providing screen sizes as the various options take constraints such as struts set on panels into account. This method is also multi screen aware, but there are also options to get full areas. option The type of area which should be considered screen The screen for which the area should be considered desktop The desktop for which the area should be considered, in general there should not be a difference The specified screen geometry
 * @property {function(ClientAreaOption, KWindow): QRectF} clientArea - Returns the geometry a Client can use with the specified option. This method should be preferred over other methods providing screen sizes as the various options take constraints such as struts set on panels into account. This method is also multi screen aware, but there are also options to get full areas. option The type of area which should be considered screen The screen for which the area should be considered desktop The desktop for which the area should be considered, in general there should not be a difference The specified screen geometry
 * @property {function(number, QString): void} createDesktop - Creates a new virtual desktop at the requested position. position The position of the desktop. It should be in range [0, count]. name The name for the new desktop, if empty the default name will be used.
 * @property {function(VirtualDesktop): void} removeDesktop - Removes the specified virtual desktop.
 * @property {function(): QString} supportInformation - Provides support information about the currently running KWin instance.
 * @property {function(KWindow): void} raiseKWindow - Raises a KWindow above all others on the screen. window The KWindow to raise
 * @property {function(Qulonglong): KWindow} getClient - Finds the Client with the given windowId. windowId The window Id of the Client The found Client or null
 * @property {function(QPointF, number): KWindow[]} windowAt - Finds up to count windows at a particular location, prioritizing the topmost one first. A negative count returns all matching clients. pos The location to look for count The number of clients to return A list of Client objects
 * @property {function(QString): boolean} isEffective - [QString->pluginId] Checks if a specific effect is currently active. pluginId The plugin Id of the effect to check. true if the effect is loaded and currently active, false otherwise. 6.0
 * All below this are read-only TODO -mark as read only
 * @property {Array<Output>} activeScreen
 * @property {Array<VirtualDesktop>} desktops
 * @property {QSize} desktopGridSize
 * @property {QSize} workspaceSize
 * @property {number} desktopGridWidth
 * @property {number} desktopGridHeight
 * @property {number} workspaceWidth
 * @property {number} workspaceHeight
 * @property {string[]} activities
 * @property {Output[]} screens
 * @property {QSize} virtualScreenSize - The bounding size of all screens combined. Overlapping areas are not counted multiple times.
 * @property {QRect} virtualScreenGeometry - The bounding geometry of all screens combined. Always starts at (0,0) and has virtualScreenSize as it's size.
 * @property {KWindow[]} stackingOrder - List of Clients currently managed by KWin, orderd by their visibility (later ones cover earlier ones).
 * @property {QPoint} cursorPos - The current position of the cursor.
 * All above this are read-only TODO -mark as read only
 * All below this are read-write TODO -mark as read-write
 * @property {VirtualDesktop} currentDesktop
 * @property {KWindow} activeKWindow
 * @property {string} currentActivity
 */

/**
 * @typedef {Object} KWin - Provides access to all methods and properties of the KWin core.
 * @property {Options} options - Global property to all configuration values of KWin core.
 * @property {Workspace} workspace - Global property to the core wrapper of KWin.
 * Functions
 * @property {function (string): void} print - Prints all provided values to kDebug and as a D-Bus signal
 * @property {function (string): string[]} readConfig - Reads the config value for key in the Script's configuration with the optional default value. If not providing a default value and no value stored in the configuration an undefined value is returned.
 * @property {function (ElectricBorder, function): boolean} registerScreenEdge - Registers the callback for the screen edge. When the mouse gets pushed against the given edge the callback will be invoked.
 * @property {function (ElectricBorder): boolean} unregisterScreenEdge - Unregisters the callback for the screen edge. This will disconnect all callbacks from this script to that edge.
 * @property {function (string, string, string, function): boolean} registerShortcut - Registers keySequence as a global shortcut. When the shortcut is invoked the callback will be called.
 * @property {function (boolean, string): boolean} assert - Aborts the execution of the script if value does not evaluate to true. If message is provided an error is thrown with the given message, if not provided an error with default message is thrown.
 * @property {function (boolean, string): boolean} assertTrue - Aborts the execution of the script if value does not evaluate to true. If message is provided an error is thrown with the given message, if not provided an error with default message is thrown.
 * @property {function (boolean, string): boolean} assertFalse - Aborts the execution of the script if value does not evaluate to false. If message is provided an error is thrown with the given message, if not provided an error with default message is thrown.
 * @property {function (QVariant, QVariant): boolean} assertEquals - Aborts the execution of the script if the actual value is not equal to the expected value. If message is provided an error is thrown with the given message, if not provided an error with default message is thrown.
 * @property {function (QVariant, QVariant, QString): boolean} assertNull - Aborts the execution of the script if value is not null. If message is provided an error is thrown with the given message, if not provided an error with default message is thrown.
 * @property {function (QVariant, QString): boolean} assertNotNull - Aborts the execution of the script if value is null. If message is provided an error is thrown with the given message, if not provided an error with default message is thrown.
 * @property {function (function():void):void} registerUserActionsMenu - Registers the passed in callback to be invoked whenever the User actions menu (Alt+F3 or right click on window decoration) is about to be shown.
 * @description {
 *  title: "My Menu entry",
 *  checkable: true,
 *  checked: false,
 *  triggered: function (action) {
 *  // callback with triggered QAction
 *  }
 * }
 * for a menu it should be
 * {
 *   title: "My menu",
 *   items: [{...}, {...}, ...] // list with entries as described
 * }
 */

/**
 *
 * @description
 * Enums
 * KWin::WorkspaceWrapper
 */

/**
 * Enum representing ClientAreaOption.
 * @typedef { 'PlacementArea' | 'MovementArea' | 'MaximizeArea' | 'MaximizeFullArea' | 'FullScreenArea' | 'WorkArea' | 'FullArea' | 'ScreenArea' } ClientAreaOption
 */

/**
 * ElectricBorder
 * @readonly
 * @enum {string}
 */

/**
 * Enum representing ElectricBorder.
 * @typedef {
 'ElectricTop' |
   'ElectricTopRight' |
   'ElectricRight' |
   'ElectricBottomRight' |
   'ElectricBottom' |
   'ElectricBottomLeft' |
   'ElectricLeft'|
   'ElectricTopLeft' |
   'ELECTRIC_COUNT'  |
   'ElectricNone'
 * } ElectricBorder
 */

/**
 * @enum {"SizeModeAny" | "SizeModeFixedW" | "SizeModeFixedH" | "SizeModeMax" } SizeMode
 */

/**
 * @enum {"RelaxedForActive" | "AllowCrossProcesses" } SameApplicationCheck
 */

/**
 * @typedef {Object} KWindow
 * @property {QRectF} bufferGeometry - This property holds rectangle that the pixmap or buffer of this KWindow occupies on the screen. This rectangle includes invisible portions of the window, e.g. client-side drop shadows, etc.
 * @property {QRectF} clientGeometry - The geometry of the KWindow without frame borders
 * @property {QPointF} pos - This Property of KWindow without frame borders.
 * @property {QSizeF} size - This property holds the size of the KWindow's frame geometry.
 * @property {number} qreal x - This property holds the x position of the KWindow's frame geometry.
 * @property {number} qreal y - This property holds the y position of the KWindow's frame geometry.
 * @property {qreal} width - This property holds the width of the KWindow's frame geometry.
 * @property {qreal} height  This property holds the height of the KWindow's frame geometry.
 * @property {Output}  output - The output where the window center is on
 * @property {QRectF} rect
 * @property {boolean} dock - Returns whether the window is a dock (i.e. a panel). See _NET_WM_WINDOW_TYPE_DOCK at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} toolbar - Returns whether the window is a standalone (detached) toolbar window. See _NET_WM_WINDOW_TYPE_TOOLBAR at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} menu - Returns whether the window is a torn-off menu. See _NET_WM_WINDOW_TYPE_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} normalWindow - Returns whether the window is a "normal" window, i.e. an application or any other window for which none of the specialized window types fit. See _NET_WM_WINDOW_TYPE_NORMAL at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} dialog - Returns whether the window is a dialog window. See _NET_WM_WINDOW_TYPE_DIALOG at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} splash - Returns whether the window is a splashscreen. Note that many (especially older) applications do not support marking their splash windows with this type. See _NET_WM_WINDOW_TYPE_SPLASH at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} utility - Returns whether the window is a utility window, such as a tool window. See _NET_WM_WINDOW_TYPE_UTILITY at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} dropdownMenu - Returns whether the window is a dropdown menu (i.e. a popup directly or indirectly open from the applications menubar). See _NET_WM_WINDOW_TYPE_DROPDOWN_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} popupMenu - Returns whether the window is a popup menu (that is not a torn-off or dropdown menu). See _NET_WM_WINDOW_TYPE_POPUP_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} tooltip - Returns whether the window is a tooltip. See _NET_WM_WINDOW_TYPE_TOOLTIP at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} notification - Returns whether the window is a window with a notification. See _NET_WM_WINDOW_TYPE_NOTIFICATION at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} criticalNotification - Returns whether the window is a window with a critical notification.
 * @property {boolean} appletPopup - Returns whether the window is an applet popup.
 * @property {boolean} onScreenDisplay - Returns whether the window is an On Screen Display.
 * @property {boolean} comboBox - Returns whether the window is a combobox popup. See _NET_WM_WINDOW_TYPE_COMBO at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} dndIcon - Returns whether the window is a Drag&Drop icon. See _NET_WM_WINDOW_TYPE_DND at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {number} windowType - Returns the NETWM window type See https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
 * @property {boolean} managed - Whether this KWindow is managed by KWin (it has control over its placement and other aspects, as opposed to override-redirect windows that are entirely handled by the application).
 * @property {boolean} deleted - Whether this KWindow represents an already deleted window and only kept for the compositor for animations.
 * @property {boolean} popupWindow - Whether the window is a popup.
 * @property {boolean} outline - Whether this KWindow represents the outline. It's always false if compositing is turned off.
 * @property {string} internalId - This property holds a UUID to uniquely identify this Window.
 * @property {string} pid - int pid: The pid of the process owning this window. 5.20
 * @property {string} stackingOrder -int stackingOrder: The position of this window within Workspace's window stack.
 * @property {boolean} fullScreenable -bool fullScreenable: Whether the KWindow can be set to fullScreen. The property is evaluated each time it is invoked. Because of that there is no notify signal.
 * @property {boolean} active - bool active: Whether this KWindow is active or not. Use Workspace::activateWindow() to activate a Window. Workspace::activateWindow
 * @property {boolean} closeable - bool closeable: Whether the window can be closed by the user.
 * @property {QIcon} icon - QIcon icon
 * @property {boolean} shadeable - Whether the Window can be shaded. The property is evaluated each time it is invoked. Because of that there is no notify signal.
 * @property {boolean} minimizable - bool minimizable: Whether the Window can be minimized. The property is evaluated each time it is invoked. Because of that there is no notify signal.
 * @property {QRectF} iconGeometry - QRectF iconGeometry: The optional geometry representing the minimized Window in e.g a taskbar. See _NET_WM_ICON_GEOMETRY at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html . The value is evaluated each time the getter is called. Because of that no changed signal is provided.
 * @property {boolean} specialWindow - bool specialWindow: Returns whether the window is any of special windows types (desktop, dock, splash, ...), i.e. window types that usually don't have a window frame and the user does not use window management (moving, raising,...) on them. The value is evaluated each time the getter is called. Because of that no changed signal is provided.
 * @property {QString} catpion -QString caption: The Caption of the Window. Read from WM_NAME property together with a suffix for hostname and shortcut. To read only the caption as provided by WM_NAME, use the getter with an additional false value.
 * @property {QSizeF} minSize - QSizeF minSize: Minimum size as specified in WM_NORMAL_HINTS
 * @property {QSizeF} maxSize - Maximum size as specified in WM_NORMAL_HINTS
 * @property {boolean} wantsInput - bool wantsInput: Whether the Window can accept keyboard focus. The value is evaluated each time the getter is called. Because of that no changed signal is provided.
 * @property {boolean} transient - bool transient: Whether the Window is a transient Window to another Window. transientFor
 * @property {KWindow} transientFor: The Window to which this Window is a transient if any.
 * @property {boolean} modal - bool modal: Whether the Window represents a modal window.
 * @property {boolean} move - bool move: Whether the Window is currently being moved by the user. Notify signal is emitted when the Window starts or ends move/resize mode.
 * @property {boolean} resize - bool resize: Whether the Window is currently being resized by the user. Notify signal is emitted when the Window starts or ends move/resize mode.
 * @property {boolean} decorationHasAlpha - bool decorationHasAlpha: Whether the decoration is currently using an alpha channel.
 * @property {boolean} providesContextHelp - bool providesContextHelp: Whether the Window provides context help. Mostly needed by decorations to decide whether to show the help button or not.
 * @property {boolean} maximizable - bool maximizable: Whether the Window can be maximized both horizontally and vertically. The property is evaluated each time it is invoked. Because of that there is no notify signal.
 * @property {boolean} moveable - bool moveable: Whether the Window is movable. Even if it is not movable, it might be possible to move it to another screen. The property is evaluated each time it is invoked. Because of that there is no notify signal. moveableAcrossScreens
 * @property {boolean} moveableAcrossScreens - bool ool moveableAcrossScreens: Whether the Window can be moved to another screen. The property is evaluated each time it is invoked. Because of that there is no notify signal. moveable
 * @property {boolean} resizeable - bool resizeable: Whether the Window can be resized. The property is evaluated each time it is invoked. Because of that there is no notify signal.
 * @property {QString} desktopFileName - QString desktopFileName: The desktop file name of the application this Window belongs to. This is either the base name without full path and without file extension of the desktop file for the window's application (e.g. "org.kde.foo"). The application's desktop file name can also be the full path to the desktop file (e.g. "/opt/kde/share/org.kde.foo.desktop") in case it's not in a standard location.
 * @property {boolean} hasApplicationMenu - bool hasApplicationMenu: Whether an application menu is available for this Window
 * @property {boolean} applicationMenuActive - bool applicationMenuActive: Whether the application menu for this Window is currently opened
 * @property {boolean} unresponsive - bool unresponsive: Whether this window is unresponsive. When an application failed to react on a ping request in time, it is considered unresponsive. This usually indicates that the application froze or crashed.
 * @property {QString} colorScheme: The color scheme set on this window
 * @property {Layer} layer - Layer
 * @property {boolean} hidden - bool hidden: Whether this window is hidden. It's usually the case with auto-hide panels.
 * @property {boolean} inputMethod - bool inputMethod: Returns whether this window is a input method window. This is only used for Wayland.
 * @property {qreal} opacity - qreal opacity
 * @property {boolean} skipsCloseAnimation - bool skipsCloseAnimation: Whether the window does not want to be animated on window close. There are legit reasons for this like a screenshot application which does not want it's window being captured.
 * @property {boolean} fullScreen - bool fullScreen: Whether this Window is fullScreen. A Window might either be fullScreen due to the _NET_WM property or through a legacy support hack. The fullScreen state can only be changed if the Window does not use the legacy hack. To be sure whether the state changed, connect to the notify signal.
 * @property {QList<KWindow>} desktops - QList< KWin::VirtualDesktop * > desktops: The virtual desktops this client is on. If it's on all desktops, the list is empty.
 * @property {boolean} onAllDesktops - bool onAllDesktops: Whether the Window is on all desktops. That is desktop is -1.
 * @property {Array<QString>} activities  - QStringList activities: The activities this client is on. If it's on all activities the property is empty.
 * @property {boolean} skipTaskbar - bool skipTaskbar: Indicates that the window should not be included on a taskbar.
 * @property {boolean} skipPager - bool skipPager: Indicates that the window should not be included on a Pager.
 * @property {boolean} skipSwitcher - bool skipSwitcher: Whether the Window should be excluded from window switching effects.
 * @property {boolean} keepAbove - bool keepAbove: Whether the Window is set to be kept above other windows.
 * @property {boolean} keepBelow - bool keepBelow: Whether the Window is set to be kept below other windows.
 * @property {boolean} shade - bool shade: Whether the Window is shaded.
 * @property {boolean} minimized - bool minimized: Whether the Window is minimized.
 * @property {boolean} demandsAttention - bool demandsAttention: Whether window state _NET_WM_STATE_DEMANDS_ATTENTION is set. This state indicates that some action in or with the window happened. For example, it may be set by the Window Manager if the window requested activation but the Window Manager refused it, or the application may set it if it finished some work. This state may be set by both the Window and the Window Manager. It should be unset by the Window Manager when it decides the window got the required attention (usually, that it got activated).
 * @property {QRectF} frameGeometry - QRectF frameGeometry: The geometry of this Window. Be aware that depending on resize mode the frameGeometryChanged signal might be emitted at each resize step or only at the end of the resize operation.
 * @property {boolean} noBorder - bool noBorder: Whether the window has a decoration or not. This property is not allowed to be set by applications themselves. The decision whether a window has a border or not belongs to the window manager. If this property gets abused by application developers, it will be removed again.
 * @property {Tile} tile - KWin::Tile * tile: The Tile this window is associated to, if any
 * @property {function():void} stackingOrderChanged
 * @property {function():void} shadeChanged
 * @property {function(function(KWindow, qreal):void):void} opacityChanged - void opacityChanged(KWin::Window *window, qreal oldOpacity)
 * @property {function(function(KWindow):void):void} damaged - damaged(KWin::Window *window)
 * @property {function(function(KWindow):void):void} inputTransformationChanged - inputTransformationChanged()
 * @property {function(function():void):void} closed - closed()
 * @property {function(function(KWindow):void):void} windowShown - windowShown(KWin::Window *window)
 * @property {function(function(KWindow):void):void} windowHidden - windowHidden(KWin::Window *window)
 * @property {function(function():void):void} outputChanged - Emitted whenever the Window's screen changes. This can happen either in consequence to a screen being removed/added or if the Window's geometry changes. 4.11
 * @property {function(function():void):void} skipCloseAnimationChanged
 * @property {function(function():void):void} windowRoleChanged - Emitted whenever the window role of the window changes. 5.0
 * @property {function(function():void):void} windowClassChanged - Emitted whenever the window class name or resource name of the window changes. 5.0
 * @property {function(function():void):void} surfaceChanged(): Emitted whenever the Surface for this Window changes.
 * @property {function(function():void):void} shadowChanged(): Emitted whenever the window's shadow changes. 5.15
 * @property {function(function(QRectF):void):void} bufferGeometryChanged - (const QRectF &oldGeometry): This signal is emitted when the Window's buffer geometry changes.
 * @property {function(function(QRectF):void):void} frameGeometryChanged - (const QRectF &oldGeometry): This signal is emitted when the Window's frame geometry changes.
 * @property {function(function(QRectF):void):void} clientGeometryChanged - (const QRectF &oldGeometry): This signal is emitted when the Window's client geometry has changed.
 * @property {function(function():void):void} frameGeometryAboutToChange - This signal is emitted when the frame geometry is about to change. the new geometry is not known yet
 * @property {function(function():void):void} visibleGeometryChanged - This signal is emitted when the visible geometry has changed.
 * @property {function(function(Tile):void):void} tileChanged - (KWin::Tile *tile): This signal is emitted when associated tile has changed, including from and to none
 * @property {function(function():void):void} fullScreenChanged
 * @property {function(function():void):void} skipTaskbarChanged
 * @property {function(function():void):void} skipPagerChanged
 * @property {function(function():void):void} skipSwitcherChanged
 * @property {function(function():void):void} iconChanged
 * @property {function(function():void):void} activeChanged
 * @property {function(function(boolean):void):void} keepAboveChanged(bool)
 * @property {function(function(boolean):void):void} keepBelowChanged(bool)
 * @property {function(function():void):void} demandsAttentionChanged Emitted whenever the demands attention state changes.
 * @property {function(function():void):void} desktopsChanged
 * @property {function(function():void):void} activitiesChanged
 * @property {function(function():void):void} minimizedChanged
 * @property {function(function(QPalette):void):void} paletteChanged(const QPalette &p)
 * @property {function(function():void):void} colorSchemeChanged
 * @property {function(function():void):void} captionChanged
 * @property {function(function():void):void} captionNormalChanged
 * @property {function(function(MaximizeMode):void):void} maximizedAboutToChange(MaximizeMode mode)
 * @property {function(function():void):void} maximizedChanged
 * @property {function(function():void):void} transientChanged
 * @property {function(function():void):void} modalChanged
 * @property {function(function():void):void} quickTileModeChanged
 * @property {function(function():void):void} moveResizedChanged
 * @property {function(function(CursorShape):void):void} moveResizeCursorChanged(CursorShape)
 * @property {function(function():void):void} interactiveMoveResizeStarted
 * @property {function(function(QRectF):void):void} interactiveMoveResizeStepped(const QRectF &geometry)
 * @property {function(function():void):void} interactiveMoveResizeFinished
 * @property {function(function():void):void} closeableChanged - closeableChanged(bool)
 * @property {function(function(boolean):void):void} minimizeableChanged - minimizeableChanged(bool)
 * @property {function(function(boolean):void):void} shadowableChanged - shadeableChanged(bool)
 * @property {function(function(boolean):void):void} maximizeableChanged - maximizeableChanged(bool)
 * @property {function(function():void):void} desktopFileNameChanged
 * @property {function(function():void):void} applicationMenuChanged
 * @property {function(function(boolean):void):void} hasApplicationMenuChanged - hasApplicationMenuChanged(bool)
 * @property {function(function(boolean):void):void} applicationMenuActiveChanged - applicationMenuActiveChanged(bool)
 * @property {function(function(boolean):void):void} unresponsiveChanged(bool) - unresponsiveChanged(bool)
 * @property {function(function():void):void} decorationChanged
 * @property {function(function():void):void} hiddenChanged
 * @property {function(function():void):void} hiddenByShowDesktopChanged
 * @property {function(function():void):void} lockScreenOverlayChanged
 * @property {function(function():void):void} readyForPaintingChanged
 * @property {function(function():void):void} maximizeGeometryRestoreChanged
 * @property {function(function():void):void} fullscreenGeometryRestoreChanged
 * @property {function():void} closeWindow
 * @property {function(boolean, boolean):void} setMaximize -  vertically, bool horizontally):void} setMaximize(bool vertically, bool horizontally)
*/
