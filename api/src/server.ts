<<<<<<< HEAD
import * as Koa from 'koa';
=======
import Koa from 'koa';
>>>>>>> 99dc85e4248fc68005e6b603b3cdb843463a4ad6
import { ioc } from "./ioc";

const app = new Koa();
ioc.init();
app.use(ioc.router.routes());
app.use(ioc.router.allowedMethods());

app.listen(3000);
