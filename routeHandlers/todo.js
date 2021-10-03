const express = require('express');
const Todo = require('../schemas/todoSchema');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allTodo = await Todo.find();

        res.status(200).json({
            data: allTodo,
            message: 'succesfull !',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        res.status(200).json({
            data: todo,
            message: 'succesfull !',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);

    try {
        await newTodo.save();

        res.status(200).json({
            data: newTodo,
            message: 'Todo was added succesfully!',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/all', async (req, res) => {
    try {
        const postTodos = await Todo.insertMany(req.body);

        res.status(200).json({
            data: postTodos,
            message: 'Todos were added succesfully!',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        res.status(200).json({
            data: updatedTodo,
            message: 'Todo updated succesfully !',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndRemove(req.params.id);

        res.status(200).json({
            data: deletedTodo,
            message: 'Todo deleted succesfully !',
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
