var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'about'
  };
  await ctx.render('about', {
  });
})
module.exports = router;
