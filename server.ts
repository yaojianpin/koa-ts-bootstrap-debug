import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-body';
import serve from 'koa-static';
import mount from 'koa-mount';
import logger from 'koa-logger';
import render from 'koa-art-template';
import routers from './routers';

const app = new Koa();

// error handing
app.use( async (ctx: any, next) => {
    try{
        await next();
        if(ctx.status === 404) {
            ctx.throw(404)
        }
    } catch(e) {
        let { status, message, stack } = e;
        if(!status) {
            status = 500;
        }
        console.log(status, message, stack);
        await ctx.render('error', { status, message, stack });
    }
});

// art-template
render(app, {
    root: __dirname + '/views',
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
  });

// static
app.use(mount("/static",  serve(__dirname + '/static')));

// logger
app.use(logger());

// body
app.use(koaBody());

// routers
const router = Router();
routers.forEach(r => router[r.method](r.path, r.action));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
