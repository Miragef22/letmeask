//importação de imagens 
import illustrationImg from '../assets/images/illustration.svg';
import loggoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

//importação da estilização
import '../styles/auth.scss';

//importação de componentes
import { Button } from '../components/Button';

//importação de bibilhotecas
import { useNavigate } from 'react-router-dom';
import { auth, firebase } from '../services/firebase'


//Importando contexto
import{ useAuth} from '../hooks/useAuth'


export function Home(){

    const navigate = useNavigate();
    const { user, singInWithGoogle } = useAuth();


    async function handleCreateRoom() {

        if (!user){
            await singInWithGoogle();
        }
        
        navigate('/rooms/new');
    
    }

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
                    <button onClick={handleCreateRoom} className="create-room" >
                        <img src={googleIconImg} alt="logo do Google " />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>

        </div>
    )
}