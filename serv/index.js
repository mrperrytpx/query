const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();


app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "*" }));

const initialData = [
    {
        "id": 1,
        "title": "Task 1",
        "body": "Body of task one",
        "completed": true
    },
    {
        "id": 2,
        "title": "Task 2",
        "body": "Body of task two",
        "completed": false
    },
    {
        "id": 3,
        "title": "Task 3",
        "body": "Body of task three",
        "completed": true
    }
];

app.get("/tasks", async (req, res) => {
    let data;
    setTimeout(() => data = initialData, 1000);
    res.status(200).json(data);
});

app.delete("/tasks/:id", async (req, res) => {
    const id = parseInt(req.id);
    try {
        const newData = initialData.filter((id) => initialData.id !== id);
        if (newData.length === initialData.length) throw new Error(`No task with id ${id}`);
        res.status(204).json(newData);
    } catch (error) {
        res.status(400).json({ message: `${error.message}` });
    }
});

app.listen(3001, () => console.log("Yes radi"));
