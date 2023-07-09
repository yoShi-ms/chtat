import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })
const array = []
wss.on('connection', function connection(ws) {
  ws.on('error', console.error)
  // 推入数组
  array.push(ws)
  ws.on('message', function message(data) {
    array.forEach(item => item.send(data.toString()))
    console.log('received: %s', data)
  })

  ws.send('成功连接，可以聊天啦')
})
