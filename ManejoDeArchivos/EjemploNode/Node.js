import fs from "fs";

const datos = {
    pais: "Colombia",
    ciudad: "Bogota",
    provincia: "Cundinamarca",
}


async function promesa (){
    try{
        await fs.promises.writeFile("datosDePais.json", JSON.stringify(datos));
        let result = await fs.promises.readFile("datosDePais.json", "utf-8");
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
promesa();