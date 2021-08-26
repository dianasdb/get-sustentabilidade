import axios from "axios";
import Loja from "../models/loja";

const lojasService = {
    ler: (id: string, callback:(loja:Loja) => void) => {
        axios.get<Loja>(`http://localhost:4000/api/lojas/${id}`)
        .then((res) => {
            const loja: Loja = res.data
            callback(loja)
        })
    } 
}

export default lojasService;