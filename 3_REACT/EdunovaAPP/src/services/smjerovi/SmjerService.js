import { smjerovi } from "./SmjerPodaci";

// 1/4 Read od CRUD
async function get() {
    return {data: smjerovi}
}

async function dodaj(smjer){
    if(smjerovi.length>0){
        smjer.sifra =smjerovi[smjerovi.length - 1].sifra + 1
    }else{
        smjer.sifra = 1
    }
    
    smjerovi.push(smjer)
}

export default{
    get,
    dodaj
}