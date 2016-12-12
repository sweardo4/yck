var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'map'
  };
  await ctx.render('map', {
  });
})
module.exports = router;
