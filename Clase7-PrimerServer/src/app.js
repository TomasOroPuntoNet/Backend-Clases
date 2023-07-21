import express from 'express';

const app = express();
const PORT = 8080;
const usuarios = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World with Express');
});

app.get("/api/usuarios/", (req, res) => {
    res.json({message: 'Exitoso', data: usuarios})

app.post("/api/usuarios/", (req, res) => {
    const {id,name, lastname, email, password} = req.body;

    if(!name || !lastname || !email || !password){
        return res.status(400).json({message: 'Faltan datos'})
    }else{
        let usuario = {
            id: id,
            name: name,
            lastname: lastname,
            email: email,
            password: password
        }
        let existUser = usuarios.findIndex((user) => user.id === id)
        if(existUser === -1){
            usuarios.push(usuario);
            res.json({message: 'Usuario Agregado', data: usuario})
        }else{
            res.status(409).json({message: 'El Usuario Ya Existente', data: req.body})
        }
        // usuarios.push(usuario);
        // res.json({message: 'Usuario Agregado', data: req.body})
        }
    

    });
})

app.put("/api/usuarios/:uid", (req, res) => {
    const {uid} = req.params;
    const {id,name, lastname, email, password} = req.body;
    let existUser = usuarios.findIndex((user) => user.id === uid)
    if(existUser === -1){
        res.status(409).json({message: 'El Usuario No Existente', data: req.body})
    }else{
        if(!name || !lastname || !email || !password){
            return res.status(400).json({message: 'Faltan datos'})
        }else{
            let usuario = {
                id,
                name: name,
                lastname: lastname,
                email: email,
                password: password
            }
            usuarios[existUser] = usuario;
            res.json({message: 'Usuario Modificado', data: req.body})
        }
    } 

})

// app.delete("/api/usuarios/:uid", (req, res) => {
//     const { uid } = req.params;
  
//     // Encuentra el índice del usuario en el arreglo usuarios
//     const index = usuarios.findIndex((user) => user.id === uid);
  
//     // Si no se encuentra el usuario, devuelve un código de estado 404
//     if (index === -1) {
//       return res.status(404).json({ message: 'El Usuario No Existente, verifique el ID' });
//     }
  
//     // Elimina el usuario del arreglo usuarios usando el índice
//     usuarios.splice(index, 1);
  
//     // Devuelve un código de estado 200 y un mensaje de éxito
//     return res.status(200).json({ message: 'Usuario Eliminado exitosamente' });
//   });
  
app.delete("/api/usuarios/:uid", (req, res) => {
    const {uid} = req.params;
    let existUser = usuarios.findIndex((user) => user.id === uid)
    if(existUser === -1){
        return res.status(404).json({message: 'El Usuario No Existente, verifique el ID'});
    }else{
        usuarios.splice(existUser, 1);
        // usuarios.filter((user) => {
        // //     user.id === uid
        return res.status(200).json({message: 'Usuario Eliminado exitosamente'});
    }
});




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

//Que ocurre ?

// Cuando se inicia el servidor Express, se configura para escuchar en un puerto específico y esperar solicitudes entrantes.
// Un cliente realiza una solicitud POST a la ruta "/api/usuarios/" del servidor.
// El middleware express.json() analiza el cuerpo de la solicitud para extraer los datos enviados en formato JSON. Luego, el middleware express.urlencoded() analiza el cuerpo de la solicitud para extraer los datos codificados en URL.
// La función de enrutamiento asociada a la ruta "/api/usuarios/" se activa.
// La función de controlador asociada a la ruta se ejecuta. En este caso, el controlador extrae los valores de name, lastname, email y password del objeto req.body.
// Se verifica si alguno de los campos name, lastname, email o password está vacío. Si alguno de ellos está vacío, se devuelve una respuesta con un código de estado 400 (Bad Request) y un objeto JSON indicando que faltan datos.
// Si todos los campos tienen valores, se crea un objeto usuario con las propiedades name, lastname, email y password.
// Se busca en el arreglo usuarios si ya existe un usuario con el mismo id que el nuevo usuario. Si no se encuentra ningún usuario con el mismo id, se agrega el nuevo usuario al arreglo usuarios.
// Se devuelve una respuesta con un código de estado 200 (OK) y un objeto JSON que contiene un mensaje indicando que el usuario ha sido agregado y los datos del usuario agregado.
// Si se encuentra un usuario con el mismo id, se devuelve una respuesta con un código de estado 409 (Conflict) y un objeto JSON que contiene un mensaje indicando que el usuario ya existe y los datos del usuario existente.
// La respuesta se envía al cliente que realizó la solicitud.
// En resumen, el proceso implica recibir la solicitud, analizar los datos enviados, validar los datos, agregar el usuario al arreglo usuarios si es nuevo y enviar una respuesta al cliente indicando el resultado de la operación.