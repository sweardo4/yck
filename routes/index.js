var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '易创客'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
