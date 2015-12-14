/**
 * links data
 * @type {*[]}
 */
(function () {
    var defaultIcon = 'http://7xp4vm.com1.z0.glb.clouddn.com/favicon.png';
    // 技术站点
    var tech = [
        {
            'name': 'TNW News',
            'hdimg': defaultIcon,
            'url': 'http://thenextweb.com/'
        },
        {
            'name': 'GeekPark',
            'hdimg': defaultIcon,
            'url': 'http://perfplanet.com/'
        },
        {
            'name': 'PerfPlanet',
            'hdimg': defaultIcon,
            'url': 'http://www.perfplanet.com/'
        },
        {
            'name': 'CSDN',
            'hdimg': 'http://csdnimg.cn/public/favicon.ico',
            'url': 'http://www.csdn.net/'
        },
        {
            'name': '推酷',
            'hdimg': 'http://www.tuicool.com/favicon.ico',
            'url': 'http://www.tuicool.com/'
        },
        {
            'name': 'InfoQ',
            'hdimg': defaultIcon,
            'url': 'http://www.infoq.com/cn/javascript/'
        },
        {
            'name': '伯乐在线',
            'hdimg': 'http://blog.jobbole.com/favicon.ico',
            'url': 'http://blog.jobbole.com/'
        },
        {
            'name': '图灵社区',
            'hdimg': 'http://www.ituring.com.cn/favicon.ico',
            'url': 'http://www.ituring.com.cn/'
        },
        {
            'name': '极客标签',
            'hdimg': 'http://www.gbtags.com/gb/networks/themes/img/gbin1.ico',
            'url': 'http://www.gbtags.com/gb/gbcollection.htm'
        },
        {
            'name': 'segmentfault',
            'hdimg': 'http://segmentfault.com/favicon.ico',
            'url': 'http://segmentfault.com/blogs'
        },
        {
            'name': 'V2EX',
            'hdimg': 'https://www.v2ex.com/favicon.ico',
            'url': 'https://www.v2ex.com/'
        }

    ];

    // 前端博客
    var blog = [
        {
            'name': 'w3ctech',
            'hdimg': 'http://www.w3ctech.com/favicon.ico',
            'url': 'http://www.w3ctech.com/'
        },
        {
            'name': 'w3cplus',
            'hdimg': 'http://cdn1.w3cplus.com/cdn/farfuture/6I7SmeJ6bvYzRevkkH6pjf9WnDTRa7YEBbsCyi6dPro/mtime:1414079820/sites/all/themes/w3cplusV2/favicon.ico',
            'url': 'http://www.w3cplus.com/'
        },

        {
            'name': 'sitepoint',
            'hdimg': defaultIcon,
            'url': 'http://www.sitepoint.com/'
        },
        {
            'name': 'smashing magazine',
            'hdimg': defaultIcon,
            'url': 'http://www.smashingmagazine.com/'
        },
        {
            'name': '次碳酸钴',
            'hdimg': 'http://www.web-tinker.com/favicon.ico',
            'url': 'http://www.web-tinker.com/'
        },
        {
            'name': 'AlloyTeam',
            'hdimg': 'http://www.alloyteam.com/favicon.ico',
            'url': 'http://www.alloyteam.com/'
        },
        {
            'name': 'FEX',
            'hdimg': 'http://fex.baidu.com/favicon.ico',
            'url': 'http://fex.baidu.com/'
        },
        {
            'name': 'TaoBaoUED',
            'hdimg': 'http://ued.taobao.org/favicon.ico',
            'url': 'http://ued.taobao.org/blog/'
        },
        {
            'name': '奇舞团',
            'hdimg': 'http://www.75team.com/favicon.ico',
            'url': 'http://www.75team.com/'
        },
        {
            'name': 'three.js',
            'hdimg': defaultIcon,
            'url': 'http://threejs.org/'
        }
    ];

    // 设计网站
    var design = [
        {
            'name': '站酷网',
            'hdimg': 'http://www.zcool.com.cn/favicon.ico',
            'url': 'http://www.zcool.com.cn/'
        },
        {
            'name': 'UI中国',
            'hdimg': 'http://www.ui.cn/favicon.ico',
            'url': 'http://www.ui.cn/'
        },
        {
            'name': '腾讯CDC',
            'hdimg': 'http://cdc.tencent.com/favicon.ico',
            'url': 'http://cdc.tencent.com/'
        },
        {
            'name': '花瓣',
            'hdimg': 'http://huaban.com/favicon.ico',
            'url': 'http://huaban.com/'
        },
        {
            'name': '优设网',
            'hdimg': 'http://www.uisdc.com/favicon.ico',
            'url': 'http://www.uisdc.com/'
        },
        {
            'name': '黄蜂网',
            'hdimg': 'http://woofeng.cn/favicon.ico',
            'url': 'http://woofeng.cn/'
        },
        {
            'name': '365PSD',
            'hdimg': 'http://cn.365psd.com/favicon.ico',
            'url': 'http://cn.365psd.com/'
        },
        {
            'name': 'dribbble',
            'hdimg': defaultIcon,
            'url': 'https://dribbble.com/'
        },
        {
            'name': 'tympanus-codrops',
            'hdimg': 'http://tympanus.net/favicon.ico',
            'url': 'http://tympanus.net/codrops/'
        },
        {
            'name': 'abduzeedo',
            'hdimg': 'http://abduzeedo.com/files/favicon_0_0.ico',
            'url': 'http://abduzeedo.com/'
        },
        {
            'name': 'WA.DESIGN',
            'hdimg': 'http://www.huwayway.com/favicon.ico',
            'url': 'http://www.huwayway.com/index.html'
        },
        {
            'name': 'materialpalette',
            'hdimg': 'http://www.materialpalette.com/assets/favicon-194de522705d2d8afb93874e197fa6f14188290aaf3625007bf4774933901cc1.ico',
            'url': 'http://www.materialpalette.com'
        },
        {
            'name': 'colourco',
            'hdimg': 'http://colourco.de/favicon.ico',
            'url': 'http://colourco.de/'
        }

    ];

    // 资料学习 & 工具
    var doc = [
        {
            'name': 'JS Bin',
            'hdimg': defaultIcon,
            'url': 'http://jsbin.com/'
        },
        {
            'name': 'RunJS',
            'hdimg': 'http://runjs.cn/favicon.ico',
            'url': 'http://runjs.cn/code/dsl1y3ig'
        },
        {
            'name': 'caniuse',
            'hdimg': 'http://caniuse.com/favicon.ico',
            'url': 'http://caniuse.com/'
        },
        {
            'name': 'csstriggers',
            'hdimg': 'http://csstriggers.com/favicon.ico',
            'url': 'http://csstriggers.com/'
        },
        {
            'name': 'javascripting',
            'hdimg': defaultIcon,
            'url': 'http://www.javascripting.com/'
        },

        {
            'name': 'sassmeister',
            'hdimg': 'http://sassmeister.com/favicon.ico',
            'url': 'http://sassmeister.com/'
        },
        {
            'name': 'Devdocs',
            'hdimg': 'http://maxcdn.devdocs.io/images/icon-32.png',
            'url': 'http://devdocs.io/'
        },
        {
            'name': 'W3C',
            'hdimg': 'http://www.w3.org/2008/site/images/favicon.ico',
            'url': 'http://www.w3.org/TR/'
        },
        {
            'name': 'ES6 Book',
            'hdimg': 'http://es6.ruanyifeng.com/favicon.ico',
            'url': 'http://es6.ruanyifeng.com/'
        },
        {
            'name': '百度脑图',
            'hdimg': 'http://www.baidu.com/favicon.ico',
            'url': 'http://naotu.baidu.com/edit.html'
        },
        {
            'name': '百度识图',
            'hdimg': 'http://www.baidu.com/favicon.ico',
            'url': 'http://shitu.baidu.com/'
        },
        {
            'name': '谷歌搜图',
            'hdimg': defaultIcon,
            'url': 'https://www.google.com/intl/zh-CN/insidesearch/features/images/searchbyimage.html'
        }
    ];

    // 云服务商
    var service = [
        {'name': '阿里云', 'hdimg': 'http://www.aliyun.com/favicon.ico', 'url': 'http://www.aliyun.com/'},
        {'name': '新浪SAE', 'hdimg': 'http://sae.sina.com.cn/favicon.ico', 'url': 'http://sae.sina.com.cn/'},
        {'name': '七牛云', 'hdimg': 'https://portal.qiniu.com/favicon.ico', 'url': 'https://portal.qiniu.com/'},
        {'name': '友盟指数', 'hdimg': defaultIcon, 'url': 'http://www.umindex.com/'},
        {'name': 'nitrous', 'hdimg': defaultIcon, 'url': 'https://www.nitrous.io'}

    ];

    // 其他站点
    var other = [
        {
            'name': 'GitHub Star',
            'hdimg': defaultIcon,
            'url': 'https://github.com/stars'
        },
        {
            'name': 'Philip Walton',
            'hdimg': 'http://philipwalton.com/favicon.ico',
            'url': 'http://philipwalton.com/'
        },
        {
            'name': 'Paul Irish',
            'hdimg': 'http://www.paulirish.com/favicon.ico',
            'url': 'http://www.paulirish.com/'
        },
        {
            'name': '张鑫旭',
            'hdimg': 'http://www.zhangxinxu.com/favicon.ico',
            'url': 'http://www.zhangxinxu.com/wordpress/'
        },
        {
            'name': 'EVAN YOU',
            'hdimg': 'http://blog.evanyou.me/favicon.png',
            'url': 'http://blog.evanyou.me/'
        }
    ];

    var data = {
        tech: tech,
        blog: blog,
        design: design,
        doc: doc,
        service: service,
        other: other
    };

    var createLinks = function (data) {
        var key, i, obj, len, tmpl;
        for (key in data) {
            obj = data[key];
            tmpl = '';
            for (i = 0, len = obj.length; i < len; i++) {
                tmpl += '<li><a target="_blank" href="'
                    + obj[i]['url'] + '">'
                    + '<img src="' + obj[i]['hdimg'] + '"><em>'
                    + obj[i]['name'] + '</em></a></li>'

            }
            $("#link-" + key + " .data-li").append(tmpl);
        }
    };

    createLinks(data);
})();