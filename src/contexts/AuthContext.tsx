import { createContext, ReactNode, useEffect, useState} from 'react'
import { auth, firebase} from '../services/firebase'

//tipagens
type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type authContextType = {
    user: User | undefined;
    singInWithGoogle: () => Promise<void>;
  }


type AuthContextProviderprops = {
  children: ReactNode;
}

export const AuthContext = createContext({} as authContextType);



export function AuthContextProvider(props: AuthContextProviderprops){


  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user){
          
        const { displayName , photoURL, uid} = user
              
        if (!displayName || !photoURL){
          throw new Error('Missin information with Google Account.');
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, [])

  async function singInWithGoogle(){
    
    //cria um objeto para autenticaçao do google
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider)

    if (result.user){
          
      const { displayName , photoURL, uid} = result.user
            
      if (!displayName || !photoURL){
        throw new Error('Missin information with Google Account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return(
    <AuthContext.Provider value={{user, singInWithGoogle}}>
      {props.children}
    </AuthContext.Provider>
  );
}