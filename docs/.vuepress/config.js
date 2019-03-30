module.exports = {
    title: '杯酒故事', // 设置网站标题
    description: '我有故事，你有酒么？', //描述
    dest: './dist',   // 设置输出目录
    base:'/blog/',
    port: 2233, //端口
    themeConfig: { //主题配置
      // 添加导航栏
      nav: [
        { text: '主页', link: '/' }, // 导航条
        { text: '组件文档', link: '/baseComponents/' },
        { text: '知识库', link: '/knowledge/' },
        { text: 'github',        // 这里是下拉列表展现形式。
          items: [
            { text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
            { text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
          ]
        }
      ],
      // 为以下路由添加侧边栏
      sidebar:{
        '/baseComponents/': [
          {
            title: '布局类组件',
            collapsable: true,
            children: [
              'base/test1',
              'base/test2',
              'base/test3',
              'base/test4',
            ]
          },
          {
            title: '可视化组件',
            collapsable: true,
            children: [
            ]
          },
          {
            title: '工具类组件',
            collapsable: true,
            children: [
            ]
          },
          {
            title: '方法类函数',
            collapsable: true,
            children: [
            ]
          }
        ],
        '/knowledge/': [
          {
            title: 'CSS知识库',
            collapsable: false,
            children: [
            ]
          },
          {
            title: 'JS知识库',
            collapsable: false,
            children: [
            ]
          },
          {
            title: 'node知识库',
            collapsable: false,
            children: [
            ]
          },
          {
            title: 'vue知识库',
            collapsable: false,
            children: [
            ]
          }
        ]
      }
    }
  }