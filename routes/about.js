var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '公司简介'
  };
  await ctx.render('about', {
  });
})
module.exports = router;
