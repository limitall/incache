const koa = require('koa');
const apiRoutes = require('./routes/index');
const InCache = require('../../src/incache');
const cache = new InCache({
    filePath: __dirname +'/.incache-koa'
});
const app = new koa();

app.context.cache = cache;

app.use(apiRoutes.routes());

app.listen(3188, '127.0.0.1');

function randomData(keyNumber, dataAmount) {
  const testArray = [];

  for(let k=0; k<keyNumber; k++){

    testArray.push([]);

    for(let i=0; i<dataAmount; i++){
      testArray[k].push({ id: i+1, name: `test-${i+1}` });
    }

    cache.set(`${k}`, testArray[k]);
  }
}

randomData(5, 500);
