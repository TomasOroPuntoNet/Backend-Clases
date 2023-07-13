//hands on lab
const fs = require("fs").promises;
const crypto = require("crypto");

class userManager {
    constructor() {
        this.users = [];
    }
    createUser(name, password, username, lastname) {
        const user = {
            id: this.users.length + 1,
            name,
            lastname,
            username,
            password: crypto.createHash("sha256").update(password).digest("hex")
        };
        
        if(
            name === undefined ||
            lastname === undefined ||
            username === undefined ||
            password === undefined
        ){
            throw new Error("Faltan datos");
        }
        this.users.push(user);
        }
    getUsers() {
        return this.users;
    }
    validateUser(username, password) {
        let isUserInDatabase = this.users.findIndex(dato => dato.username = username);
        if(isUserInDatabase == -1){
            console.log("Por favor verifique, algo ha pasado");
        }else{
            let user = this.users[isUserInDatabase];
            if(user.password === password){
                console.log("Bienvenido" + user.username);
            }else{
                console.log("Contraseña incorrecta");
            }
        } // }}else{
        //     this.users.forEach((dato) => {
        //         console.log(
        //             "nombre:"+ dato.username,
        //             "apellidos:"+ dato.lastname,
        //             "username:"+ dato.username,
        //             "password:"+ dato.password
        //         );
        //     })
        // }
    }
    
}

let coderHouseUsers = new userManager();
coderHouseUsers.createUser("coderhouse", " MEndez", "Gvz2W@example.com", "coderhouse");

console.log(coderHouseUsers.getUsers());
coderHouseUsers.validateUser("Gvz2W@example.com", "coderhouse");
coderHouseUsers.validateUser("Gvz2W@example.com", "MEndez");