module.exports = {
  title: 'Nan的学习笔记',
  description: '想详细记录下自己的学习状况，拒绝摆烂',
  theme: 'reco',
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    // nav: [{
    //     text: '首页',
    //     link: '/'
    //   },
    //   {
    //     text: '',
    //     items: [{
    //         text: 'Github',
    //         link: 'xxxxxx'
    //       },
    //       {
    //         text: '掘金',
    //         link: 'xxxxxxxx'
    //       }
    //     ]
    //   }
    // ],
    subSidebar: 'auto',
    sidebar: [{
        title: '关于',
        path: '/',
        collapsable: false, // 不折叠
        // children: [{
        //   title: "学前必读",
        //   path: "/"
        // }]
      },
      {
        title: "JS基础内容",
        path: '/jsBasic/prototype',
        collapsable: false, // 不折叠
        children: [{
          title: "原型和原型链",
          path: "/jsBasic/prototype"
        }, ],
      }
    ]
  }
}