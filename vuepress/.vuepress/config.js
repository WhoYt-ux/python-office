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
            { text: '主页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/CoderWanFeng/python-office' },
            { text: '视频教程', link: 'https://www.bilibili.com/video/BV1pT4y1k7FH' },
        ],
        lastUpdated: 'Last Updated',
        sidebar:[
            '/',
            '/office/office',
            '/office/word',
            '/office/excel',
        ],
    }
}
