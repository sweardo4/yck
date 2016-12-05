var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'newsinfo'
  };
  await ctx.render('news-info', {
  });
})
module.exports = router;
