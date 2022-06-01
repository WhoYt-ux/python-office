module.exports = {
    title: 'python-office',// 设置网站标题
    description: 'python-office自动化办公',
    base: '/',// 设置站点根路径
    dest: './docs',  // 设置输出目录
    head: [],
    plugins: [],
    themeConfig: {
        // 添加导航栏
        nav: [
            {text: '主页', link: '/'},
            {text: '交流群', link: 'http://www.python4office.cn/wechat-group/'},
            {text: '视频教程', link: 'https://www.bilibili.com/video/BV1pT4y1k7FH'},
            {text: 'GitHub', link: 'https://github.com/CoderWanFeng/python-office'},

        ],
        lastUpdated: 'Last Updated',
        sidebar: [
            '/',
            {
                title: '下载安装',
                children: [
                    '/guide/office',
                ]
            },
            {
                title: '基本功能',
                children: [
                    '/office/word',
                    '/office/excel',
                ]
            },
            {
                title: '常见问题',
                children: [
                    '/qaq/qaq',
                ]
            }

        ],
    }
}
