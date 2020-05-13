import React, { Component } from 'react';
import { remote } from 'electron';
import path from 'path';
import Layout from '@/layout';
import '@/styles/global.less';
import './Main.less';

// 顶层window
const top = remote.getCurrentWindow();

const { Menu, MenuItem } = remote;

const menu = new Menu();
menu.append(
  new MenuItem({
    label: 'MenuItem1',
    click() {
      console.log('item 1 clicked');
    },
  })
);
menu.append(new MenuItem({ type: 'separator' }));
menu.append(
  new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true })
);

window.addEventListener(
  'contextmenu',
  (e) => {
    e.preventDefault();
    menu.popup({ window: remote.getCurrentWindow() });
  },
  false
);

console.log(top);

export class Main extends Component<any, { isMaximized: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMaximized: top.isMaximized(),
    };
    top.on('maximize', () => {
      console.log('maximize');
      this.setState({
        isMaximized: top.isMaximized(),
      });
    });
    top.on('unmaximize', () => {
      console.log('unmaximize');
      this.setState({
        isMaximized: top.isMaximized(),
      });
    });
  }

  onClick() {
    Menu.setApplicationMenu(null);
    var child = new remote.BrowserWindow({
      // parent: top,
      modal: true,
      width: 400,
      height: 300,
      // frame: false,
      transparent: true,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    console.log(__dirname);
    // const url = path.resolve(__dirname, '../renderer/login.html');

    const url = `http://localhost:9000/renderer/login.html`;
    console.log(url);
    child.loadURL(url);
  }

  render() {
    const { isMaximized } = this.state;
    return (
      <Layout window={top} isMaximized={isMaximized}>
        <div className="main">
          <h1 onClick={this.onClick}>Hello Electron!</h1>
          <p>This is a template app for electron with React.</p>
        </div>
      </Layout>
    );
  }
}
