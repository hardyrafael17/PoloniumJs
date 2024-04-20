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
 * @property {Array<Window >} windows
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
 * @property {function(Window): void} windowAdded
 * @property {function(Window): void} windowRemoved
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
 * @property {{connect: function(function(VirtualDesktop): void): void}} currentDesktopChanged
 * @property {{connect: function(function(Window): void): void}} windowAdded
 * @property {{connect: function(function(Window): void): void}} windowRemoved
 * @property {{connect: function(function(Window): void): void}} windowActivated
 * @property {{connect: function(function(Window): void): void}} desktopsChanged
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
 * @property {function(Window, Output):void} sendClientToScreen - Sends the Window to the given output.
 * @property {function(NewType):void} showOutline - Shows an outline at the specified geometry. If an outline is already shown the outline is moved to the new position. Use hideOutline to remove the outline again.
 * @property {function():void} hideOutline - Hides the outline previously shown by showOutline.
 * @property {function(QPointF): Output} screenAt - Returns the Output at the given position.
 * @property {function(QString): TileManager} tilingForScreen - Returns the Tiling for the given String.
 * @property {function(Output): TileManager} tilingForScreen - Returns the Tiling for the given Output.
 * @property {function(ClientAreaOption, Output, Window): TileManager} clientArea - Returns the geometry a Client can use with the specified option. This method should be preferred over other methods providing screen sizes as the various options take constraints such as struts set on panels into account. This method is also multi screen aware, but there are also options to get full areas. option The type of area which should be considered screen The screen for which the area should be considered desktop The desktop for which the area should be considered, in general there should not be a difference The specified screen geometry
 * @property {function(ClientAreaOption, Output): QRectF} clientArea - Returns the geometry a Client can use with the specified option. This method should be preferred over other methods providing screen sizes as the various options take constraints such as struts set on panels into account. This method is also multi screen aware, but there are also options to get full areas. option The type of area which should be considered screen The screen for which the area should be considered desktop The desktop for which the area should be considered, in general there should not be a difference The specified screen geometry
 * @property {function(ClientAreaOption, Window): QRectF} clientArea - Returns the geometry a Client can use with the specified option. This method should be preferred over other methods providing screen sizes as the various options take constraints such as struts set on panels into account. This method is also multi screen aware, but there are also options to get full areas. option The type of area which should be considered screen The screen for which the area should be considered desktop The desktop for which the area should be considered, in general there should not be a difference The specified screen geometry
 * @property {function(number, QString): void} createDesktop - Creates a new virtual desktop at the requested position. position The position of the desktop. It should be in range [0, count]. name The name for the new desktop, if empty the default name will be used.
 * @property {function(VirtualDesktop): void} removeDesktop - Removes the specified virtual desktop.
 * @property {function(): QString} supportInformation - Provides support information about the currently running KWin instance.
 * @property {function(Window): void} raiseWindow - Raises a Window above all others on the screen. window The Window to raise
 * @property {function(Qulonglong): Window} getClient - Finds the Client with the given windowId. windowId The window Id of the Client The found Client or null
 * @property {function(QPointF, number): Window[]} windowAt - Finds up to count windows at a particular location, prioritizing the topmost one first. A negative count returns all matching clients. pos The location to look for count The number of clients to return A list of Client objects
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
 * @property {Window[]} stackingOrder - List of Clients currently managed by KWin, orderd by their visibility (later ones cover earlier ones).
 * @property {QPoint} cursorPos - The current position of the cursor.
 * All above this are read-only TODO -mark as read only
 * All below this are read-write TODO -mark as read-write
 * @property {VirtualDesktop} currentDesktop
 * @property {Window} activeWindow
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


SameApplicationCheck
RelaxedForActive:
AllowCrossProcesses:

/**
 * @enum {"SizeModeAny" | "SizeModeFixedW" | "SizeModeFixedH" | "SizeModeMax" } SizeMode
 */

/**
 * @enum {"RelaxedForActive" | "AllowCrossProcesses" } SameApplicationCheck
 */

/**
 * @typedef {Object} KWindow
 */



