// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';

export default (props) => {
  const layoutConfig = plugin.applyPlugins({
    key: 'mobileLayout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  }) || {};
  return React.createElement(require('/Users/kunfengchen/Documents/as_pro/clockPro/src/.umi/alita-layout/Layout.tsx').default, {
    layoutConfig,
    hasKeepAlive: false,
    ...props,
    hideNavBar:false,
  })
}
