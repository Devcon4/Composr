import Koa from 'koa';
import Router from 'koa-router';
const app = new Koa();

const router = new Router();

router.get('/test', ctx => {
  ctx.body = 'Test!';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
