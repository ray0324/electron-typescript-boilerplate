import { app, BrowserWindow, Menu, MenuItem } from 'electron';
import path from 'path';
// Module to control application life.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var top: BrowserWindow;

// const Menu = electron.Menu;
// const MenuItem = electron.MenuItem;
const menu = new Menu();
menu.append(new MenuItem({ label: 'Hello' }));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(
  new MenuItem({ label: 'Electron', type: 'checkbox', checked: true })
);

app.on('browser-window-created', function(event, win) {
  win.webContents.on('context-menu', function(e, params) {
    menu.popup({
      window: win,
      x: params.x,
      y: params.y,
    });
  });
});

console.log(app.getAppPath());

function createWindow() {
  // Create the browser window.
  top = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const url = path.resolve(__dirname, '../renderer/main.html');

  console.log(`file://${url}`);
  console.log(__dirname);

  // and load the index.html of the app.
  top.loadURL(`file://${url}`);

  // Open the DevTools.
  top.webContents.openDevTools();

  // Emitted when the window is closed.
  top.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    top = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (top === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
