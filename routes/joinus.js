var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'joinus'
  };
  await ctx.render('joinus', {

  });
})
module.exports = router;
