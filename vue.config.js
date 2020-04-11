// 解析指令参数
const argv = JSON.parse(process.env.npm_config_argv);

// console.log("process.env.npm_config_argv值", argv)

const config = {};
// 获取自定义参数
let idx = 2;
const cooked = argv.cooked;
const length = argv.cooked.length;
while ((idx += 2) <= length) {
    config[cooked[idx - 2]] = cooked[idx - 1];
}

process.env.VUE_APP_PROJECT_ID = config['--projectId']
console.log("页面ID：" + process.env.VUE_APP_PROJECT_ID)
process.env.VUE_APP_PROJECT_DATA_URL = config['--projectDataUrl']
console.log("页面数据地址：" + process.env.VUE_APP_PROJECT_DATA_URL)

// VUE 平台配置内容
module.exports = {
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'dist_' + config['--projectId'] + "_" + config['--buildNumber'],
}
