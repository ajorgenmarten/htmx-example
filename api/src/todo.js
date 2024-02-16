import { log } from 'console'
import crypto from 'crypto'

let TodoList = []

const list = (req, res) => {
    res.json({
        ok: true,
        data: TodoList
    })
}

const addTodo = (req, res) => {
    const todo = {
        id: crypto.randomUUID(),
        title: req.body.title,
        description: req.body.description,
        status: false
    }
    TodoList.push(todo)
    res.json({
        ok: true,
        data: todo,
        msg: "guardado"
    })
}

const deleteTodo = (req, res) => {    
    TodoList = TodoList.filter(x => x.id != req.query.id)
    res.json({
        ok:true,
        data: TodoList
    })
}

const toggle = (req, res) => {
    TodoList = TodoList.map(x => {
        if (x.id == req.query.id)
            x.status = !x.status
        return x
    })
    res.json({
        ok: true,
        data: TodoList
    })
}

export const TODO = {
    list, addTodo, deleteTodo, toggle
}