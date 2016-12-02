const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const static=require('koa-static');

const app = new Koa();


// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});


// add router middleware:
app.use(router.routes());
app.use(static('./v2/'))

app.listen(3000);
console.log('app started at port 3000...');