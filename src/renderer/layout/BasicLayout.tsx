import React from 'react';
import '@/styles/global.less';
import './BasicLayout.less';

export function BasicLayout(props: any) {
  return (
    <>
      <div className="layout-title-bar">
        <div className="appicon"></div>
        <div className="menu"></div>
        <div className="window-title">Hello electron</div>
        <div className="window-control">
          <i className="window-ico window-minimize"></i>
          <i className="window-ico window-max-restore"></i>
          <i className="window-ico window-close"></i>
        </div>
      </div>
      <div className="layout-container">
        <div className="layout-sidebar"></div>
        <div className="layout-main">{props.children}</div>
      </div>
    </>
  );
}
