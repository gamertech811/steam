import "./navbar.css"

export default function NavBar() {
    return (
        <gridnav>
            <span>
                <img src="/steam.png" id="steamlogo"></img>
                <a href="/" id="acoisado">‎ </a>
            </span>
            <nav id="flexcaixa">
                

                <loja>
                    <a href="/">LOJA</a>
                    <span id="hoverzinho">
                        <p className="trecoco">inicio</p>
                        <p className="trecoco">lista de slaoq</p>
                        <p className="trecoco">coisa3</p>
                        <p className="trecoco">kamehameha</p>
                    </span>
                </loja>

                <comu>
                    <a href="/">COMUNIDADE</a>
                </comu>

                <sobre>
                    <a href="/">SOBRE</a>
                </sobre>

                <supor>
                    <a href="/">SUPORTE</a>
                </supor>

            </nav>
        </gridnav>
    );
}