var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '平台介绍'
  };
  await ctx.render('about_platform', {
  });
})
module.exports = router;
