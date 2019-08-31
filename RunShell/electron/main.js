const { app, BrowserWindow, Menu, ipcMain } = require('electron');

let win;
let addItemWin;

const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
        accelerator: process.platform == 'darwin' ? "Command+A" : "Alt+A",
        click(){
          createAddItemWindow();
        }
      },
      {
        label: "Clear Items",
        accelerator: process.platform == 'darwin' ? "Command+C" : "Alt+C",
        click(){
          win.webContents.send('item:clear');
        }
      },
      {
        label: "Quit",
        accelerator: process.platform == 'darwin' ? "Command+Q" : "Ctrl+Q",
        click(){
          app.quit();
        }
      }
    ]
  },
  {
    label: "Help"
  }
];

const addItemMenuTemplate = [
  { 
    label: ''
  }
];

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const menu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(menu);

  win.loadURL(`file://${__dirname}/src/main.html`)

  // win.webContents.openDevTools();

  win.on('closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    };
    win = null;
  });
}

function createAddItemWindow() {
  addItemWin = new BrowserWindow({
    width: 300,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  });

  const menu = Menu.buildFromTemplate(addItemMenuTemplate);
  addItemWin.setMenu(menu);

  addItemWin.loadURL(`file://${__dirname}/src/subAddItem.html`)

  addItemWin.on('close', function(){
    addItemWin = null;
  })
}

if (process.env.NODE_ENV == 'development ') {
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  });
}

//=========================
// APP ON
//=========================

app.on('ready', createWindow);

ipcMain.on('item:add', function(e, item){
  win.webContents.send('item:add', item);
  addItemWin.close();
})