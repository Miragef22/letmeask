import illustrationImg from "../assets/images/illustration.svg"
import loggoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustraçâo representando perguntas e respostas" />
                <strong>Crie salas de Question and awnser ao-vivo</strong>
                <p>Tire suas dúvidas em tempor real</p>
                
                <main>
                    <img src={loggoImg} alt="letmeask" />
                    <button>
                        <img src={googleIconImg} alt="Logo do Google " />
                        Crie sua sala com o Google
                    </button>
                    <div>ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <button type="submit" />
                    </form>
                </main>
            </aside>
        </div>
    )
}