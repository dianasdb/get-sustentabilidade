import axios from "axios";
import Loja from "../models/loja";
import Produto from "../models/produto";


const lojasService = {
    ler: (id: string, callback:(loja:Loja) => void) => {
        axios.get<Loja>(`http://localhost:4000/api/lojas/${id}`)
        .then((res) => {
            const loja: Loja = res.data
            callback(loja)
        })
    },
    lerTodosProdutos:(id:string, callback:(produtos:Produto[]) => void ) => {
        axios.get<Produto[]>(`http://localhost:4000/api/lojas/${id}/produtos`)
        .then((res) => {
            const produtos: Produto[] = res.data
            callback(produtos)
        })    
    } 
}

export default lojasService;