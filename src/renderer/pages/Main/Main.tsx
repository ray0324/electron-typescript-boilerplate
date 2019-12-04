import React, { Component } from 'react';
import { remote } from 'electron';
import path from 'path';
import Layout from '@/layout';
import '@/styles/global.less';
import './Main.less';

export class Main extends Component {
  onClick() {
    var child = new remote.BrowserWindow({
      parent: remote.getGlobal('top'),
      modal: true,
      width: 800,
      height: 600,
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
    return (
      <Layout>
        <div className="main">
          <h1>Hello Electron!</h1>
          <p>Welcome to use this boilerplate</p>
          <button onClick={this.onClick}>open modal</button>
        </div>
      </Layout>
    );
  }
}
