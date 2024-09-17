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
          <p>Novidades</p>
        </span>
        <span>
          <p>Categorias</p>
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
      
    </div>
  );
}
