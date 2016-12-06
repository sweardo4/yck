var router = require('koa-router')();


router.get('/', function (ctx, next) {
  ctx.body = '<h1>user</h1>';
});

module.exports = router;
