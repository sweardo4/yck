var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: '领导团队'
  };
  await ctx.render('about_lead', {
  });
})
module.exports = router;
