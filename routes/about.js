var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'abc'
  };
  await ctx.render('about', {
  });
})
module.exports = router;