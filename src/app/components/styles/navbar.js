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

        <install id="containaire">
          <gg>
            <a href="https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe">
              <button id="inst">Instalar o Steam</button>
            </a>
            <a href="/" id="sessao">
              Iniciar sessão
            </a>
            |<a id="idioma">Idioma</a>
            <span id="merda">
              <p className="pau">pt-BR</p>
              <p className="pau">En</p>
              <p className="pau">Ge</p>
              <p className="pau" id="padd">xingling</p>
            </span>
          </gg>
        </install>
      </nav>
    </gridnav>
  );
}
