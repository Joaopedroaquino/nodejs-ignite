const { request, response } = require('express');
const express = require('express');

const app = express();
app.use(express.json());

app.get("/courses", (request, response) => {
    return response.json({
        cursos:
            ["Curso 1", "Curso 2", "Curso 3",]
    });
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json({
        cursos:
            ["Curso 1", "Curso 2", "Curso 3", "Curso 4"]
    });
});

app.put("/courses/:id", (request, response) => {
    return response.json({
        cursos:
            ["Curso 1", "Curso 5", "Curso 3"]
    });

});

app.patch("/courses/:id", (request, response) => {
    return response.json({
        cursos:
            ["Curso 1", "Curso 5", "Curso 3"]
    });
});

app.delete("/courses/:id", (request, response) => {
    return response.json({
        cursos:
            ["Curso 1", "Curso 2"]
    });
});

app.listen(3333);

console.log('Sever running');