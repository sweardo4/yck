var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'newslist'
  };
  await ctx.render('news-list', {
  });
})
module.exports = router;
