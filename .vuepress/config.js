
const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs目录
const utils = require('./utils/index.js');
const filehelper = require('./utils/initPage.js');

module.exports = {
  //...其它配置

  themeConfig: {
    nav: [
      {text : 'blog', link: '/blog/'},
      {text : 'about', link: '/about/'},
    ],
    sidebar: {
      '/blog/': utils.genSidebar('首页', filehelper.getFileName(rootpath + "/blog/"), true),
      '/blog/css/': utils.genSidebar('css', filehelper.getFileName(rootpath + "/blog/css/"), false),
      '/blog/javascript/': utils.genSidebar('页面js相关', filehelper.getFileName(rootpath + "/blog/javascript/"), false),
      '/blog/html/': utils.genSidebar('页面html相关', filehelper.getFileName(rootpath + "/blog/html/"), false),
      '/blog/plugins/': utils.genSidebar('插件', filehelper.getFileName(rootpath + "/blog/plugins/"), false),
      '/blog/ui/': utils.genSidebar('组件', filehelper.getFileName(rootpath + "/blog/ui/"), false),
      '/about/': utils.genSidebar('关于', filehelper.getFileName(rootpath + "/about/"), false),
      '/bar/': [
        '',           // ./bar/README.md文件，对应页面上/bar/路径
        'one',        // ./bar/one.md文件，对应页面上/bar/one.html
        'two',        // ./bar/two.md文件，对应页面上/bar/two.html
      ],
      '/page-a/': [
        '',
        'a',
        'b',
      ],
      // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
      '/': [
        '',
        'home1',
        'home2',
        'home3',
      ],
    }, // 侧边栏配置
  },
};


// module.exports = {
//   title: '个人博客',
//   description: 'zyx的博客',
//   head: [
//     ['link', {rel: 'icon', href: '/logo.jpg'}]
//   ],
//   themeConfig: {
//     logo: '/djsz.jpg',
//     // sidebarDepth: 2,
//     nav: [
//       {text: 'Home', link: '/'},
//       {text: 'Home1', link: '/home1', target: '_self', rel: ''},
//       {text: 'page-a', link: '/page-a/'},
//       {text: 'External', link: 'https://github.com/1549583737?tab=overview&from=2020-03-01&to=2020-03-08'},
//       {
//         text: 'Languages',
//         ariaLabel: 'Language Menu',
//         items: [
//           {
//             text: 'Chinese',
//             link: '/language/chinese/china.md',
//             // items: [
//             //   {
//             //     text: '北京',
//             //     link: '/'
//             //   },
//             //   {
//             //     text: '南京',
//             //     link: '/',
//             //     // items: [
//             //     //   {
//             //     //     text: '栖霞区',
//             //     //     link: '/'
//             //     //   },
//             //     //   {
//             //     //     text: '玄武区',
//             //     //     link: '/'
//             //     //   }
//             //     // ]
//             //   },
//             // ]
//           },
//           // {
//           //   text: 'Japanese', link: '/language/japanese/japan.md',
//           //   items: [
//           //     {text: '东京市', link: '/'},
//           //     {text: '横滨市', link: '/'},
//           //     {text: '大阪市', link: '/'},
//           //     {text: '川崎市', link: '/'},
//           //     {text: '琦玉市', link: '/'},
//           //     {text: '广岛市', link: '/'},
//           //     {text: '神户市', link: '/'}
//           //   ]
//           // }
//         ]
//       }
//     ],
//     // sidebar: [
//     //   '/',
//     //   '/home1',
//     //   ['/home2', 'home2自定义标题'],
//     //   '/home3',
//     //   '/中文'
//     // ]
//     // sidebar: [
//     //   {
//     //     title: '一组题目',
//     //     collapsable: false,
//     //     children: [
//     //       '/', '/home1'
//     //     ]
//     //   },
//     //   {
//     //     title: '二组题目',
//     //     children: [
//     //       ['home2', 'home2自定义题目'],
//     //       '/home3',
//     //       '/中文'
//     //     ]
//     //   }
//     // ]
//     sidebar: {
//       // /bar/ 一个侧边栏，里面的三个页面共用一个侧边栏
//       '/bar/': [
//         '',           // ./bar/README.md文件，对应页面上/bar/路径
//         'one',        // ./bar/one.md文件，对应页面上/bar/one.html
//         'two',        // ./bar/two.md文件，对应页面上/bar/two.html
//       ],
//       '/page-a/': [
//         '',
//         'a',
//         'b',
//       ],
//       // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
//       '/': [
//         '',
//         'home1',
//         'home2',
//         'home3',
//       ],
//     },
//   }
// };
//
