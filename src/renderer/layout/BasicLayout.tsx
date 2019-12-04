import React from 'react';
import '@/styles/global.less';
import './BasicLayout.less';

export function BasicLayout(props: any) {
  return (
    <>
      <div className="layout-title-bar">windows安全中心</div>
      <div className="layout-container">
        <div className="layout-sidebar"></div>
        <div className="layout-main">{props.children}</div>
      </div>
    </>
  );
}
