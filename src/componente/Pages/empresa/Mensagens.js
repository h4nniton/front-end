import HeaderOficial from '../../Bases/HeaderOficial.js'
import NavBar from '../../Bases/NavBar2.js'
import Chat from "../chat/Chat.js"
import Style from "../../Css/chat.module.css"

function Mensagens (){
    return (
        <div>
            <HeaderOficial/>
            <div className={Style.tela}>
                <NavBar/>
                <div className={Style.Chat}>
                <Chat/>
                </div>
            </div>

        </div>
    )
}

export default Mensagens