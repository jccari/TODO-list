const todoController = require('./controllers/todo-controller')

module.exports = function (app, db){
    controller = todoController(app,db);
    
    app.get('/list', controller.list );

    app.post('/create', controller.create );

    app.get('/detail:id', controller.detail );

    app.delete('/delete:id', controller.delete );
}