const {app, BrowserWindow} = require('electron');


app.on('ready', () => {
    let win = new BrowserWindow({width: 1280, height: 720});
    win.loadURL(`file://${__dirname}/container.html`);
    // win.setKiosk(true);
});