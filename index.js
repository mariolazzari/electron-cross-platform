const { BrowserWindow, app } = require("electron");

let win;

app.on("ready", () => {
    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL("http://www.italcoeng.com");

    let infoWin = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        frame: false
    });
    infoWin.loadURL("file://" + __dirname + "/info.html");
});
