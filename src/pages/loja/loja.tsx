import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router";
import Loja from "../../models/loja";
import Produto from "../../models/produto";
import lojasService from "../../services/lojas";

type Params = {
    id: string
}

const LojaPage: FunctionComponent = () => {
    const { id } = useParams<Params>()

    const [loja, setLoja] = useState <Loja | undefined>()


    useEffect(
        () => {
            lojasService.ler(id, (loja) => {
                setLoja(loja)
            })

        }
    )

    return(
        <h1>Oi {loja?.nome} </h1>
    )
}


export default LojaPage;