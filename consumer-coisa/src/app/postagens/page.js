import { getPostagem } from '@/service/postagem';
import "./../components/styles/body.css"

export default async function Home() {
    const response = await getPostagem();
    const postagens = response.body.postagem;
    return (
        <div>
            <h1 className='center' id='pad'>Lista de postagens</h1>
            {postagens.map(postagem => (
                <div className='center' key={postagem.id}>
                    <h1>{postagem.titulo}</h1>
                    <a className='btnver' href={`/postagens/${postagem.id}`}>Ver postagem</a>
                </div>
            ))}
        </div>
    );
}