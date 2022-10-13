const express = require('express')
const compression = require('compression')
const app = express()

// 一定要把这行代码，写到 静态资源托管之前，否则gzip压缩不生效
app.use(compression())
app.use(express.static('./dist'))

app.listen(80, () => {
    // console.log('server running at http://127.0.0.1:3000');
    // 80端口时默认端口，直接访问127.0.0.1就能访问到
    console.log('server running at http://127.0.0.1');
})
