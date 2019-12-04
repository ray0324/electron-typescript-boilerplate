import React, { Component } from 'react';
import { remote } from 'electron';
import path from 'path';
import Layout from '@/layout';
import '@/styles/global.less';
import './Main.less';

// 顶层window
const top = remote.getGlobal('top');

export class Main extends Component {
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
    return (
      <Layout>
        <div className="main">
          <table className="log-table">
            <thead>
              <tr>
                <th>URL</th>
                <th>类型</th>
                <th>过滤规则</th>
                <th>过滤器</th>
                <th>源</th>
              </tr>
            </thead>
            <tbody id="logTable" className="">
              <tr id="request-6048">
                <td>https://remixicon.com/</td>
                <td>HTML</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6049">
                <td>
                  https://remixicon.com/static/css/app.c6f7d78d67302a4690bb5d5b2a176f1e.css
                </td>
                <td>CSS</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6050">
                <td>
                  https://remixicon.com/static/js/manifest.2ae2e69a05c33dfc65f8.js
                </td>
                <td>JavaScript</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6051">
                <td>
                  https://remixicon.com/static/js/vendor.7e0bf5a6aa01502510b2.js
                </td>
                <td>JavaScript</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6052">
                <td>
                  https://remixicon.com/static/js/app.e854427a5a2b2ac38250.js
                </td>
                <td>JavaScript</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6053">
                <td>
                  https://hm.baidu.com/hm.js?4a10ea67cebcced3034cf28401233405
                </td>
                <td>JavaScript</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6054">
                <td>
                  https://remixicon.com/static/fonts/remixicon.454eacc.woff2
                </td>
                <td>Font</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6055">
                <td>
                  https://remixicon.com/static/img/dn-alipay-qr.2db9299.png
                </td>
                <td>Image</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6056">
                <td>
                  https://remixicon.com/static/img/dn-wechatpay-qr.effe3cf.png
                </td>
                <td>Image</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6057">
                <td>https://remixicon.com/static/img/wendy.8e33cb9.jpg</td>
                <td>Image</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6058">
                <td>
                  https://hm.baidu.com/hm.gif?cc=1&amp;ck=1&amp;cl=24-bit&amp;ds=2048x1152&amp;vl=1019&amp;et=0&amp;ja=0&amp;ln=zh-cn&amp;lo=0&amp;rnd=435954687&amp;si=4a10ea67cebcced3034cf28401233405&amp;su=https%3A%2F%2Fremixicon.com%2F&amp;v=1.2.65&amp;lv=1&amp;api=4_0&amp;sn=16563&amp;ct=!!&amp;u=https%3A%2F%2Fremixicon.com%2F&amp;tt=Remix%20Icon%20-%20Open%20source%20icon%20library
                </td>
                <td>Image</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6059">
                <td>
                  https://hm.baidu.com/hm.gif?cc=1&amp;ck=1&amp;cl=24-bit&amp;ds=2048x1152&amp;vl=1019&amp;et=0&amp;ja=0&amp;ln=zh-cn&amp;lo=0&amp;rnd=324030761&amp;si=4a10ea67cebcced3034cf28401233405&amp;su=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40fluent-ui%2Ficons&amp;v=1.2.65&amp;lv=1&amp;sn=16563&amp;ct=!!&amp;tt=Remix%20Icon%20-%20Open%20source%20icon%20library
                </td>
                <td>Image</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
              <tr id="request-6060">
                <td>https://remixicon.com/favicon.ico</td>
                <td>Image</td>
                <td></td>
                <td></td>
                <td>remixicon.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}
