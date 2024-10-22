import {getPostagem} from '@/service/postagem';
import "./../../components/styles/body.css"

export default async function Home({params}) {
    const {id} = await params;
    const response = await getPostagem(id);
    if(response!=null){
        const postagem = response.body.postagem;
        return (
            <div>
                <a id='voltar' href="/postagens">Voltar</a>
                <div className='center meio' key={postagem.id}>
                    <h1 id='rem'>{postagem.titulo}</h1>
                    <p id='bold'>{postagem.descricao}</p>
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <a id='voltar' href="/postagens">Voltar</a>
                <div>
                    <h1>Postagem não encontrada</h1>
                </div>
            </div>
        );
    }
}