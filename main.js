const { app, BrowserWindow } = require('electron')
//electron 已经完全加载
app.on('ready', () => {
  //实例化一个window
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //render进程中可以使用node api
    webPreferences: {
      nodeIntegration: true,
      contextIsolation:false,
    }
  })
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
  const secondWindow = new BrowserWindow({
    width: 400,
    height: 300,
    //render进程中可以使用node api
    webPreferences: {
      nodeIntegration:true
    },
    //second window 附属于mainWindow
    parent:mainWindow,
  })
  secondWindow.loadFile('second.html')
})