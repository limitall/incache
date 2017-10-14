const InCache = require('../../src/incache');

new InCache({
    autoLoad: true,
    filePath: 'cache.json'
}).on('beforeLoad', () => {
    console.log('before load');
}).on('load', (err, me) => {
    if(!err)
        console.log('load', me.get('a key'));
});