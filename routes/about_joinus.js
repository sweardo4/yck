var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '加入我们'
  };
  await ctx.render('about_joinus', {
  });
})
module.exports = router;
