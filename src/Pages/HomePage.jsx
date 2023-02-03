import { Link,Outlet } from "react-router-dom"

function HomePage(){
    return(
        <>
            <h1>Agenda</h1>
            <form>
                <input type="text"></input>
                <input type="submit" value="pesquisar"></input>
            </form>

            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/calendario">Calendario</Link></li>
                    <li><Link to="/agenda/kennedy">Agenda</Link></li>
                    <li><Link to="/agenda/outro">Agenda</Link></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        
        </>
    )
}

export default HomePage