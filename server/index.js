const express = require('express')
const app = express()
const ctrl = require('./controllers/messages_controller')
app.use(express.static('./public/build'))

app.use(express.json())



app.post('/api/messages/', ctrl.create)

app.get('/api/messages', ctrl.read)

app.put('/api/messages/:id', ctrl.update)

app.delete('/api/messages/:id', ctrl.delete)



const port = 3001
app.listen(port, ()=>{console.log(`runnin on port ${port} like a badass`)})
