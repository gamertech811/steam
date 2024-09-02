import "./navbar.css";

export default function NavBar() {
  return (
    <gridnav>
      <span>
        <a href="/" id="acoisado steamlogo">
          <img src="/steam.png" id="steamlogo"></img>
        </a>
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
          <span id="hoverzinho">
            <p className="trecoco">mercado noturno</p>
            <p className="trecoco">lei baba</p>
            <p className="trecoco">sarrada</p>
            <p className="trecoco">kjesuita</p>
          </span>
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
