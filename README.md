## 项目开始
启动
```
npm start
```
打开 http://localhost:3000

## 服务器部署

需要安装pm2 监控服务器后台进程

```
npm install -g pm2 //安装

pm2 start file.js //运行并开启监控

pm2 list 查看所有监控进程

pm2 --help //其他请查看帮助

```
使用 mysql
```
mysql -uroot //登录
```
实现远程连接
```
mysql> GRANT ALL PRIVILEGES ON *.* TO root@"%" IDENTIFIED BY "root";
mysql> flush privileges;
```
并修改/etc/mysql/my.cnf 文件
把下面内容注释掉
```
# bind-address:127.0.0.1
```
重启mysql服务器


## 问题总结
### html问题
inline-block 存在bug
