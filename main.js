const { app, BrowserWindow, screen } = require('electron');

function createWindowForDisplay(display, index) {
  const { x, y, width, height } = display.bounds;
  const htmlFile = index === 0 ? 'index.html' : 'second.html';
  const win = new BrowserWindow({
    x: x,
    y: y,
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(htmlFile);
}

app.whenReady().then(() => {
  const displays = screen.getAllDisplays();
  displays.forEach((display, index) => {
    createWindowForDisplay(display, index);
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    const displays = screen.getAllDisplays();
    displays.forEach((display, index) => {
      createWindowForDisplay(display, index);
    });
  }
});
