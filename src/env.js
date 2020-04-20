let baseURL;
switch (process.env.NODE_ENV) { //这是 nodejs 的一个api
    case 'development':
        baseURL = 'http://localhost:8081/api/';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    
    default:
        baseURL = 'http://localhost:8081/api/#';
        break;
}

export default {
    baseURL
}