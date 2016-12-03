var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'join'
  };
  await ctx.render('join', {
  });
})
module.exports = router;
