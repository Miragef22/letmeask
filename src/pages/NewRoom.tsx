import illustrationImg from '../assets/images/illustration.svg';
import loggoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';


export function NewRoom(){
    return(
        <div id="page-auth" >
            <aside>
                <img src={illustrationImg} alt="ilustraçâo representando perguntas e respostas" />
                <strong>Crie salas de peguntas &amp; respostas ao-vivo</strong>
                <p>Tire suas dúvidas em tempo real</p>
            </aside>
            
            <main> 
                <div className="main-content">
                    <img src={loggoImg} alt="letmeask" />
                    
                    <h2>Criar uma nova sala</h2>

                    <form>
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to='/'>clique aqui</Link>
                    </p> 
                    
                </div>
            </main>

        </div>
    )
}