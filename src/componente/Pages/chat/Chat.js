import style from "../../Css/chatTela.module.css"
import francisco from "../../img/francisco.png"

function Chat(){
    return(
        <div className={style.chatTela}>
            <div className={style.colunaConversas}>
            {/* Row do input pesquisa */}
                <div className={style.rowInput}>
                   <input className={style.input} placeholder="pesquisar..."></input>
                </div>
                {/* Coluna das conversas */}
                <div className={style.chatColumn}>
                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    <div className={style.contactCard}>
                        <div className={style.photoBox}>
                            <img src={francisco} className={style.img}></img>
                        </div>
                        <div className={style.contactInfo}>
                            <h1 className={style.contactName}>Francisco de Almeida</h1>
                            <p className={style.lastMessage}>lorem ipsum dolor amet</p>
                        </div>
                    </div>

                    {/* fim */}
                </div>

            </div>
        </div>
    )
}

export default Chat