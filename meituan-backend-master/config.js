module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    notifyUrl: 'http://192.168.2.10:3000/v1/notify_url',      //支付异步通知地址
    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'ses',   //七牛云bucket
    AccessKey: 'NDLlkUYVPBVFCiuj1Ke3_7Zp1eh_RWOWqEdm85aw',   //七牛云accessKey
    SecretKey: 'YnMKVAsQc1KcBOWGY-S-DBqw4ueL_fqqVLmP7HY4',    //七牛云secretKey
    tencentkey: '4HNBZ-6ZFWX-UUG4F-ZRR7K-U4KMF-USFCW',        //腾讯位置secreKey
    tencentkey2: '4HNBZ-6ZFWX-UUG4F-ZRR7K-U4KMF-USFCW',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


