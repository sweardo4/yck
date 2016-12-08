var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'index'
  };
  await ctx.render('index', {
      
  });
})
module.exports = router;
