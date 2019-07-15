import * as Koa from 'koa';
import { ioc } from "./ioc";
import * as koaBody from 'koa-body';

const app = new Koa();
ioc.init();
app.use(koaBody({ multipart: true }));
app.use(ioc.router.routes());
app.use(ioc.router.allowedMethods());

app.listen(3000);
