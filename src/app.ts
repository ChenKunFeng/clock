import {
  NavBarProps,
  TitleListItem,
  NavBarListItem,
  TabBarProps,
  TabBarListItem,
} from '@alitajs/alita-layout';

const prefixHttp = 'http://';
// const prefixIp = '111.56.127.174:';
const prefixIp = 'wgzs.nm135.cn:';
const prefixPort = '8080';
export const request = {
  // prefix: '/api',
  // prefix: `${prefixHttp}${prefixIp}${prefixPort}`,
  // prefix: `${prefixHttp}${prefixIp}${prefixPort}/AppCloudInf/api/rest.json`,

  method: 'post',
  // headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  // middlewares: [buildParamsMiddleware, encryptMiddleWare, decryptMiddleware],
  errorHandler: (error: any) => {
    // 集中处理错误
    console.log(error);
  },
  credentials: 'include', // 携带cookie请求
};

const titleList: TitleListItem[] = [
  {
    pagePath: '/',
    title: '首页',
  },

];
const navList: NavBarListItem[] = [];
const navBar: NavBarProps = {
  navList,
  fixed: true,
  onLeftClick: () => {
    history.back();
  },
};
const tabList: TabBarListItem[] = [
];

const tabBar: TabBarProps = {
  color: `#999999`,
  selectedColor: '#00A0FF',
  borderStyle: 'white',
  position: 'bottom',
  list: tabList,
};

export const mobileLayout = {
  documentTitle: '网格助手',
  navBar,
  tabBar,
  titleList,
  fixed: true,
};
