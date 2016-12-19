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



### lamp安装
#### php5.6 - 7.0
#### 卸载原有php系统自带
```
sudo aptitude purge `dpkg -l | grep php| awk '{print $2}' |tr "\n" " "`
```
#### Add the PPA
```
sudo add-apt-repository ppa:ondrej/php
```
Install your PHP Version
```
sudo apt-get update
sudo apt-get install php5.6

```

#### 问题
------
WARNING: add-apt-repository is broken with non-UTF-8 locales
```
sudo apt-get install -y language-pack-en-base
sudo LC_ALL=en_US.UTF-8 add-apt-repository ppa:ondrej/php
```
-------

### apache2

```
sudo apt install apache2
sudo apt-get install libapache2-mod-php
```

----
### mysql

#### 删除 mysql
```
sudo apt-get autoremove --purge mysql-server-5.0
sudo apt-get remove mysql-server
sudo apt-get autoremove mysql-server
sudo apt-get remove mysql-common //这个很重要
上面的其实有一些是多余的。
清理残留数据
dpkg -l |grep ^rc|awk '{print $2}' |sudo xargs dpkg -P
```
#### 安装 mysql
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
#### 如果服务器不能正常运行，您可以通过下列命令启动它：

```
sudo /etc/init.d/mysql restart
```
进入mysql
```
$mysql -uroot -p 管理员密码
```
#### 配置 MySQL 的管理员密码：
```
sudo mysqladmin -u root password newpassword
```



#### laravel 生产环境部署访问
```
php artisan serve --host=some.other.domain --port=8001

```


## 安装Composer

安装Composer以及使用Packagist中国全量镜像（全局安装/全局配置）
进入Composer官网下载页面，在页面最下方Manual Download区域选择需要的版本下载。
将下载的composer.phar复制到PHP的安装目录下面，也就是和php.exe在同一级目录。
在 PHP 安装目录下新建一个composer.bat文件，并将下列代码保存到此文件中。
@php "%~dp0composer.phar" %*
打开一个命令行窗口试一试执行composer --version看看是否正确输出版本号。

打开命令行窗口执行如下命令

composer config -g repo.packagist composer https://packagist.phpcomposer.com
至此Composer的安装以及配置完成

Laravel安装
打开命令行窗口执行d:再执行 cd xampp\htdocs进入网站目录 再执行如下代码创建一个名为ams的Laravel项目（项目名自定）

composer create-project laravel/laravel ams --prefer-dist
以下内容为Apache虚拟主机配置，目的是为了模拟域名访问，如果不需要此功能请直接在浏览器输入localhost/ams/public，如果能正常显示Laravel5欢迎界面(效果图在本文最下方)，恭喜你环境已经配置完毕。欢迎界面加载了谷歌的字体文件，所以第一次打开可能需要一定加载时间。
开启rewrite和vhost,在httpd.conf中找到

#LoadModule rewrite_module modules/mod_rewrite.so
#LoadModule vhost_alias_module modules/mod_vhost_alias.so
#Include conf/extra/httpd-vhosts.conf
将前面的#去掉，如果没有#，保持不变即可。

找到DocumentRoot "D:/xampp/htdocs"附近的<Directory>标签对，将内容改成如下
<Directory />
 AllowOverride all
 Require all granted
</Directory>
进入D:\xampp\apache\conf\extra目录内的httpd-vhost.conf，再最后添加
<VirtualHost *:80>
  ##ServerAdmin webmaster@dummy-host2.example.com
  DocumentRoot "D:\\xampp\\htdocs\\ams\\"
  ServerName ams.com
  ##ErrorLog "logs/dummy-host2.example.com-error.log"
  ##CustomLog "logs/dummy-host2.example.com-access.log" common
</VirtualHost>
进入C:\Windows\System32\drivers\etc目录内的hosts文件，在后面加上127.0.0.1       ams.com

浏览器输入http://ams.com/public测试能否正常显示Laravel5欢迎页

文／QFZJB（简书作者）
原文链接：http://www.jianshu.com/p/2836017b5348
著作权归作者所有，转载请联系作者获得授权，并标注“简书作者”。
