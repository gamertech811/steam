import Script from "next/script";

export default function Home() {
  return (
    <div>
      <div id="align">
        <span>
          <p id="rapido">Sua Loja</p>
          <lojahover>
            <a href="/">Pagina inicial</a>
            <a href="/">Recomendaçoes</a>
            <a href="/">Recentes</a>
            <a href="/" id="pad">
              Curadores
            </a>
          </lojahover>
        </span>
        <span>
            <p id="rapido">Novidades</p>
            <lojahover>
              <a href="/">Lancamentos</a>
              <a href="/">Populares</a>
              <a href="/">Para Voce</a>
              <a href="/" id="pad">Escolhas da Comunidade</a>
            </lojahover>
        </span>
        <span>
            <p id="rapido">Jogos</p>
            <lojahover>
              <a href="/">Valorant</a>
              <a href="/">CS2</a>
              <a href="/">Brawhalla</a>
              <a href="/">Hollow Knight</a>
              <a href="/">Brawl Stars</a>
              <a href="/" id="pad">Free Fire</a>
            </lojahover>
        </span>
        <span>
          <p>Loja de Pontos</p>
        </span>
        <span>
          <p>Notícias</p>
        </span>
        <span>
          <p>Laboratório</p>
        </span>
        <espaco></espaco>
        <span id="spancado">
          <input type="text" id="pesquisar" placeholder="procurar"></input>
          <img src="/semmouse.png" id="pesq"></img>
        </span>        
      </div>
      <div id="teste">
      <div className="www" id="ww">
      <img src="/cs.jpg"></img>
          <div id="black">
            <p>CS2</p>
            <h3>oi ze do grau 123 é nois coroa fera uhullll beleza arislsls ald waa what your name uau sem vergonha lele da cuca.<br></br><br></br>Baixe ja    o:</h3>
          </div>  
      </div>
        <caixinhas>
          <div className="categorias"></div>
          <div className="categorias"></div>
          <div className="categorias"></div>
          <div className="categorias"></div>
        </caixinhas>
        
      </div>
    </div>
  );
}
