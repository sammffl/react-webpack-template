const RsaKey = '';
const Domains = {
    mock: '/',
    test: 'http://',
    uat: 'http://',
    prePro: 'http://',
    pro: 'http://',
};
export default {
    // mock/test/uat/prePro/pro
    // 设计的初衷是为了切换环境, 默认的domain会自动根据location判断。
    // 如果需要强制指定,如在开发环境访问测试环境数据,env 为test即可
    env: 'mock',
    get baseDomain() {
        return Domains[this.getEnv()];
    },
    getEnv() {
        return this.env || this.getEnvByHref() || 'pro';
    },
    isMock() {
        return this.getEnv() === 'mock';
    },
    getEnvByHref() {
        const link = location.href;
        let env = '';
        if (/localhost/ig.test(link) || /(\d+).(\d+).(\d+).(\d+)/.test(link)) {
            env = 'mock';
        } else if (/test/ig.test(link)) {
            env = 'test';
        } else if (/uat/ig.test(link)) {
            env = 'uat';
        } else if (/prePro/ig.test(link)) {
            env = 'prePro';
        }
        return env;
    },
    timeOut: 60000,
    RsaKey: ''
};

