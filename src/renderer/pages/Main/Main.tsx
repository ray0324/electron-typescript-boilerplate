import React, { Component } from 'react';
import { remote } from 'electron';
import path from 'path';
import Layout from '@/layout';
import '@/styles/global.less';
import './Main.less';

// 顶层window
const top = remote.getCurrentWindow();

console.log(top);

export class Main extends Component<any, { isMaximized: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMaximized: top.isMaximized(),
    };
    window.addEventListener('enter-full-screen', () => {
      console.log('enter-full-screen');
      this.setState({
        isMaximized: top.isMaximized(),
      });
    });
    window.addEventListener('leave-full-screen', () => {
      console.log('leave-full-screen');
      this.setState({
        isMaximized: top.isMaximized(),
      });
    });
  }

  onClick() {
    var child = new remote.BrowserWindow({
      parent: top,
      modal: true,
      width: 800,
      height: 600,
      // frame: false,
      webPreferences: {
        nodeIntegration: true,
      },
    });
    console.log(__dirname);
    const url = path.resolve(__dirname, '../renderer/login.html');
    console.log(url);
    child.loadURL(`file://${url}`);
  }

  render() {
    const { isMaximized } = this.state;
    return (
      <Layout window={top} isMaximized={isMaximized}>
        <div className="main">
          <h1>Hello Electron</h1>
          <p>This is a template app for electron with React.</p>
        </div>
      </Layout>
    );
  }
}