Read-only Properties
QRectF bufferGeometry: This property holds rectangle that the pixmap or buffer of this Window occupies on the screen. This rectangle includes invisible portions of the window, e.g. client-side drop shadows, etc.
QRectF clientGeometry: The geometry of the Window without frame borders.
QPointF pos: This property holds the position of the Window's frame geometry.
QSizeF size: This property holds the size of the Window's frame geometry.
qreal x: This property holds the x position of the Window's frame geometry.
qreal y: This property holds the y position of the Window's frame geometry.
qreal width: This property holds the width of the Window's frame geometry.
qreal height: This property holds the height of the Window's frame geometry.
KWin::Output * output: The output where the window center is on
QRectF rect
QString resourceName
QString resourceClass
QString windowRole
bool desktopWindow: Returns whether the window is a desktop background window (the one with wallpaper). See _NET_WM_WINDOW_TYPE_DESKTOP at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool dock: Returns whether the window is a dock (i.e. a panel). See _NET_WM_WINDOW_TYPE_DOCK at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool toolbar: Returns whether the window is a standalone (detached) toolbar window. See _NET_WM_WINDOW_TYPE_TOOLBAR at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool menu: Returns whether the window is a torn-off menu. See _NET_WM_WINDOW_TYPE_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool normalWindow: Returns whether the window is a "normal" window, i.e. an application or any other window for which none of the specialized window types fit. See _NET_WM_WINDOW_TYPE_NORMAL at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool dialog: Returns whether the window is a dialog window. See _NET_WM_WINDOW_TYPE_DIALOG at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool splash: Returns whether the window is a splashscreen. Note that many (especially older) applications do not support marking their splash windows with this type. See _NET_WM_WINDOW_TYPE_SPLASH at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool utility: Returns whether the window is a utility window, such as a tool window. See _NET_WM_WINDOW_TYPE_UTILITY at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool dropdownMenu: Returns whether the window is a dropdown menu (i.e. a popup directly or indirectly open from the applications menubar). See _NET_WM_WINDOW_TYPE_DROPDOWN_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool popupMenu: Returns whether the window is a popup menu (that is not a torn-off or dropdown menu). See _NET_WM_WINDOW_TYPE_POPUP_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool tooltip: Returns whether the window is a tooltip. See _NET_WM_WINDOW_TYPE_TOOLTIP at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool notification: Returns whether the window is a window with a notification. See _NET_WM_WINDOW_TYPE_NOTIFICATION at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool criticalNotification: Returns whether the window is a window with a critical notification.
bool appletPopup: Returns whether the window is an applet popup.
bool onScreenDisplay: Returns whether the window is an On Screen Display.
bool comboBox: Returns whether the window is a combobox popup. See _NET_WM_WINDOW_TYPE_COMBO at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool dndIcon: Returns whether the window is a Drag&Drop icon. See _NET_WM_WINDOW_TYPE_DND at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
int windowType: Returns the NETWM window type See https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
bool managed: Whether this Window is managed by KWin (it has control over its placement and other aspects, as opposed to override-redirect windows that are entirely handled by the application).
bool deleted: Whether this Window represents an already deleted window and only kept for the compositor for animations.
bool popupWindow: Whether the window is a popup.
bool outline: Whether this Window represents the outline. It's always false if compositing is turned off.
QUuid internalId: This property holds a UUID to uniquely identify this Window.
int pid: The pid of the process owning this window. 5.20
int stackingOrder: The position of this window within Workspace's window stack.
bool fullScreenable: Whether the Window can be set to fullScreen. The property is evaluated each time it is invoked. Because of that there is no notify signal.
bool active: Whether this Window is active or not. Use Workspace::activateWindow() to activate a Window. Workspace::activateWindow
bool closeable: Whether the window can be closed by the user.
QIcon icon
bool shadeable: Whether the Window can be shaded. The property is evaluated each time it is invoked. Because of that there is no notify signal.
bool minimizable: Whether the Window can be minimized. The property is evaluated each time it is invoked. Because of that there is no notify signal.
QRectF iconGeometry: The optional geometry representing the minimized Window in e.g a taskbar. See _NET_WM_ICON_GEOMETRY at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html . The value is evaluated each time the getter is called. Because of that no changed signal is provided.
bool specialWindow: Returns whether the window is any of special windows types (desktop, dock, splash, ...), i.e. window types that usually don't have a window frame and the user does not use window management (moving, raising,...) on them. The value is evaluated each time the getter is called. Because of that no changed signal is provided.
QString caption: The Caption of the Window. Read from WM_NAME property together with a suffix for hostname and shortcut. To read only the caption as provided by WM_NAME, use the getter with an additional false value.
QSizeF minSize: Minimum size as specified in WM_NORMAL_HINTS
QSizeF maxSize: Maximum size as specified in WM_NORMAL_HINTS
bool wantsInput: Whether the Window can accept keyboard focus. The value is evaluated each time the getter is called. Because of that no changed signal is provided.
bool transient: Whether the Window is a transient Window to another Window. transientFor
KWin::Window * transientFor: The Window to which this Window is a transient if any.
bool modal: Whether the Window represents a modal window.
bool move: Whether the Window is currently being moved by the user. Notify signal is emitted when the Window starts or ends move/resize mode.
bool resize: Whether the Window is currently being resized by the user. Notify signal is emitted when the Window starts or ends move/resize mode.
bool decorationHasAlpha: Whether the decoration is currently using an alpha channel.
bool providesContextHelp: Whether the Window provides context help. Mostly needed by decorations to decide whether to show the help button or not.
bool maximizable: Whether the Window can be maximized both horizontally and vertically. The property is evaluated each time it is invoked. Because of that there is no notify signal.
bool moveable: Whether the Window is movable. Even if it is not movable, it might be possible to move it to another screen. The property is evaluated each time it is invoked. Because of that there is no notify signal. moveableAcrossScreens
bool moveableAcrossScreens: Whether the Window can be moved to another screen. The property is evaluated each time it is invoked. Because of that there is no notify signal. moveable
bool resizeable: Whether the Window can be resized. The property is evaluated each time it is invoked. Because of that there is no notify signal.
QString desktopFileName: The desktop file name of the application this Window belongs to. This is either the base name without full path and without file extension of the desktop file for the window's application (e.g. "org.kde.foo"). The application's desktop file name can also be the full path to the desktop file (e.g. "/opt/kde/share/org.kde.foo.desktop") in case it's not in a standard location.
bool hasApplicationMenu: Whether an application menu is available for this Window
bool applicationMenuActive: Whether the application menu for this Window is currently opened
bool unresponsive: Whether this window is unresponsive. When an application failed to react on a ping request in time, it is considered unresponsive. This usually indicates that the application froze or crashed.
QString colorScheme: The color scheme set on this window Absolute file path, or name of palette in the user's config directory following KColorSchemes format. An empty string indicates the default palette from kdeglobals is used. this indicates the colour scheme requested, which might differ from the theme applied if the colorScheme cannot be found
KWin::Layer layer
bool hidden: Whether this window is hidden. It's usually the case with auto-hide panels.
bool inputMethod: Returns whether this window is a input method window. This is only used for Wayland.
Read-write Properties
qreal opacity
bool skipsCloseAnimation: Whether the window does not want to be animated on window close. There are legit reasons for this like a screenshot application which does not want it's window being captured.
bool fullScreen: Whether this Window is fullScreen. A Window might either be fullScreen due to the _NET_WM property or through a legacy support hack. The fullScreen state can only be changed if the Window does not use the legacy hack. To be sure whether the state changed, connect to the notify signal.
QList< KWin::VirtualDesktop * > desktops: The virtual desktops this client is on. If it's on all desktops, the list is empty.
bool onAllDesktops: Whether the Window is on all desktops. That is desktop is -1.
QStringList activities: The activities this client is on. If it's on all activities the property is empty.
bool skipTaskbar: Indicates that the window should not be included on a taskbar.
bool skipPager: Indicates that the window should not be included on a Pager.
bool skipSwitcher: Whether the Window should be excluded from window switching effects.
bool keepAbove: Whether the Window is set to be kept above other windows.
bool keepBelow: Whether the Window is set to be kept below other windows.
bool shade: Whether the Window is shaded.
bool minimized: Whether the Window is minimized.
bool demandsAttention: Whether window state _NET_WM_STATE_DEMANDS_ATTENTION is set. This state indicates that some action in or with the window happened. For example, it may be set by the Window Manager if the window requested activation but the Window Manager refused it, or the application may set it if it finished some work. This state may be set by both the Window and the Window Manager. It should be unset by the Window Manager when it decides the window got the required attention (usually, that it got activated).
QRectF frameGeometry: The geometry of this Window. Be aware that depending on resize mode the frameGeometryChanged signal might be emitted at each resize step or only at the end of the resize operation.
bool noBorder: Whether the window has a decoration or not. This property is not allowed to be set by applications themselves. The decision whether a window has a border or not belongs to the window manager. If this property gets abused by application developers, it will be removed again.
KWin::Tile * tile: The Tile this window is associated to, if any
Signals
stackingOrderChanged()
shadeChanged()
opacityChanged(KWin::Window *window, qreal oldOpacity)
damaged(KWin::Window *window)
inputTransformationChanged()
closed()
windowShown(KWin::Window *window)
windowHidden(KWin::Window *window)
outputChanged(): Emitted whenever the Window's screen changes. This can happen either in consequence to a screen being removed/added or if the Window's geometry changes. 4.11
skipCloseAnimationChanged()
windowRoleChanged(): Emitted whenever the window role of the window changes. 5.0
windowClassChanged(): Emitted whenever the window class name or resource name of the window changes. 5.0
surfaceChanged(): Emitted whenever the Surface for this Window changes.
shadowChanged(): Emitted whenever the window's shadow changes. 5.15
bufferGeometryChanged(const QRectF &oldGeometry): This signal is emitted when the Window's buffer geometry changes.
frameGeometryChanged(const QRectF &oldGeometry): This signal is emitted when the Window's frame geometry changes.
clientGeometryChanged(const QRectF &oldGeometry): This signal is emitted when the Window's client geometry has changed.
frameGeometryAboutToChange(): This signal is emitted when the frame geometry is about to change. the new geometry is not known yet
visibleGeometryChanged(): This signal is emitted when the visible geometry has changed.
tileChanged(KWin::Tile *tile): This signal is emitted when associated tile has changed, including from and to none
fullScreenChanged()
skipTaskbarChanged()
skipPagerChanged()
skipSwitcherChanged()
iconChanged()
activeChanged()
keepAboveChanged(bool)
keepBelowChanged(bool)
demandsAttentionChanged(): Emitted whenever the demands attention state changes.
desktopsChanged()
activitiesChanged()
minimizedChanged()
paletteChanged(const QPalette &p)
colorSchemeChanged()
captionChanged()
captionNormalChanged()
maximizedAboutToChange(MaximizeMode mode)
maximizedChanged()
transientChanged()
modalChanged()
quickTileModeChanged()
moveResizedChanged()
moveResizeCursorChanged(CursorShape)
interactiveMoveResizeStarted()
interactiveMoveResizeStepped(const QRectF &geometry)
interactiveMoveResizeFinished()
closeableChanged(bool)
minimizeableChanged(bool)
shadeableChanged(bool)
maximizeableChanged(bool)
desktopFileNameChanged()
applicationMenuChanged()
hasApplicationMenuChanged(bool)
applicationMenuActiveChanged(bool)
unresponsiveChanged(bool)
decorationChanged()
hiddenChanged()
hiddenByShowDesktopChanged()
lockScreenOverlayChanged()
readyForPaintingChanged()
maximizeGeometryRestoreChanged()
fullscreenGeometryRestoreChanged()
Functions
closeWindow()=0
setMaximize(bool vertically, bool horizontally): Sets the maximization according to vertically and horizontally.

