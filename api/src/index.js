import express from 'express'
import cors from 'cors'
import { TODO } from './todo.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/list', TODO.list)
app.post('/add', TODO.addTodo)
app.delete('/delete', TODO.deleteTodo)
app.post('/toggle', TODO.toggle)

app.listen(3001, () => console.log('⚡ servidor iniciado en puerto 3000'))