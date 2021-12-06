const { app, BrowserWindow,ipcMain } = require('electron')
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
  mainWindow.loadFile('./renderer/index.html')
  mainWindow.webContents.openDevTools()
  ipcMain.on('message', (event,arg) => {
    console.log('arg---', arg)
    // event.sender.send('reply', 'reply from mian')
    mainWindow.send('reply', 'reply from MainWindow')
  })
})