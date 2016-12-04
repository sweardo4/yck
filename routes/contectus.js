var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'contectus'
  };
  await ctx.render('contectus', {
  });
})
module.exports = router;
