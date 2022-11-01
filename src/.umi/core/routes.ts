// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/kunfengchen/Documents/as_pro/clockPro/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/kunfengchen/Documents/as_pro/clockPro/src/.umi/alita-layout/AlitaLayout.tsx').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index/index.tsx').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
