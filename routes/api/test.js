var router = require('koa-router')();

router.get('/testapi', async function (ctx, next) {


	return 'testapi----------';
  ctx.state = {
    title: 'testapi'
  };
  return '123456';
})
module.exports = router;
