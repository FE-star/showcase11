
const Koa = require('koa');
const app = new Koa();

// app.use(async (ctx, next) => {
//   console.log(1);
//   await next();
//   console.log(2);
// });

// app.use(async (ctx, next) => {
//   console.log(3);
//   await next();
//   console.log(4);
// });

app.use(async (ctx, next) => {
  ctx.body = 'Hello World';
});

// app.use(require('./koa-error'))

// process.on('unhandledRejection', (err) => {
//   console.error(`unhandledRejection: ${err.message}, stack: ${err.stack}`);
// });

// process.on('uncaughtException', (err) => {
//   console.error(`uncaughtException: ${err.message}, stack: ${err.stack}`);
// });

app.listen(3000);
