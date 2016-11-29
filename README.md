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
>use mysql;
>select host,user,password from user;//查看连接状态
>update user set host = '%' where user = 'root';
```
