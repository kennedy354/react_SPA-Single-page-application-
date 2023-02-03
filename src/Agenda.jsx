import { useParams } from "react-router-dom"

function Agenda(){
    const { nome } = useParams()
    return(<h3>agenda {nome}</h3>)
}

export default Agenda