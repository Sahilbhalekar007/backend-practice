const asyncHandler = require("express-async-handler")
const todo = require("../models/todo")

exports.addTodo = asyncHandler(async (req, res) => {
    await todo.create(req.body)
    res.json({ message: "Todo create Success" })
})
exports.getTodos = asyncHandler(async (req, res) => {
    const result = await todo.find(req.body)
    res.json({ message: "Todo fetch Success", result })
})
exports.updateTodos = asyncHandler(async (req, res) => {
    await todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo update Success" })
})
exports.deleteTodos = asyncHandler(async (req, res) => {
    await todo.findByIdAndDelete(req.params.id)
    res.json({ message: "Todo Delete Success" })
})