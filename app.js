const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');
const about = require('./routes/about');
const newslist = require('./routes/newslist');

const db = require('./config/mysql');
const mysql = require('mysql');
const connection = mysql.createConnection(db.connection);
connection.connect(function(err){
    if(err){
        console.error('err connection:'+err.stack);
        return;
    }
    console.log('connection id :' + connection.threadId);
})
connection.end();



// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/about', about.routes(), about.allowedMethods());
router.use('/newslist', newslist.routes(), newslist.allowedMethods());
router.use('/join', join.routes(), join.allowedMethods());
router.use('/project', project.routes(), project.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;
