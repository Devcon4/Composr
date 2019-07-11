import Koa from 'koa';
import { ioc } from "./ioc";

const app = new Koa();
ioc.init();
app.use(ioc.router.routes());
app.use(ioc.router.allowedMethods());

app.listen(3000);