objectName:
bufferGeometry: QRectF(642, 23, 1274, 1408)
clientGeometry: QRectF(642, 23, 1274, 1408)
pos: QPointF(641, -17)
size: QSizeF(1277, 1450)
x: 641
y: -17
width: 1277
height: 1450
opacity: 1
output: KWin::DrmOutput(0x586fc6478da0)
rect: QRectF(0, 0, 1277, 1450)
resourceName: kitty
resourceClass: kitty
windowRole:
desktopWindow: false
dock: false
toolbar: false
menu: false
normalWindow: true
dialog: false
splash: false
utility: false
dropdownMenu: false
popupMenu: false
tooltip: false
notification: false
criticalNotification: false
appletPopup: false
onScreenDisplay: false
comboBox: false
dndIcon: false
windowType: 0
managed: true
deleted: false
skipsCloseAnimation: false
popupWindow: false
outline: false
internalId: {1189d9f1-3f0f-46fb-a9ec-11bb369e990b}
pid: 32838
stackingOrder: 3
fullScreen: false
fullScreenable: true
active: true
desktops: KWin::VirtualDesktop(0x586fc4760830)
onAllDesktops: false
activities: 77c27bfc-581d-4285-bd9b-25b9246a5728
skipTaskbar: false
skipPager: false
skipSwitcher: false
closeable: true
icon: QVariant(QIcon, QIcon("kitty",availableSizes[normal,Off]=QList(QSize(16, 16), QSize(22, 22), QSize(32, 32), QSize(48, 48), QSize(64, 64), QSize(128, 128), QSize(256, 256)),cacheKey=0x600000000))
keepAbove: false
keepBelow: false
shadeable: false
shade: false
minimizable: true
minimized: false
iconGeometry: QRectF(0, 0, 0, 0)
specialWindow: false
demandsAttention: false
caption: zsh
minSize: QSizeF(150, 150)
maxSize: QSizeF(2.14748e+09, 2.14748e+09)
wantsInput: true
transient: false
transientFor: null
modal: false
frameGeometry: QRectF(641, -17, 1277, 1450)
move: false
resize: false
decorationHasAlpha: true
noBorder: false
providesContextHelp: false
maximizable: true
moveable: true
moveableAcrossScreens: true
resizeable: true
desktopFileName: kitty
hasApplicationMenu: false
applicationMenuActive: false
unresponsive: false
colorScheme: kdeglobals
layer: 2
hidden: false
tile: null
inputMethod: false
objectNameChanged: function() { [native code] }
stackingOrderChanged: function() { [native code] }
shadeChanged: function() { [native code] }
opacityChanged: function() { [native code] }
damaged: function() { [native code] }
inputTransformationChanged: function() { [native code] }
closed: function() { [native code] }
windowShown: function() { [native code] }
windowHidden: function() { [native code] }
outputChanged: function() { [native code] }
skipCloseAnimationChanged: function() { [native code] }
windowRoleChanged: function() { [native code] }
windowClassChanged: function() { [native code] }
surfaceChanged: function() { [native code] }
shadowChanged: function() { [native code] }
bufferGeometryChanged: function() { [native code] }
frameGeometryChanged: function() { [native code] }
clientGeometryChanged: function() { [native code] }
frameGeometryAboutToChange: function() { [native code] }
visibleGeometryChanged: function() { [native code] }
tileChanged: function() { [native code] }
fullScreenChanged: function() { [native code] }
skipTaskbarChanged: function() { [native code] }
skipPagerChanged: function() { [native code] }
skipSwitcherChanged: function() { [native code] }
iconChanged: function() { [native code] }
activeChanged: function() { [native code] }
keepAboveChanged: function() { [native code] }
keepBelowChanged: function() { [native code] }
demandsAttentionChanged: function() { [native code] }
desktopsChanged: function() { [native code] }
activitiesChanged: function() { [native code] }
minimizedChanged: function() { [native code] }
paletteChanged: function() { [native code] }
colorSchemeChanged: function() { [native code] }
captionChanged: function() { [native code] }
captionNormalChanged: function() { [native code] }
maximizedAboutToChange: function() { [native code] }
maximizedChanged: function() { [native code] }
transientChanged: function() { [native code] }
modalChanged: function() { [native code] }
quickTileModeChanged: function() { [native code] }
moveResizedChanged: function() { [native code] }
moveResizeCursorChanged: function() { [native code] }
interactiveMoveResizeStarted: function() { [native code] }
interactiveMoveResizeStepped: function() { [native code] }
interactiveMoveResizeFinished: function() { [native code] }
closeableChanged: function() { [native code] }
minimizeableChanged: function() { [native code] }
shadeableChanged: function() { [native code] }
maximizeableChanged: function() { [native code] }
desktopFileNameChanged: function() { [native code] }
applicationMenuChanged: function() { [native code] }
hasApplicationMenuChanged: function() { [native code] }
applicationMenuActiveChanged: function() { [native code] }
unresponsiveChanged: function() { [native code] }
decorationChanged: function() { [native code] }
hiddenChanged: function() { [native code] }
hiddenByShowDesktopChanged: function() { [native code] }
lockScreenOverlayChanged: function() { [native code] }
readyForPaintingChanged: function() { [native code] }
maximizeGeometryRestoreChanged: function() { [native code] }
fullscreenGeometryRestoreChanged: function() { [native code] }
closeWindow: function() { [native code] }
setReadyForPainting: function() { [native code] }
setMaximize: function() { [native code] }
