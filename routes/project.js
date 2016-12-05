var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'project'
  };
  await ctx.render('project', {
  });
})
module.exports = router;
