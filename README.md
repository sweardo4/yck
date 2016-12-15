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



## lamp安装
php5.6 - 7.0
卸载原有php系统自带
```
sudo aptitude purge `dpkg -l | grep php| awk '{print $2}' |tr "\n" " "`
```
Add the PPA
```
sudo add-apt-repository ppa:ondrej/php
```
Install your PHP Version
```
sudo apt-get update
sudo apt-get install php5.6

```

问题
------
WARNING: add-apt-repository is broken with non-UTF-8 locales
```
sudo apt-get install -y language-pack-en-base
sudo LC_ALL=en_US.UTF-8 add-apt-repository ppa:ondrej/php
```
-------

apache2

```
sudo apt install apache2
sudo apt-get install libapache2-mod-php
```

----
mysql

删除 mysql
```
sudo apt-get autoremove --purge mysql-server-5.0
sudo apt-get remove mysql-server
sudo apt-get autoremove mysql-server
sudo apt-get remove mysql-common //这个很重要
上面的其实有一些是多余的。
清理残留数据
dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P
```
安装 mysql
```
sudo apt-get install mysql-server
sudo apt-get install mysql-client
sudo apt-get install php5-mysql
// 安装php5-mysql 是将php和mysql连接起来
一旦安装完成，MySQL 服务器应该自动启动。您可以在终端提示符后运行以下命令来检查 MySQL 服务器是否正在运行：
sudo netstat -tap | grep mysql
当您运行该命令时，您可以看到类似下面的行：

tcp 0 0 localhost.localdomain:mysql *:* LISTEN -
```
如果服务器不能正常运行，您可以通过下列命令启动它：

```
sudo /etc/init.d/mysql restart
```
进入mysql
```
$mysql -uroot -p 管理员密码
```
配置 MySQL 的管理员密码：
```
sudo mysqladmin -u root password newpassword
```
