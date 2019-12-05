import React from 'react';
import '@/styles/global.less';
import './BasicLayout.less';

export function BasicLayout(props: any) {
  // console.log(props.window);

  const win = props.window;
  const cls = win.isMaximized() ? 'unmaximize' : 'maximize';
  return (
    <>
      <div className="layout-title-bar">
        <div className="appicon"></div>
        <div className="menu"></div>
        <div className="window-title">Hello electron</div>
        <div className="window-control">
          <i className="window-ico minimize" onClick={() => win.minimize()}></i>
          <i
            className={`window-ico ${cls}`}
            onClick={() =>
              win.isMaximized() ? win.unmaximize() : win.maximize()
            }
          ></i>
          <i className="window-ico close" onClick={() => win.close()}></i>
        </div>
      </div>
      <div className="layout-container">
        <div className="layout-sidebar">
          <div className="group">
            <span className="icon iconfont icon-home"></span>
            <span className="icon iconfont icon-layer"></span>
            <span className="icon iconfont icon-server"></span>
            <span className="icon iconfont icon-database"></span>
            <span className="icon iconfont icon-secure"></span>
            <span className="icon iconfont icon-net"></span>
            <span className="icon iconfont icon-cpu"></span>
          </div>
          <div className="group">
            <span className="icon iconfont icon-settings"></span>
          </div>
        </div>
        <div className="layout-main">{props.children}</div>
      </div>
    </>
  );
}
