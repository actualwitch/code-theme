import { echoesOfVoid as colors } from "./swatch.ts";
import { withOpacity } from "./utils.ts";

export const theme = {
  name: "Echoes of Void",
  colors: {
    // Base colors
    "foreground": colors.foreground,
    "disabledForeground": colors.foregroundDisabled,
    "descriptionForeground": colors.foregroundSecondary,
    "errorForeground": colors.error,
    "focusBorder": colors.accent,
    "widget.shadow": colors.none,
    "widget.border": colors.none,
    "selection.background": colors.selection,
    
    // Text colors
    "textBlockQuote.background": colors.backgroundLight,
    "textBlockQuote.border": colors.borderSubtle,
    "textCodeBlock.background": colors.backgroundLight,
    "textLink.foreground": colors.accentAlternate,
    "textLink.activeForeground": colors.accent,
    "textPreformat.foreground": colors.foreground,
    "textPreformat.background": colors.backgroundLight,
    "textSeparator.foreground": colors.borderSubtle,
    
    // Editor core
    "editor.background": colors.background,
    "editor.foreground": colors.foreground,
    "editor.selectionBackground": colors.selection,
    "editor.selectionHighlightBackground": colors.selectionInactive,
    "editor.inactiveSelectionBackground": colors.selectionInactive,
    "editor.findMatchBackground": colors.accentAlternateLight + "40",
    "editor.findMatchHighlightBackground": colors.accentAlternateLight + "20",
    "editor.findRangeHighlightBackground": colors.accentAlternateLight + "10",
    "editor.hoverHighlightBackground": colors.backgroundHighlight,
    "editor.wordHighlightBackground": colors.selectionInactive,
    "editor.wordHighlightStrongBackground": colors.selection,
    "editor.lineHighlightBackground": colors.backgroundLight,
    "editor.rangeHighlightBackground": colors.backgroundHighlight,
    "editorCursor.foreground": colors.accent,
    "editorOverviewRuler.border": colors.none,
    "editorOverviewRuler.errorForeground": colors.none,
    "editorOverviewRuler.warningForeground": colors.none,
    "editorOverviewRuler.infoForeground": colors.none,
    "editorOverviewRuler.bracketMatchForeground": colors.accent + "40",
    "editorOverviewRuler.wordHighlightForeground": colors.accent + "40",
    "editorOverviewRuler.wordHighlightStrongForeground": colors.accent + "60",
    "editorOverviewRuler.modifiedForeground": colors.warning + "80",
    "editorOverviewRuler.addedForeground": colors.success + "80",
    "editorOverviewRuler.deletedForeground": colors.error + "80",
    "editorOverviewRuler.findMatchForeground": colors.accentAlternate + "60",
    "editorOverviewRuler.rangeHighlightForeground": colors.accent + "40",
    "editorOverviewRuler.selectionHighlightForeground": colors.accent + "40",
    "editorRuler.foreground": colors.borderSubtle,
    "editorBracketMatch.background": colors.backgroundHighlight,
    "editorBracketMatch.border": colors.accent + "80",
    
    // Editor errors and warnings
    "editorError.foreground": colors.error,
    "editorWarning.foreground": colors.warning,
    "editorInfo.foreground": colors.info,
    "editorHint.foreground": colors.info,
    
    // Editor gutter
    "editorLineNumber.foreground": colors.foregroundDisabled,
    "editorLineNumber.activeForeground": colors.foregroundSecondary,
    "editorGutter.addedBackground": colors.success,
    "editorGutter.deletedBackground": colors.error,
    "editorGutter.modifiedBackground": colors.warning,
    "editorGutter.commentRangeForeground": colors.foregroundDisabled,
    "editorGutter.foldingControlForeground": colors.foregroundDisabled,
    
    // Indent guides
    "editorIndentGuide.background": colors.borderSubtle,
    "editorIndentGuide.activeBackground": colors.foregroundDisabled,
    "editorIndentGuide.background1": colors.borderSubtle,
    "editorIndentGuide.activeBackground1": colors.foregroundDisabled,
    
    // Editor widgets
    "editorWidget.background": colors.backgroundLight,
    "editorWidget.foreground": colors.foreground,
    "editorWidget.border": colors.borderSubtle,
    "editorWidget.resizeBorder": colors.accent,
    "editorSuggestWidget.background": colors.backgroundLight,
    "editorSuggestWidget.border": colors.borderSubtle,
    "editorSuggestWidget.foreground": colors.foreground,
    "editorSuggestWidget.selectedBackground": colors.selection,
    "editorSuggestWidget.selectedForeground": colors.foreground,
    "editorSuggestWidget.focusHighlightForeground": colors.accent,
    "editorSuggestWidget.highlightForeground": colors.accent,
    
    // Editor hover
    "editorHoverWidget.background": colors.backgroundDark,
    "editorHoverWidget.border": colors.borderSubtle,
    "editorHoverWidget.foreground": colors.foreground,
    "editorHoverWidget.statusBarBackground": colors.backgroundHighlight,
    
    // Editor groups & tabs
    "editorGroup.border": colors.border,
    "editorGroupHeader.tabsBackground": colors.background,
    "editorGroupHeader.tabsBorder": colors.border,
    "editorGroupHeader.noTabsBackground": colors.background,
    "editorGroupHeader.border": colors.border,
    "tab.activeBackground": colors.background,
    "tab.activeForeground": colors.foreground,
    "tab.activeBorder": colors.border,
    "tab.activeBorderTop": colors.accent,
    "tab.activeModifiedBorder": colors.warning,
    "tab.inactiveBackground": colors.background,
    "tab.inactiveForeground": colors.foregroundSecondary,
    "tab.inactiveModifiedBorder": colors.warning + "40",
    "tab.border": colors.border,
    "tab.hoverBackground": colors.backgroundLight,
    "tab.hoverForeground": colors.foreground,
    "tab.hoverBorder": colors.border,
    "tab.unfocusedActiveBackground": colors.background,
    "tab.unfocusedActiveForeground": colors.foregroundSecondary,
    "tab.unfocusedActiveBorder": colors.border,
    "tab.unfocusedActiveBorderTop": colors.accentAlternate,
    "tab.unfocusedHoverBackground": colors.backgroundLight,
    "tab.unfocusedHoverForeground": colors.foreground,
    "tab.unfocusedHoverBorder": colors.border,
    "tab.lastPinnedBorder": colors.borderSubtle,
    
    // Activity bar
    "activityBar.background": colors.background,
    "activityBar.foreground": colors.foregroundSecondary,
    "activityBar.inactiveForeground": colors.foregroundDisabled,
    "activityBar.border": colors.border,
    "activityBar.activeBorder": colors.accent,
    "activityBar.activeBackground": colors.backgroundLight,
    "activityBar.activeFocusBorder": colors.accent,
    "activityBar.dropBorder": colors.accent,
    "activityBarBadge.background": colors.accent,
    "activityBarBadge.foreground": colors.background,
    "activityBarTop.foreground": colors.foreground,
    "activityBarTop.activeBorder": colors.accent,
    "activityBarTop.inactiveForeground": colors.foregroundSecondary,
    "activityBarTop.dropBorder": colors.accent,
    
    // Sidebar
    "sideBar.background": colors.background,
    "sideBar.foreground": colors.foreground,
    "sideBar.border": colors.border,
    "sideBar.dropBackground": colors.selection,
    "sideBarTitle.foreground": colors.foreground,
    "sideBarSectionHeader.background": colors.background,
    "sideBarSectionHeader.foreground": colors.foreground,
    "sideBarSectionHeader.border": colors.border,
    
    // Status bar
    "statusBar.background": colors.background,
    "statusBar.foreground": colors.foregroundSecondary,
    "statusBar.border": colors.border,
    "statusBar.debuggingBackground": colors.warning,
    "statusBar.debuggingForeground": colors.background,
    "statusBar.debuggingBorder": colors.border,
    "statusBar.noFolderBackground": colors.background,
    "statusBar.noFolderForeground": colors.foregroundSecondary,
    "statusBar.noFolderBorder": colors.border,
    "statusBar.focusBorder": colors.accent,
    "statusBarItem.activeBackground": colors.backgroundHighlight,
    "statusBarItem.hoverBackground": colors.backgroundLight,
    "statusBarItem.prominentBackground": colors.accent,
    "statusBarItem.prominentForeground": colors.background,
    "statusBarItem.prominentHoverBackground": colors.accentLight,
    "statusBarItem.remoteBackground": colors.accentAlternate,
    "statusBarItem.remoteForeground": colors.background,
    "statusBarItem.errorBackground": colors.error,
    "statusBarItem.errorForeground": colors.background,
    "statusBarItem.warningBackground": colors.warning,
    "statusBarItem.warningForeground": colors.background,
    "statusBarItem.focusBorder": colors.accent,
    
    // Title bar
    "titleBar.activeBackground": colors.background,
    "titleBar.activeForeground": colors.foreground,
    "titleBar.inactiveBackground": colors.background,
    "titleBar.inactiveForeground": colors.foregroundSecondary,
    "titleBar.border": colors.border,
    
    // Command center
    "commandCenter.background": colors.backgroundLight,
    "commandCenter.foreground": colors.foreground,
    "commandCenter.border": colors.border,
    "commandCenter.inactiveBorder": colors.border,
    "commandCenter.activeBorder": colors.accent,
    "commandCenter.activeBackground": colors.backgroundHighlight,
    "commandCenter.activeForeground": colors.foreground,
    
    // Menus
    "menu.background": colors.backgroundLight,
    "menu.foreground": colors.foreground,
    "menu.selectionBackground": colors.selection,
    "menu.selectionForeground": colors.foreground,
    "menu.selectionBorder": colors.border,
    "menu.separatorBackground": colors.borderSubtle,
    "menu.border": colors.borderSubtle,
    "menubar.selectionBackground": colors.selection,
    "menubar.selectionForeground": colors.foreground,
    "menubar.selectionBorder": colors.border,
    
    // Input controls
    "input.background": colors.backgroundLight,
    "input.foreground": colors.foreground,
    "input.border": colors.borderSubtle,
    "input.placeholderForeground": colors.foregroundDisabled,
    "inputOption.activeBackground": colors.accent,
    "inputOption.activeForeground": colors.background,
    "inputOption.activeBorder": colors.accent,
    "inputOption.hoverBackground": colors.backgroundHighlight,
    "inputValidation.errorBackground": colors.errorBackground,
    "inputValidation.errorBorder": colors.error,
    "inputValidation.errorForeground": colors.foreground,
    "inputValidation.warningBackground": colors.warningBackground,
    "inputValidation.warningBorder": colors.warning,
    "inputValidation.warningForeground": colors.foreground,
    "inputValidation.infoBackground": colors.infoBackground,
    "inputValidation.infoBorder": colors.info,
    "inputValidation.infoForeground": colors.foreground,
    
    // Dropdown
    "dropdown.background": colors.backgroundLight,
    "dropdown.foreground": colors.foreground,
    "dropdown.border": colors.borderSubtle,
    "dropdown.listBackground": colors.backgroundLight,
    
    // Button
    "button.background": colors.accent,
    "button.foreground": colors.background,
    "button.hoverBackground": colors.accentLight,
    "button.border": colors.border,
    "button.secondaryBackground": colors.backgroundHighlight,
    "button.secondaryForeground": colors.foreground,
    "button.secondaryHoverBackground": colors.backgroundLight,
    
    // Checkbox
    "checkbox.background": colors.backgroundLight,
    "checkbox.foreground": colors.foreground,
    "checkbox.border": colors.borderSubtle,
    
    // Badge
    "badge.background": colors.accent,
    "badge.foreground": colors.background,
    
    // Scrollbar
    "scrollbar.shadow": colors.none,
    "scrollbarSlider.background": withOpacity(colors.white, 0.20),
    "scrollbarSlider.hoverBackground": withOpacity(colors.white, 0.40),
    "scrollbarSlider.activeBackground": withOpacity(colors.white, 0.60),
    
    // Minimap
    "minimap.findMatchHighlight": colors.accentAlternate + "60",
    "minimap.selectionHighlight": colors.accent + "60",
    "minimap.errorHighlight": colors.none,
    "minimap.warningHighlight": colors.none,
    "minimap.background": colors.background,
    "minimap.selectionOccurrenceHighlight": colors.accent + "60",
    "minimap.foregroundOpacity": "#000000ff",
    "minimapSlider.background": withOpacity(colors.white, 0.20),
    "minimapSlider.hoverBackground": withOpacity(colors.white, 0.40),
    "minimapSlider.activeBackground": withOpacity(colors.white, 0.60),
    "minimapGutter.addedBackground": colors.success + "60",
    "minimapGutter.modifiedBackground": colors.warning + "60",
    "minimapGutter.deletedBackground": colors.error + "60",
    
    // Progress bar
    "progressBar.background": colors.accent,
    
    // Lists and trees
    "list.activeSelectionBackground": colors.selection,
    "list.activeSelectionForeground": colors.foreground,
    "list.activeSelectionIconForeground": colors.foreground,
    "list.dropBackground": colors.selection,
    "list.focusBackground": colors.selection,
    "list.focusForeground": colors.foreground,
    "list.focusHighlightForeground": colors.accent,
    "list.focusOutline": colors.accent,
    "list.focusAndSelectionOutline": colors.accent,
    "list.highlightForeground": colors.accent,
    "list.hoverBackground": colors.backgroundLight,
    "list.hoverForeground": colors.foreground,
    "list.inactiveSelectionBackground": colors.selectionInactive,
    "list.inactiveSelectionForeground": colors.foreground,
    "list.inactiveSelectionIconForeground": colors.foreground,
    "list.inactiveFocusBackground": colors.selectionInactive,
    "list.inactiveFocusOutline": colors.borderSubtle,
    "list.invalidItemForeground": colors.error,
    "list.errorForeground": colors.error,
    "list.warningForeground": colors.warning,
    "tree.indentGuidesStroke": colors.borderSubtle,
    "tree.tableColumnsBorder": colors.borderSubtle,
    "tree.tableOddRowsBackground": colors.backgroundLight,
    "listFilterWidget.background": colors.backgroundHighlight,
    "listFilterWidget.outline": colors.border,
    "listFilterWidget.noMatchesOutline": colors.error,
    
    // Panel
    "panel.background": colors.background,
    "panel.border": colors.border,
    "panel.dropBorder": colors.accent,
    "panelTitle.activeBorder": colors.accent,
    "panelTitle.activeForeground": colors.foreground,
    "panelTitle.inactiveForeground": colors.foregroundSecondary,
    "panelInput.border": colors.borderSubtle,
    "panelSection.border": colors.border,
    "panelSection.dropBackground": colors.selection,
    "panelSectionHeader.background": colors.backgroundLight,
    "panelSectionHeader.foreground": colors.foreground,
    "panelSectionHeader.border": colors.border,
    
    // Terminal
    "terminal.foreground": colors.foreground,
    "terminal.background": colors.background,
    "terminal.border": colors.border,
    "terminal.selectionBackground": colors.selection,
    "terminal.inactiveSelectionBackground": colors.selectionInactive,
    "terminal.findMatchBackground": colors.accentAlternateLight + "40",
    "terminal.findMatchHighlightBackground": colors.accentAlternateLight + "20",
    "terminal.dropBackground": colors.selection,
    "terminal.tab.activeBorder": colors.accent,
    "terminalCursor.background": colors.background,
    "terminalCursor.foreground": colors.accent,
    "terminalCommandDecoration.defaultBackground": colors.foregroundDisabled,
    "terminalCommandDecoration.successBackground": colors.success,
    "terminalCommandDecoration.errorBackground": colors.error,
    "terminalOverviewRuler.cursorForeground": colors.accent,
    "terminalOverviewRuler.findMatchForeground": colors.accentAlternate,
    
    // Notifications
    "notifications.background": colors.backgroundLight,
    "notifications.foreground": colors.foreground,
    "notifications.border": colors.borderSubtle,
    "notificationsErrorIcon.foreground": colors.error,
    "notificationsWarningIcon.foreground": colors.warning,
    "notificationsInfoIcon.foreground": colors.info,
    "notificationCenter.border": colors.borderSubtle,
    "notificationCenterHeader.background": colors.backgroundHighlight,
    "notificationCenterHeader.foreground": colors.foreground,
    "notificationToast.border": colors.borderSubtle,
    "notificationLink.foreground": colors.accentAlternate,
    
    // Extensions
    "extensionButton.prominentBackground": colors.accent,
    "extensionButton.prominentForeground": colors.background,
    "extensionButton.prominentHoverBackground": colors.accentLight,
    "extensionButton.background": colors.backgroundHighlight,
    "extensionButton.foreground": colors.foreground,
    "extensionButton.hoverBackground": colors.backgroundLight,
    "extensionButton.separator": colors.borderSubtle,
    "extensionBadge.remoteBackground": colors.accentAlternate,
    "extensionBadge.remoteForeground": colors.background,
    "extensionIcon.starForeground": colors.warning,
    "extensionIcon.verifiedForeground": colors.success,
    "extensionIcon.preReleaseForeground": colors.warning,
    "extensionIcon.sponsorForeground": colors.accent,
    
    // Quick input
    "quickInput.background": colors.background,
    "quickInput.foreground": colors.foreground,
    "quickInputList.focusBackground": colors.accent + "20",
    "quickInputList.focusForeground": colors.foreground,
    "quickInputList.focusIconForeground": colors.foreground,
    "quickInputTitle.background": colors.background,
    "pickerGroup.border": colors.borderSubtle,
    "pickerGroup.foreground": colors.accent,
    
    // Keybinding
    "keybindingLabel.background": colors.backgroundHighlight,
    "keybindingLabel.foreground": colors.foreground,
    "keybindingLabel.border": colors.borderSubtle,
    "keybindingLabel.bottomBorder": colors.borderSubtle,
    
    // Debug
    "debugToolBar.background": colors.backgroundLight,
    "debugToolBar.border": colors.borderSubtle,
    "debugConsole.infoForeground": colors.info,
    "debugConsole.warningForeground": colors.warning,
    "debugConsole.errorForeground": colors.error,
    "debugConsole.sourceForeground": colors.foregroundSecondary,
    "debugConsoleInputIcon.foreground": colors.accent,
    "debugTokenExpression.name": colors.syntax.variable,
    "debugTokenExpression.value": colors.syntax.string,
    "debugTokenExpression.string": colors.syntax.string,
    "debugTokenExpression.boolean": colors.syntax.boolean,
    "debugTokenExpression.number": colors.syntax.number,
    "debugTokenExpression.error": colors.error,
    "debugIcon.breakpointForeground": colors.error,
    "debugIcon.breakpointDisabledForeground": colors.foregroundDisabled,
    "debugIcon.breakpointUnverifiedForeground": colors.warning,
    "debugIcon.breakpointCurrentStackframeForeground": colors.success,
    "debugIcon.breakpointStackframeForeground": colors.foreground,
    "debugIcon.startForeground": colors.success,
    "debugIcon.pauseForeground": colors.warning,
    "debugIcon.stopForeground": colors.error,
    "debugIcon.disconnectForeground": colors.error,
    "debugIcon.restartForeground": colors.success,
    "debugIcon.stepOverForeground": colors.info,
    "debugIcon.stepIntoForeground": colors.info,
    "debugIcon.stepOutForeground": colors.info,
    "debugIcon.continueForeground": colors.success,
    "debugIcon.stepBackForeground": colors.info,
    
    // Peek view
    "peekView.border": colors.accent,
    "peekViewEditor.background": colors.backgroundLight,
    "peekViewEditor.matchHighlightBackground": colors.accentAlternateLight + "40",
    "peekViewEditor.matchHighlightBorder": colors.accentAlternate,
    "peekViewResult.background": colors.backgroundLight,
    "peekViewResult.fileForeground": colors.foreground,
    "peekViewResult.lineForeground": colors.foregroundSecondary,
    "peekViewResult.matchHighlightBackground": colors.accentAlternateLight + "40",
    "peekViewResult.selectionBackground": colors.selection,
    "peekViewResult.selectionForeground": colors.foreground,
    "peekViewTitle.background": colors.backgroundHighlight,
    "peekViewTitleDescription.foreground": colors.foregroundSecondary,
    "peekViewTitleLabel.foreground": colors.foreground,
    
    // Git decorations
    "gitDecoration.addedResourceForeground": colors.success,
    "gitDecoration.modifiedResourceForeground": colors.warning,
    "gitDecoration.deletedResourceForeground": colors.error,
    "gitDecoration.renamedResourceForeground": colors.info,
    "gitDecoration.stageModifiedResourceForeground": colors.warning,
    "gitDecoration.stageDeletedResourceForeground": colors.error,
    "gitDecoration.untrackedResourceForeground": colors.success,
    "gitDecoration.ignoredResourceForeground": colors.foregroundDisabled,
    "gitDecoration.conflictingResourceForeground": colors.error,
    "gitDecoration.submoduleResourceForeground": colors.foregroundSecondary,
    
    // Settings
    "settings.headerForeground": colors.foreground,
    "settings.modifiedItemIndicator": colors.warning,
    "settings.dropdownBackground": colors.backgroundLight,
    "settings.dropdownForeground": colors.foreground,
    "settings.dropdownBorder": colors.borderSubtle,
    "settings.checkboxBackground": colors.backgroundLight,
    "settings.checkboxForeground": colors.foreground,
    "settings.checkboxBorder": colors.borderSubtle,
    "settings.textInputBackground": colors.backgroundLight,
    "settings.textInputForeground": colors.foreground,
    "settings.textInputBorder": colors.borderSubtle,
    "settings.numberInputBackground": colors.backgroundLight,
    "settings.numberInputForeground": colors.foreground,
    "settings.numberInputBorder": colors.borderSubtle,
    "settings.focusedRowBackground": colors.backgroundHighlight,
    "settings.focusedRowBorder": colors.accent,
    "settings.rowHoverBackground": colors.backgroundLight,
    "settings.sashBorder": colors.borderSubtle,
    
    // Breadcrumb
    "breadcrumb.foreground": colors.foregroundSecondary,
    "breadcrumb.background": colors.background,
    "breadcrumb.focusForeground": colors.foreground,
    "breadcrumb.activeSelectionForeground": colors.foreground,
    "breadcrumbPicker.background": colors.backgroundLight,
    
    // Snippets
    "editor.snippetTabstopHighlightBackground": colors.selectionInactive,
    "editor.snippetTabstopHighlightBorder": colors.accent,
    "editor.snippetFinalTabstopHighlightBackground": colors.selection,
    "editor.snippetFinalTabstopHighlightBorder": colors.accent,
    
    // Symbol icons
    "symbolIcon.arrayForeground": colors.syntax.variable,
    "symbolIcon.booleanForeground": colors.syntax.boolean,
    "symbolIcon.classForeground": colors.syntax.class,
    "symbolIcon.colorForeground": colors.syntax.string,
    "symbolIcon.constantForeground": colors.syntax.keyword,
    "symbolIcon.constructorForeground": colors.syntax.function,
    "symbolIcon.enumeratorForeground": colors.syntax.type,
    "symbolIcon.enumeratorMemberForeground": colors.syntax.property,
    "symbolIcon.eventForeground": colors.syntax.function,
    "symbolIcon.fieldForeground": colors.syntax.property,
    "symbolIcon.fileForeground": colors.foreground,
    "symbolIcon.folderForeground": colors.foreground,
    "symbolIcon.functionForeground": colors.syntax.function,
    "symbolIcon.interfaceForeground": colors.syntax.interface,
    "symbolIcon.keyForeground": colors.syntax.property,
    "symbolIcon.keywordForeground": colors.syntax.keyword,
    "symbolIcon.methodForeground": colors.syntax.method,
    "symbolIcon.moduleForeground": colors.syntax.type,
    "symbolIcon.namespaceForeground": colors.syntax.type,
    "symbolIcon.nullForeground": colors.syntax.null,
    "symbolIcon.numberForeground": colors.syntax.number,
    "symbolIcon.objectForeground": colors.syntax.variable,
    "symbolIcon.operatorForeground": colors.syntax.operator,
    "symbolIcon.packageForeground": colors.syntax.type,
    "symbolIcon.propertyForeground": colors.syntax.property,
    "symbolIcon.referenceForeground": colors.syntax.variable,
    "symbolIcon.snippetForeground": colors.syntax.function,
    "symbolIcon.stringForeground": colors.syntax.string,
    "symbolIcon.structForeground": colors.syntax.class,
    "symbolIcon.textForeground": colors.foreground,
    "symbolIcon.typeParameterForeground": colors.syntax.type,
    "symbolIcon.unitForeground": colors.syntax.number,
    "symbolIcon.variableForeground": colors.syntax.variable,
    
    // Charts
    "charts.foreground": colors.foreground,
    "charts.lines": colors.borderSubtle,
    "charts.red": colors.error,
    "charts.blue": colors.info,
    "charts.yellow": colors.warning,
    "charts.orange": colors.warning,
    "charts.green": colors.success,
    "charts.purple": colors.syntax.purple,
    
    // Ports
    "ports.iconRunningProcessForeground": colors.success,
    
    // Welcome page
    "welcomePage.background": colors.background,
    "welcomePage.tileBackground": colors.backgroundLight,
    "welcomePage.tileHoverBackground": colors.backgroundHighlight,
    "welcomePage.tileBorder": colors.borderSubtle,
    "welcomePage.progress.foreground": colors.accent,
    
    // Git
    "gitlens.gutterBackgroundColor": colors.backgroundLight,
    "gitlens.gutterForegroundColor": colors.foreground,
    "gitlens.lineHighlightBackgroundColor": colors.selection,
    "gitlens.lineHighlightOverviewRulerColor": colors.accent,
    
    // Comments
    "commentsView.resolvedIcon": colors.success,
    "commentsView.unresolvedIcon": colors.warning,
    
    // Action bar
    "actionBar.toggledBackground": colors.backgroundHighlight,
    
    // Simple find widget
    "simpleFindWidget.sashBorder": colors.borderSubtle,
    
    // Profile badge
    "profileBadge.background": colors.accent,
    "profileBadge.foreground": colors.background,
    
    // Editor colors
    "editor.foldBackground": colors.backgroundLight,
    "editorGhostText.foreground": colors.foregroundDisabled,
    "editorCommentsWidget.resolvedBorder": colors.success,
    "editorCommentsWidget.unresolvedBorder": colors.warning,
    "editorCommentsWidget.rangeBackground": colors.backgroundLight,
    "editorCommentsWidget.rangeActiveBackground": colors.backgroundHighlight,
    "editorCommentsWidget.replyInputBackground": colors.backgroundLight,
    
    // Other
    "icon.foreground": colors.foregroundSecondary,
    "problemsErrorIcon.foreground": colors.error,
    "problemsWarningIcon.foreground": colors.warning,
    "problemsInfoIcon.foreground": colors.info,
    
    // Remote
    "remote.extensionButton.prominentBackground": colors.accentAlternate,
    "remote.extensionButton.prominentForeground": colors.background,
    "remote.extensionButton.prominentHoverBackground": colors.accentAlternateLight,
    
    // Testing
    "testing.iconFailed": colors.error,
    "testing.iconErrored": colors.error,
    "testing.iconPassed": colors.success,
    "testing.iconQueued": colors.warning,
    "testing.iconUnset": colors.foregroundDisabled,
    "testing.iconSkipped": colors.foregroundDisabled,
    "testing.peekBorder": colors.error,
    "testing.message.error.decorationForeground": colors.error,
    "testing.message.info.decorationForeground": colors.info,
    
    // Banner
    "banner.background": colors.backgroundHighlight,
    "banner.foreground": colors.foreground,
    "banner.iconForeground": colors.accent,
    
    // Extensions quck pick
    "extensionsRemoteView.badge.background": colors.accentAlternate,
    "extensionsRemoteView.badge.foreground": colors.background,
  },
  
  // Token colors for syntax highlighting
  "tokenColors": [
    // Comments
    {
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": colors.syntax.comment,
        "fontStyle": "italic"
      }
    },
    
    // Strings
    {
      "scope": [
        "string",
        "string.tag",
        "string.value",
        "string.quoted",
        "string.template",
        "meta.embedded.assembly"
      ],
      "settings": {
        "foreground": colors.syntax.string
      }
    },
    
    // String interpolation
    {
      "scope": [
        "punctuation.definition.template-expression",
        "punctuation.section.embedded",
        "meta.template.expression"
      ],
      "settings": {
        "foreground": colors.syntax.operator
      }
    },
    
    // Keywords
    {
      "scope": [
        "keyword",
        "keyword.control",
        "keyword.operator.logical",
        "keyword.operator.wordlike",
        "keyword.other",
        "storage",
        "storage.type",
        "storage.modifier"
      ],
      "settings": {
        "foreground": colors.syntax.keyword
      }
    },
    
    // Control flow keywords (special emphasis)
    {
      "scope": [
        "keyword.control.conditional",
        "keyword.control.loop",
        "keyword.control.flow",
        "keyword.control.import",
        "keyword.control.export",
        "keyword.control.from",
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.delete",
        "keyword.other.using",
        "keyword.other.operator"
      ],
      "settings": {
        "foreground": colors.syntax.storage
      }
    },
    
    // Functions
    {
      "scope": [
        "entity.name.function",
        "meta.function-call",
        "support.function",
        "support.constant.handlebars",
        "entity.name.operator.custom-literal",
        "meta.function-call.generic",
        "keyword.other.special-method"
      ],
      "settings": {
        "foreground": colors.syntax.function
      }
    },
    
    // Types and Classes
    {
      "scope": [
        "entity.name.type",
        "entity.name.namespace",
        "entity.name.class",
        "entity.other.inherited-class",
        "support.class",
        "support.type",
        "support.type.primitive",
        "meta.type.name",
        "meta.return-type",
        "meta.type.annotation",
        "storage.type.cs",
        "storage.type.java",
        "storage.type.groovy",
        "storage.type.annotation",
        "storage.type.generic",
        "storage.type.primitive",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.interface.go"
      ],
      "settings": {
        "foreground": colors.syntax.type
      }
    },
    
    // Interfaces
    {
      "scope": [
        "entity.name.type.interface",
        "support.type.interface"
      ],
      "settings": {
        "foreground": colors.syntax.interface
      }
    },
    
    // Variables
    {
      "scope": [
        "variable",
        "meta.definition.variable.name",
        "support.variable",
        "entity.name.variable",
        "constant.other.placeholder",
        "variable.parameter",
        "meta.parameter"
      ],
      "settings": {
        "foreground": colors.syntax.variable
      }
    },
    
    // Properties
    {
      "scope": [
        "variable.other.property",
        "variable.other.object.property",
        "support.type.property-name",
        "entity.name.tag.css",
        "meta.property-name",
        "meta.object-literal.key",
        "entity.other.attribute-name"
      ],
      "settings": {
        "foreground": colors.syntax.property
      }
    },
    
    // Parameters
    {
      "scope": [
        "variable.parameter",
        "meta.parameter",
        "meta.function.parameter",
        "variable.function.parameter"
      ],
      "settings": {
        "foreground": colors.syntax.parameter
      }
    },
    
    // Numbers
    {
      "scope": [
        "constant.numeric",
        "keyword.operator.plus.exponent",
        "keyword.operator.minus.exponent",
        "constant.numeric.integer",
        "constant.numeric.float",
        "constant.numeric.hex",
        "constant.numeric.binary",
        "constant.numeric.octal"
      ],
      "settings": {
        "foreground": colors.syntax.number
      }
    },
    
    // Booleans
    {
      "scope": [
        "constant.language.boolean",
        "constant.language.true",
        "constant.language.false"
      ],
      "settings": {
        "foreground": colors.syntax.boolean
      }
    },
    
    // Null/undefined
    {
      "scope": [
        "constant.language.null",
        "constant.language.undefined",
        "constant.language.void"
      ],
      "settings": {
        "foreground": colors.syntax.null
      }
    },
    
    // Constants
    {
      "scope": [
        "constant.language",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language",
        "entity.name.constant",
        "constant.other.caps"
      ],
      "settings": {
        "foreground": colors.syntax.keyword
      }
    },
    
    // Operators
    {
      "scope": [
        "keyword.operator",
        "keyword.operator.arithmetic",
        "keyword.operator.bitwise",
        "keyword.operator.assignment",
        "keyword.operator.comparison",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor"
      ],
      "settings": {
        "foreground": colors.syntax.operator
      }
    },
    
    // Punctuation
    {
      "scope": [
        "punctuation",
        "punctuation.definition.block",
        "punctuation.definition.parameters",
        "punctuation.definition.array",
        "punctuation.section",
        "meta.brace"
      ],
      "settings": {
        "foreground": colors.syntax.punctuation
      }
    },
    
    // Tags (HTML/XML/JSX)
    {
      "scope": [
        "entity.name.tag",
        "meta.tag.sgml",
        "support.class.component"
      ],
      "settings": {
        "foreground": colors.syntax.tag
      }
    },
    
    // Attributes
    {
      "scope": [
        "entity.other.attribute-name",
        "meta.attribute"
      ],
      "settings": {
        "foreground": colors.syntax.attribute
      }
    },
    
    // Regular expressions
    {
      "scope": [
        "string.regexp",
        "constant.regexp",
        "string.regexp keyword.control",
        "string.regexp keyword.operator"
      ],
      "settings": {
        "foreground": colors.syntax.regex
      }
    },
    
    // Escape characters
    {
      "scope": [
        "constant.character.escape",
        "string.regexp constant.character.escape"
      ],
      "settings": {
        "foreground": colors.syntax.escape
      }
    },
    
    // CSS specific
    {
      "scope": [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "source.css.less entity.other.attribute-name.id",
        "entity.name.tag.css"
      ],
      "settings": {
        "foreground": colors.syntax.tag
      }
    },
    {
      "scope": [
        "support.type.property-name.css",
        "support.type.vendored.property-name",
        "meta.property-name.css"
      ],
      "settings": {
        "foreground": colors.syntax.property
      }
    },
    {
      "scope": [
        "constant.numeric.css",
        "keyword.other.unit"
      ],
      "settings": {
        "foreground": colors.syntax.number
      }
    },
    
    // Markdown
    {
      "scope": [
        "markup.heading",
        "markup.heading entity.name",
        "entity.name.section.markdown"
      ],
      "settings": {
        "foreground": colors.syntax.keyword,
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "markup.bold",
        "markup.bold string"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "markup.italic",
        "markup.italic string"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "markup.quote",
        "markup.quote string"
      ],
      "settings": {
        "foreground": colors.syntax.comment,
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "markup.inline.raw",
        "markup.fenced_code.block"
      ],
      "settings": {
        "foreground": colors.syntax.string
      }
    },
    {
      "scope": [
        "markup.underline.link",
        "string.other.link"
      ],
      "settings": {
        "foreground": colors.syntax.tag
      }
    },
    
    // JSON
    {
      "scope": [
        "support.type.property-name.json",
        "source.json meta.structure.dictionary.json meta.structure.dictionary.key.json string.quoted.double.json"
      ],
      "settings": {
        "foreground": colors.syntax.property
      }
    },
    
    // YAML
    {
      "scope": [
        "entity.name.tag.yaml",
        "source.yaml meta.tag"
      ],
      "settings": {
        "foreground": colors.syntax.property
      }
    },
    
    // Invalid/Illegal
    {
      "scope": [
        "invalid",
        "invalid.illegal"
      ],
      "settings": {
        "foreground": colors.error
      }
    },
    
    // Diff
    {
      "scope": [
        "markup.inserted",
        "meta.diff.header.to-file"
      ],
      "settings": {
        "foreground": colors.success
      }
    },
    {
      "scope": [
        "markup.deleted",
        "meta.diff.header.from-file"
      ],
      "settings": {
        "foreground": colors.error
      }
    },
    {
      "scope": [
        "markup.changed",
        "meta.diff.header"
      ],
      "settings": {
        "foreground": colors.warning
      }
    },
    
    // Language-specific overrides
    {
      "scope": [
        "variable.language.this",
        "variable.language.self",
        "variable.language.super",
        "keyword.other.this"
      ],
      "settings": {
        "foreground": colors.syntax.keyword
      }
    }
  ],
  
  // Semantic highlighting
  "semanticHighlighting": true,
  "semanticTokenColors": {
    // Types
    "type": colors.syntax.type,
    "class": colors.syntax.class,
    "interface": colors.syntax.interface,
    "struct": colors.syntax.class,
    "enum": colors.syntax.type,
    "typeParameter": colors.syntax.type,
    
    // Functions and methods
    "function": colors.syntax.function,
    "method": colors.syntax.method,
    "macro": colors.syntax.function,
    
    // Variables
    "variable": colors.syntax.variable,
    "parameter": colors.syntax.parameter,
    "property": colors.syntax.property,
    "enumMember": colors.syntax.property,
    "event": colors.syntax.function,
    
    // Modifiers
    "variable.constant": colors.syntax.keyword,
    "variable.readonly": colors.syntax.variable,
    "property.readonly": colors.syntax.property,
    "function.defaultLibrary": colors.syntax.function,
    "variable.defaultLibrary": colors.syntax.variable,
    "class.defaultLibrary": colors.syntax.type,
    
    // Special
    "comment": colors.syntax.comment,
    "string": colors.syntax.string,
    "keyword": colors.syntax.keyword,
    "number": colors.syntax.number,
    "regexp": colors.syntax.regex,
    "operator": colors.syntax.operator,
    
    // Language-specific
    "namespace": colors.syntax.type,
    "label": colors.syntax.keyword,
    "decorator": colors.syntax.attribute,
    
    // Additional modifiers
    "*.deprecated": {
      "foreground": colors.foregroundDisabled,
      "fontStyle": "strikethrough"
    },
    "*.documentation": {
      "fontStyle": "italic"
    },
    "*.static": {
      "fontStyle": "italic"
    },
    "*.abstract": {
      "fontStyle": "italic"
    },
    "*.async": {
      "fontStyle": "italic"
    },
    "*.modification": {
      "fontStyle": "underline"
    },
    "*.declaration": {
      "fontStyle": "bold"
    }
  }
};