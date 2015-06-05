/**
 * 服务的配置文件
 *
 * Created by v_zhaoxiaoqiang on 2015/6/1.
 */
var encoding = 'utf-8'; // 编码方式一定要在这里设置，下面很多地方会用到，切勿删除

module.exports = {
    encoding: encoding,                      // 编码设置
    defaultPort: 8899,                       // 服务启动的默认端口
    defaultPage: '/index.html',              // 默认页面
    servicePath: '../../service/',           // 动态服务的路径
    serviceRoutConfigPath: 'rout-config.js', // service下，用户自定义服务路由，可支持RESTful
    isAutoOpenDefaultPage: true,             // 服务启动后是否在浏览器中打开默认页面
    afterPortConflict: 'break',              // 端口冲突后：break停止启动，continue寻找可用端口继续启动
    staticFieldConfig: {                     // 静态文件配置
        html: {
            contentType: 'text/html; charset=' + encoding,
            encoding: encoding
        },
        xhtml: {
            contentType: 'text/html; charset=' + encoding,
            encoding: encoding
        },
        htm: {
            contentType: 'text/html; charset=' + encoding,
            encoding: encoding
        },
        css: {
            contentType: 'text/css; charset=' + encoding,
            encoding: encoding
        },
        js: {
            contentType: 'application/javascript; charset=' + encoding,
            encoding: encoding
        },
        json: {
            contentType: 'application/json; charset=' + encoding,
            encoding: encoding
        },
        md: {
            contentType: 'text/plain; charset=' + encoding,
            encoding: encoding
        },
        /****** 图片 ******/
        png: {
            contentType: 'image/png',
            encoding: 'binary'
        },
        gif: {
            contentType: 'image/gif',
            encoding: 'binary'
        },
        jpg: {
            contentType: 'image/jpg',
            encoding: 'binary'
        },
        jpeg: {
            contentType: 'image/jpeg',
            encoding: 'binary'
        },
        ico: {
            contentType: 'image/x-ico',
            encoding: 'binary'
        }
        // 更多对应关系可以在 http://tool.oschina.net/commons 找到
    }
};
