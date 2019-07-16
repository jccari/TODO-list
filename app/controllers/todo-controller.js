module.exports = function(app, db){
    return {
        list : (req, res) => {
            // let todoList = db.collection("todo-list").find();
            // res.send(todoList);
        },

        create : (req, res) => {
            console.log(req.body)
            var data = {
                owner: req.body.owner,
                status: req.body.status
            }    
            db.collection("todo-list").insertOne(data, (err, res) => {
                if ( err ) console.log(" Hubo un error guardando el elemento");
                console.log(data);
                console.log("Insertado correctamente");
            });
            //TODO: mostrar lista de elementos
            res.send( req.body.owner +" su tarea fue guardada");
        },

        detail: (req, res) => {
            //TODO
        },

        delete: (req, res) => {
            //TODO
        }   
    }
}